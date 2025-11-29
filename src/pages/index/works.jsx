import { PreloadImages } from "../../components/loading"
import { projects } from "../../data/dataSet"
import "../css/works.scss"
import Project from "../../components/project"
import { removeMenu } from "../../components/appBar"


function Works(props) {
    return (
        <PreloadImages >
            <div id="works-page" onClick={removeMenu} onLoad={removeMenu}>
                <section className="accroche">
                    <p className="title"><h1>Mes réalisations</h1></p>
                    <p className="message">Consultez mes projets les plus récents ci-dessous pour avoir une idée de mon expérience.</p>
                </section>
                <section className="works">
                    <Project projects = {projects} lenght = {projects.length}></Project>
                </section>
            </div>
        </PreloadImages>
    )
}

export default Works