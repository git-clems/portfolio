import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
import './css/button.scss'
import { getToTop } from "./scrollTop"

const BackButton = (props) => {
    return (
        <Link className="myButton" to={props.to} 
        onClick={() => { getToTop()}}
        >
            <FontAwesomeIcon className="icon" icon={props.icon} />
            <span>{props.title}</span>
        </Link>
    )
}

export default BackButton