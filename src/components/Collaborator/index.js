import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from "react-icons/ai"
import "./Collaborator.css"

const Collaborator = (props) => {
  const { name, jobPosition, urlImg, id, star } = props.data
  const { bgColor, onDelete, onFavorite } = props

  function bookmark() {
    console.log(star)
    onFavorite(id)
  }

  const propsFavorite = {
    size: 25,
    onClick: bookmark,
  }

  return (
    <div className="collaborator">
      <AiFillCloseCircle
        size={25}
        className="delete"
        onClick={() => onDelete(id)}
      />
      <div className="header-collaborator" style={{ backgroundColor: bgColor }}>
        <img src={urlImg} alt={`Github ${name}`} />
      </div>
      <div className="footer-collaborator">
        <h4>{name}</h4>
        <h5>{jobPosition}</h5>
        <div className="starred">
          {star ? (
            <AiFillHeart {...propsFavorite} color="#ff0000" />
          ) : (
            <AiOutlineHeart {...propsFavorite} />
          )}
        </div>
      </div>
    </div>
  )
}

export default Collaborator
