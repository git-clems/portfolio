import Hero from "../../components/hero"
import { PreloadImages } from "../../components/loading"
import "../css/home.scss"
// import { projects, domains } from "../../data/dataSet"
import Project from "../../components/project"
import Button from "../../components/button"
import { faArrowRight, faPaperPlane } from "@fortawesome/free-solid-svg-icons"
import Domain from "../../components/domain"
import { removeMenu } from "../../components/appBar"



import { collection, getDocs, onSnapshot } from "firebase/firestore";
import {db} from "../../firebase_file"
import { useEffect, useState } from "react";


function Home() {
    const [users, setUsers] = useState([]);
    const [works, setWorks] = useState([]);
    const [domains, setDomains] = useState([]);

    useEffect(() => {
        const unsub = onSnapshot(collection(db, "users"), snapshot => {
            setUsers(snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        })));

        async function LoadWorks(){
            const querry = await getDocs(collection(db,"works"));
            const data = querry.docs.map((doc) => ({
                id:doc.id,
                ...doc.data()
            }));
            setWorks(data)
        }

        LoadWorks()
    });

    return () => unsub();
    // console.log(uns)
    }, []);

    useEffect(()=> {
        async function LoadDomain() {
            const querry = await getDocs(collection(db,"domain"));
            const data = querry.docs.map(doc => ({
                id:doc.id,
                ...doc.data()
            }))

            setDomains(data)
        }
        LoadDomain()
    },[])

    return (
        <PreloadImages>
            <div id="home-page" onClick={removeMenu} onLoad={removeMenu}>
                <section className="l1">
                    {
                        users.map(user => (
                            <Hero key = {`${user.id}`} name={`${user.name}`} description={user.description} profile={user.profil}></Hero>
                        ))
                    }
                </section>

                <section className="l2">
                    {
                        domains.map((domain) => { return (<Domain title={domain.title} description={domain.description} ></Domain>) })
                    }
                </section>
                <section className="l3">
                    <span className="title">Mes réalisations
                        <div className="see-more-top"><Button title={"Voir plus"} icon={faArrowRight} to={"./work"}></Button></div>
                    </span>
                    <div className="home-project-display">
                        {<Project projects={works} lenght={works.length >= 2 ? 2 : works.length}></Project>}
                    </div>
                    <div className="see-more-bottom"><Button title={"Voir plus"} icon={faArrowRight} to={"./work"}></Button></div>
                </section>
                <section className="l4">
                    <h1 style={{ marginLeft: 10, marginRight: 10 }}>Voulez-vous qu'on relève des défis ensemble ? </h1>
                    <Button title={"Envoyez-moi un message"} icon={faPaperPlane} to={"contact"}></Button>
                </section>
            </div>
        </PreloadImages>
    )

}


export default Home