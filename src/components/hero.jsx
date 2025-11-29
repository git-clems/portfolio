import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./css/hero.scss"
import { faChartSimple, faCode, faWarehouse } from "@fortawesome/free-solid-svg-icons"


const Hero = (props) => {

    return (
            <>
                <div className="hero" >
                    <div className="accroche">
                        <div className="me">
                            <p className="cl-hi" >{props.name}</p>
                            <p className="cl-what" >{props.description}</p>
                        </div>
                        <div className="tools">
                            <div className="tool"><FontAwesomeIcon icon={faWarehouse} />SCM</div>
                            <div className="tool"><FontAwesomeIcon icon={faChartSimple} />BI</div>
                            <div className="tool"><FontAwesomeIcon icon={faCode} />Dev</div>
                        </div>
                    </div>
                    <div className="profile">
                        <img src={props.profile} alt="Mon profile" width={350} />
                    </div>
                </div>
            </>
    )
}

export default Hero