import React from 'react'
import { InputStyle } from './TextInputStyle'

const Lauti = ({placeholder, value, onChange}) => {
  return (
    <InputStyle
      type={"text"}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}/>
  )
}

export default Lauti