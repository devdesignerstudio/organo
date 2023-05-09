import "./Field.css"

const Field = (props) => {
  const { type = "text", label, placeholder, musthave = false, value } = props

  const atTyping = (event) => {
    props.onChange(event.target.value)
  }

  return (
    <div className={`field field-${type}`}>
      <label>{label}</label>
      <input
        type={type}
        value={value}
        placeholder={`${placeholder}...`}
        required={musthave}
        onChange={atTyping}
      />
    </div>
  )
}

export default Field
