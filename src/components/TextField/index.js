import "./TextField.css"

const TextField = (props) => {
  const { label, placeholder, musthave, value } = props

  const atTyping = (event) => {
    props.onChange(event.target.value)
  }

  return (
    <div className="field-text">
      <label>{label}</label>
      <input
        value={value}
        type="text"
        placeholder={`${placeholder}...`}
        required={musthave}
        onChange={atTyping}
      />
    </div>
  )
}

export default TextField
