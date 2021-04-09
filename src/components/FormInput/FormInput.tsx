import React, { ChangeEventHandler } from 'react'

interface FormInputProps {
  name: string
  txt: string
  labelText: string
  handler: ChangeEventHandler
  value: string
}

const FormInput = ({ name, txt, handler, labelText, value }:FormInputProps) => {
  return (
    <>
      <label
        htmlFor={name}
        className={`${txt}__label`}
      >
        {labelText}
      </label>
      <input
        type="text"
        className={`${txt}__input`}
        name={name}
        onChange={handler}
        value={value}
      />
    </>
  )
}

export default FormInput
