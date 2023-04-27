import "./Collaborator.css"

const Collaborator = (props) => {
  const { name, jobPosition, urlImg } = props.data
  const { bgColor } = props

  return (
    <div className="collaborator">
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
