import { useParams } from "react-router-dom";
import { PreloadImages } from "../../components/loading"
import { projects } from "../../data/dataSet"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListCheck, faLocationDot, faCalendarPlus } from "@fortawesome/free-solid-svg-icons";
import "../css/detail.scss"
import { removeMenu } from "../../components/appBar";
import Page404 from "./page404";

function Detail() {
    let params = useParams()

    // eslint-disable-next-line eqeqeq
    const selectedProject = projects.find((p) => p.id == params.id)
    function ImageSize() {
        const img = document.querySelector('.img-targeted')
        if (img.clientHeight > img.clientWidth) {
            img.style.width = "300px"
        }
    }

    return (
        <PreloadImages>
            {
                selectedProject ?
                    <div id="detail-page" onClick={removeMenu} onLoad={removeMenu}>
                        <section className="sec-1">
                            <div className="title-image cl">
                                <p className="title">{params ? selectedProject.title : "-"}</p>
                                <div className="image">
                                    <img className="img-targeted" src={selectedProject.image} alt={`${selectedProject.title}`}
                                        onLoad={() => ImageSize()}
                                    />
                                </div>
                            </div>
                            {
                                selectedProject.description ?
                                    <div className="description-tools cl">
                                        <span style={{ fontSize: 20, color: "var(--main-color)" }}>Description</span>
                                        <p className="description">{selectedProject?.description}</p>
                                        {
                                            selectedProject.location || selectedProject.period ?
                                                <p style={{ fontSize: 13, color: "var(--subtitle-color)" }}>
                                                    <FontAwesomeIcon icon={faLocationDot} style={{ marginRight: 5 }} /> {selectedProject.location}
                                                    <br />
                                                    <FontAwesomeIcon icon={faCalendarPlus} style={{ marginRight: 5 }} />{selectedProject.period}
                                                </p>
                                                : null
                                        }
                                        {
                                            selectedProject.tools ?
                                                <span style={{ fontSize: 20, color: "var(--main-color)" }}>Outils / Méthodes / Mots clés</span>
                                                : null
                                        }
                                        <div className="tools-list">
                                            {
                                                selectedProject.tools?.map((tool) => {
                                                    return (
                                                        <span className="tool" >{tool.keyword}</span>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                    : null
                            }
                        </section>
                        {
                            selectedProject.steps ?
                                <section className="sec-2">
                                    <span className="title"><FontAwesomeIcon style={{ marginRight: 10 }} icon={faListCheck}></FontAwesomeIcon>Les differentes étapes</span>
                                    <div style={{ display: "flex", justifyContent: "center" }}>
                                        <div className="list-step">
                                            {
                                                selectedProject.steps?.map((step) => {
                                                    return (
                                                        <>
                                                            <span className="step">Phase {step.id}: {step.step}</span>
                                                            <p className="description">{step.description}</p>
                                                        </>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </section> : ""
                        }
                    </div>
                    : <Page404 title={"Projet introuvable"} prev={{ page: "Réalisations", link: '/work' }}></Page404>
            }
        </PreloadImages>
    )
}

export default Detail