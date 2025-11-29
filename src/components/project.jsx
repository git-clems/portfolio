import { Link } from "react-router-dom"
import "./css/project.scss"
import { getToTop } from "./scrollTop";
function Project(props) {
    var array = []
    for (let index = 0; index < props.lenght; index++) {
        array.push(props.projects[index]);
    }

    return (
        <>
            {
                array.map((project) => {
                    return (
                        <Link key={project.id} className="project-container" to={`/work/${project.id}`} onClick={() => { getToTop() }}>
                            <span >{project.title}</span>
                            <img src={project.image} alt={`${project.title}`} />
                        </Link>
                    )
                })
            }
        </>
    )
}

export default Project