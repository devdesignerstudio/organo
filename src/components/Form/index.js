import DropdownList from "../DropdownList"
import Field from "../Field"
import Button from "../Button"
import "./Form.css"
import { useState } from "react"

const Form = (props) => {
  const [name, setName] = useState("")
  const [jobPosition, setJobPosition] = useState("")
  const [urlImg, setUrlImg] = useState("")
  const [team, setTeam] = useState("")
  const [teamName, setTeamName] = useState("")
  const [teamColor, setTeamColor] = useState("")

  const onCardSave = (event) => {
    event.preventDefault()
    props.onSave({
      name,
      jobPosition,
      urlImg,
      team,
    })
    setName("")
    setJobPosition("")
    setUrlImg("")
    setTeam("")
  }

  const onTeamSave = (event) => {
    event.preventDefault()
    props.createTeam({
      name: teamName,
      color: teamColor,
    })
    setTeamName("")
    setTeamColor("")
  }

  return (
    <section className="form-container">
      <form onSubmit={onCardSave}>
        <h2>Please fill in all fields to create collaborator's card</h2>
        <Field
          musthave={true}
          label="Name"
          placeholder="Enter your name..."
          value={name}
          onChange={(value) => setName(value)}
        />
        <Field
          musthave={true}
          label="Job Position"
          placeholder="Enter your job position..."
          value={jobPosition}
          onChange={(value) => setJobPosition(value)}
        />
        <Field
          musthave={false}
          label="Image"
          placeholder="Enter your image URL address"
          value={urlImg}
          onChange={(val) => setUrlImg(val)}
        />
        <DropdownList
          musthave={true}
          items={props.teamsName}
          label="Teams"
          value={team}
          onChange={(val) => setTeam(val)}
        />
        <Button>Save Card</Button>
      </form>
      <form className="form-teams" onSubmit={onTeamSave}>
        <h2>Please fill in all fields to create a new Team</h2>
        <Field
          musthave={true}
          label="Team name"
          placeholder="Enter Team's name..."
          value={teamName}
          onChange={(value) => setTeamName(value)}
        />
        <Field
          type="color"
          musthave={true}
          label="Team color"
          placeholder="Enter Team's color..."
          value={teamColor}
          onChange={(value) => setTeamColor(value)}
        />
        <Button>Create Team</Button>
      </form>
    </section>
  )
}

export default Form
