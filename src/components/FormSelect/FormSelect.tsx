import React, { ChangeEventHandler } from 'react'

type OptionType = {
  value: string | number
  key: string
  optionText: string
}

interface SelectFormProps {
  name: string
  txt: string
  labelText: string
  handlers: ChangeEventHandler[]
  value: string
  defaultOption: string
  options: OptionType[]
}

const FormSelect = ({ name, txt, labelText, handlers, value, defaultOption, options }:SelectFormProps) => {
  return (
    <>
      <label
        htmlFor={name}
        className={`${txt}__label`}
      >
        {labelText}
      </label>
      <select
        className={`${txt}__select`}
        name={name}
        onChange={(event) => {
          handlers.forEach((handler) => {
            handler(event)
          })
        }}
        value={value}
      >
        <option value="">{defaultOption}</option>
        {
          options.map((dayObject) => (<option value={dayObject.value} key={dayObject.value}>{name === 'time' ? dayObject.optionText + ':00' : dayObject.optionText}</option>))
        }
      </select>
    </>
  )
}

export default FormSelect
