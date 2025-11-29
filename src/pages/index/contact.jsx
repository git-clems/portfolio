import React, { useRef, useState } from 'react';
import "../css/contact.scss"
import "../css/message-sent.scss"
import emailjs from '@emailjs/browser';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Loading, { PreloadImages } from '../../components/loading';
import { imgUrl } from '../../data/dataSet';
import { removeMenu } from '../../components/appBar';

export const Merci = () => {
    return (
        <PreloadImages >
            <div id="message-sent" onClick={removeMenu} onLoad={removeMenu}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-check-fill" viewBox="0 0 16 16">
                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.026A2 2 0 0 0 2 14h6.256A4.5 4.5 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586zM16 4.697v4.974A4.5 4.5 0 0 0 12.5 8a4.5 4.5 0 0 0-1.965.45l-.338-.207z" />
                    <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0m-1.993-1.679a.5.5 0 0 0-.686.172l-1.17 1.95-.547-.547a.5.5 0 0 0-.708.708l.774.773a.75.75 0 0 0 1.174-.144l1.335-2.226a.5.5 0 0 0-.172-.686" />
                </svg>
                <p className='l1'>Message envoyé avec succès</p>
                <p className='l2'>Votre message a été bien énvoyé. Je m'assurerai de vous repondre le plus tôt possible. Merci</p>
            </div>
        </PreloadImages>
    )
}


const Contact = () => {
    const form = useRef()
    const [send, setSend] = useState(false)
    const [check, setCheck] = useState(false)
    const [isEmailSent, setIsEmailSent] = useState(false)

    const Ckecked = () => {
        setCheck(!check)
    }


    const HandleContact = (e) => {
        e.preventDefault()
        const SERVICE_ID = 'service_zlckg8l'
        const YOUR_TEMPLATE_ID = 'template_57h4o1s'
        const YOUR_PUBLIC_KEY = 'RDSApqc4TJLDBC4Y7'

        try {
            setSend(!send)
            emailjs.sendForm(
                SERVICE_ID,
                YOUR_TEMPLATE_ID,
                form.current,
                YOUR_PUBLIC_KEY
            ).then((response) => {
                if (response.status === 200) {
                    setIsEmailSent(true);
                }
            })

        } catch (error) {
            setIsEmailSent(false);
        }
    }

    function renderContent() {
        if (!send) {
            return (
                <div id="contact-page" onClick={removeMenu} onLoad={removeMenu}>
                    <div class="form-style-6">
                        <h1>Envoyez-moi un message</h1>
                        <br />
                        <form ref={form} onSubmit={HandleContact}>
                            <label htmlFor="name">Nom et prénom</label> <span style={{color : 'red'}}>*</span>
                            <input type="text" name="name" placeholder='Nom et prénom' required />

                            <label htmlFor="email">Email</label> <span style={{color : 'red'}}>*</span>
                            <input type="email" name="email" placeholder='exemple@gmail.com' required />

                            <label htmlFor="subject">Objet</label> <span style={{color : 'red'}}>*</span>
                            {
                                !check ?
                                    <select name="subject" required>
                                        <option style={{ fontFamily: "var(--font-family)" }} value="">Choisir un sujet</option>
                                        <option value="Récruter">Récruter</option>
                                        <option value="Devenir collaborateur">Devenir collaborateur</option>
                                    </select>
                                    : <input type="text" name='subject' placeholder='Votre objet de message' required />
                            }

                            <label style={{ fontSize: 14, fontFamily: "var(--subtitile-font-family)", marginRight: 10 }} htmlFor="checkbox">Un autre sujet</label>
                            <input type="checkbox" onChange={Ckecked} />
                            <br />
                            <br />

                            <label htmlFor="message">Message</label> <span style={{color : 'red'}}>*</span>
                            <textarea name="message" placeholder='Saisir votre message' required></textarea>

                            <div>
                                <button className='myButton' ><span>Envoyez</span> <FontAwesomeIcon className='icon' icon={faPaperPlane}></FontAwesomeIcon></button>
                            </div>
                        </form>
                    </div>
                </div>
            )
        }
        else if (isEmailSent) { return <Merci></Merci> }
        else { return <Loading></Loading> }
    }


    return (
        <>
            <PreloadImages imageUrls={imgUrl}>{renderContent()}</PreloadImages>
        </>
    )
}


export default Contact