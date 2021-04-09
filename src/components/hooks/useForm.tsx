import { ChangeEvent, useState } from 'react'

const useForm = <T extends Object>(initState: T) => {
  const [formValues, setFormValues] = useState(initState)
  const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value
    })
  }
  return [
    formValues,
    handleInputChange
  ] as const
}

export default useForm
