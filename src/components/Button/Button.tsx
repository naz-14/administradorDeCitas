import React from 'react'

type buttonType = 'edit' | 'delete'

interface buttonProps {
  text: string
  type: buttonType
  handler?: () => void
}

const Button = ({ text, type, handler }:buttonProps) => {
  return (
    handler === undefined
      ? <button
          className={`btn btn-${type}`}
        >
          {text}
        </button>
      : <button
        className={`btn btn-${type}`}
        onClick={() => {
          handler()
        }}
      >
        {text}
      </button>
  )
}

export default Button
