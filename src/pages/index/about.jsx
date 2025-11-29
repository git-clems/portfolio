import { removeMenu } from "../../components/appBar"
import { PreloadImages } from "../../components/loading"
import { educations, person, skills } from "../../data/dataSet"
import "../css/about.scss"

function About() {

    return (
        <PreloadImages>
            <div id="about-page" onClick={removeMenu} onLoad={removeMenu}>
                <section className="sec-1 accroche">
                    <div className="message">
                        <p className="title"><h1>A propos de moi</h1></p>
                        <p className="description">
                            <img src={person.profile[1]} alt="Profile" />
                            <span style={{float : "none"}}></span>{person.about}
                        </p>
                    </div>
                </section>
                <section className="sec-2 formation">
                    <div className="div-container">
                        <p className="title">Mes formations</p>
                        <ul className="list-formation">
                            {
                                educations.map((formation) => {
                                    return (
                                        <>
                                            <li className="formation-item"> {formation.period} : {formation.location}</li>
                                            <p className="description">{formation.description}</p>
                                            <span style={{ fontSize: 20, color: "var(--main-color)" }}>Outils / Méthodes / Mots clés</span>
                                            <div className="list-tools">
                                                {
                                                    formation.tools?.map((tool) => {
                                                        return (
                                                            <span className="tool" >{tool.keyword}</span>
                                                        )
                                                    })
                                                }
                                            </div>
                                            <br />
                                        </>
                                    )
                                })
                            }
                        </ul>
                    </div>

                </section>
                <section className="sec-3 skills">
                    {
                        skills ?
                            <>
                                <span className="title">Skills</span>
                                <ul className="list-skills">
                                    {
                                        skills.map(skill => {
                                            return (
                                                <li className="skill">{skill.title}</li>
                                            )
                                        })
                                    }
                                </ul>
                            </>
                            : null

                    }
                </section>
            </div>
        </PreloadImages>
    )
}

export default About