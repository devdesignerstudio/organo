import Collaborator from "../Collaborator"
import "./Team.css"

const Team = (props) => {
  const { name, primaryColor, secondaryColor, collaborators } = props

  const css = { backgroundColor: secondaryColor }
  return (
    collaborators.length > 0 && (
      <section className="team" style={css}>
        <h3 style={{ borderColor: primaryColor }}>{name}</h3>
        <div className="collaborators">
          {collaborators.map((collaborator) => (
            <Collaborator
              bgColor={props.primaryColor}
              key={collaborator.name}
              data={collaborator}
            />
          ))}
        </div>
      </section>
    )
  )
}

export default Team
