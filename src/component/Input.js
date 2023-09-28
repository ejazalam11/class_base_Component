import React from 'react'

const Input = ({label, type, placeholder, value, onChange,className}) => {
  return (
    <div>
    <label>{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={className}
    />
  </div>
  )
}

export default Input
