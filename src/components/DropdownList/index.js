import "./List.css"

const DropdownList = (props) => {
  const { label, items, musthave, value } = props

  return (
    <div className="dropdownlist">
      <label>{label}</label>
      <select
        onChange={(event) => props.onChange(event.target.value)}
        value={value}
        required={musthave}
      >
        <option key="" value=""></option>
        {items.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  )
}

export default DropdownList
