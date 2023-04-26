import DropdownList from "../DropdownList"
import TextField from "../TextField"
import Button from "../Button"
import "./Form.css"
import { useState } from "react"

const Form = (props) => {
  const [name, setName] = useState("")
  const [jobPosition, setJobPosition] = useState("")
  const [urlImg, setUrlImg] = useState("")
  const [team, setTeam] = useState("")

  const atSave = (event) => {
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

  return (
    <section className="form">
      <form onSubmit={atSave}>
        <h2>Please fill in all fields to create collaborator's card</h2>
        <TextField
          musthave={true}
          label="Name"
          placeholder="Enter your name..."
          value={name}
          onChange={(value) => setName(value)}
        />
        <TextField
          musthave={true}
          label="Job Position"
          placeholder="Enter your job position..."
          value={jobPosition}
          onChange={(value) => setJobPosition(value)}
        />
        <TextField
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
    </section>
  )
}

export default Form
