import Collaborator from "../Collaborator"
import "./Team.css"
import hexToRgba from "hex-to-rgba"

const Team = (props) => {
  const {
    name,
    teamId /*primaryColor*/,
    color,
    collaborators,
    onDelete,
    changeColor,
    onFavorite,
  } = props

  const css = {
    backgroundImage: "url(/img/fundo.png)",
    backgroundColor: hexToRgba(color, "0.6"),
  }

  return (
    collaborators.length > 0 && (
      <section className="team" style={css}>
        <input
          value={color}
          type="color"
          className="input-color"
          onChange={(event) => changeColor(event.target.value, teamId)}
        />
        <h3 style={{ borderColor: color }}>{name}</h3>
        <div className="collaborators">
          {collaborators.map((collaborator, index) => {
            return (
              <Collaborator
                bgColor={color}
                key={index}
                data={collaborator}
                onDelete={onDelete}
                onFavorite={onFavorite}
              />
            )
          })}
        </div>
      </section>
    )
  )
}

export default Team
