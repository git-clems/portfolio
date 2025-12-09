import { Link } from "react-router-dom"
import "./css/project.scss"


function Project(props) {
    var array = []
    for (let index = 0; index < props.length; index++) {
        array.push(props.projects[index]);
    }

    return (
        <>
            {
                array.map((project) => {
                    return (
                        <Link className="project-container" to={`/work/${project.id}`}>
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