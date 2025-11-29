import "./css/domain.scss"

function Domain(props) {
    return (
        <>
            <div className="domain-container">
                <span className="domain-title"> {props.title}</span>
                <p className="domain-descript" >{props.description}</p>
            </div>
        </>
    )
}

export default Domain
