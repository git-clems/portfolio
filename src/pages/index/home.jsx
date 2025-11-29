import Hero from "../../components/hero"
import { PreloadImages } from "../../components/loading"
import "../css/home.scss"
import { person, projects, domains } from "../../data/dataSet"
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
//     useEffect(() => {
//         async function loadUsers() {
//         const querySnapshot = await onSnapshot(collection(db, "users"));
//         const list = querySnapshot.docs.map(doc => ({
//             id: doc.id,
//             ...doc.data()
//         }));
//         setUsers(list);
//         console.log(users)
//     }

//     loadUsers();
//   }, [users]);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "users"), snapshot => {
        setUsers(snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
        })));
    });

    return () => unsub();
    // console.log(uns)
    }, []);

    return (
        <PreloadImages>
            <div id="home-page" onClick={removeMenu} onLoad={removeMenu}>
                <section className="l1">
                    {/* <Hero name={person.fName} description={person.description} profile={person.profile[0]}></Hero> */}
                    {
                        users.map(user => (
                            <Hero key = {`${user.id}`} name={`${user.name}`} description={user.description} profile={person.profile[0]}></Hero>
                        ))
                    }
                </section>
                <section className="l2">
                    {domains.map((domain) => { return (<Domain id={domain.id} title={domain.title} description={domain.description} ></Domain>) })}
                </section>
                <section className="l3">
                    <span className="title">Mes réalisations
                        <div className="see-more-top"><Button title={"Voir plus"} icon={faArrowRight} to={"./work"}></Button></div>
                    </span>
                    <div className="home-project-display">
                        {<Project projects={projects} lenght={projects.length >= 2 ? 2 : projects.length}></Project>}
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