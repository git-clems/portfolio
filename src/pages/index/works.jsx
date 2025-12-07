import { PreloadImages } from "../../components/loading"
// import { projects } from "../../data/dataSet"
import "../css/works.scss"
import Project from "../../components/project"
import { removeMenu } from "../../components/appBar"
import { useEffect, useState } from "react"
import { collection, doc, getDocs } from "firebase/firestore"
import { db } from "../../firebase_file"


function Works(props) {

    const [works, setWorks] = useState(null)

    useEffect(()=>{
        async function LoadWork() {
            const query = await getDocs(collection(db,'works'));
            const data = query.docs.map(doc =>({
                id:doc.id,
                ...doc.data()
            }))
            setWorks(data)
        }

        LoadWork()
    },[])

    return (
        <PreloadImages >
            <div id="works-page" onClick={removeMenu} onLoad={removeMenu}>
                <section className="accroche">
                    <p className="title"><h1>Mes réalisations</h1></p>
                    <p className="message">Consultez mes projets les plus récents ci-dessous pour avoir une idée de mon expérience.</p>
                </section>
                <section className="works">
                    <Project projects = {works} lenght = {works.length}></Project>
                </section>
            </div>
        </PreloadImages>
    )
}

export default Works