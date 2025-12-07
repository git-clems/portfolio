import { removeMenu } from "../../components/appBar"
import { PreloadImages } from "../../components/loading"
// import { educations, skills } from "../../data/dataSet"
import "../css/about.scss"

import { db } from "../../firebase_file"
import { collection, doc, getDoc, getDocs, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";


function About() {

    const [users, setUsers] = useState([]);
    const [educations, setEducations] = useState([]);
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        const unsub = onSnapshot(collection(db, "users"), snapshot => {
            setUsers(snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
            })));
        });

        return () => unsub();
    }, []);
    
    useEffect(()=>{
        async function LoadEducation() {
            const query = await getDocs(collection(db,'education'));
            const data = query.docs.map(doc=>({
                id:doc.id,
                ...doc.data()
            }));
            setEducations(data)
        }
        async function LoadSkills() {
            const query = await getDocs(collection(db,'sills'));
            const data = query.docs.map(doc=>({
                id:doc.id,
                ...doc.data()
            }));
            setSkills(data)
        }

        LoadEducation()
        LoadSkills()
    })

    return (
        <PreloadImages>
            <div id="about-page" onClick={removeMenu} onLoad={removeMenu}>
                {
                users.map(user => (
                    <section className="sec-1 accroche">
                        <div className="message">
                            <p className="title"><h1>A propos de moi</h1></p>
                            <p className="description">
                                <img src={user.profil} alt="Profile" />
                                <span style={{float : "none"}}></span>{user.about}
                            </p>
                        </div>
                    </section>
                    ))
                }
                <section className="sec-2 formation">
                    <div className="div-container">
                        <p className="title">Mes formations</p>
                        <ul className="list-formation">
                            {
                                educations.map((education) => {
                                    return (
                                        <>
                                            <li className="formation-item"> {education.startYear} - {education.endYear} : {education.location}</li>
                                            <p className="description">{education.description}</p>
                                            <span style={{ fontSize: 20, color: "var(--main-color)" }}>Outils / Méthodes / Mots clés</span>
                                            <div className="list-tools">
                                                {
                                                    education.tools?.map((tool) => {
                                                        return (
                                                            <span className="tool" >{tool}</span>
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
                                                <li className="skill">{skill.skill}</li>
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