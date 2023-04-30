import { AiFillCloseCircle } from "react-icons/ai"
import "./Collaborator.css"

const Collaborator = (props) => {
  const { name, jobPosition, urlImg } = props.data
  const { bgColor, onDelete } = props

  return (
    <div className="collaborator">
      <AiFillCloseCircle size={25} className="delete" onClick={onDelete} />
      <div className="header-collaborator" style={{ backgroundColor: bgColor }}>
        <img src={urlImg} alt={`Github ${name}`} />
      </div>
      <div className="footer-collaborator">
        <h4>{name}</h4>
        <h5>{jobPosition}</h5>
      </div>
    </div>
  )
}

export default Collaborator
