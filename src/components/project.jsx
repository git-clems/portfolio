import { Link } from "react-router-dom"
import "./css/project.scss"
import { getToTop } from "./scrollTop";
import { use, useEffect, useState } from "react";
import { collection, doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase_file";
function Project(props) {
    var array = []
    for (let index = 0; index < props.lenght; index++) {
        array.push(props.projects[index]);
    }

    const [works, setWorks] = useState([]);
    useEffect(() => {
        const unset = onSnapshot(
            collection(db,"works"), snapshot => {
                setWorks(snapshot.docs.map(doc=>({
                    id:doc.id,
                    ...doc.data()
                })))
            });
        // console.log(works)
        return() => unset();
    }, []);

    return (
        <>
            {
                works.map((project) => {
                    return (
                        <Link kek={project.id} className="project-container" to={`/work/${project.id}`}>
                            <span>{project.title}</span>
                            <img src={project.image} alt={`${project.title}`} />
                        </Link>
                    )
                })
            }
        </>
    )
}

export default Project