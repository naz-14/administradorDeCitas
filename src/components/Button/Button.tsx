import React from 'react'

type buttonType = 'edit' | 'delete'

interface buttonProps {
  text: string
  type: buttonType
}

const Button = ({ text, type }:buttonProps) => {
  return (
    <button className={`btn btn-${type}`}>{text}</button>
  )
}

export default Button
