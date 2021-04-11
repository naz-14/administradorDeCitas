import React, { ChangeEvent, SyntheticEvent, useEffect, useState } from 'react'
import moment from 'moment/moment'
import { v4 as uuidv4 } from 'uuid'

import './citesForm.scss'

import useForm from '../../hooks/useForm'
import FormInput from '../FormInput/FormInput'
import FormSelect from '../FormSelect/FormSelect'
import { useDispatch, useSelector } from 'react-redux'
import { startCreateCite } from '../../actions/CitesActions'
import { getBusyHoursOfDay } from '../../helpers/getBusyHoursOfDay'
import { AppState } from '../../types/states'

export interface DataForm {
  name: string
  last: string
  date: string
  time: string
  email: string
  phone: string
}
type DayObject ={
  value:string
  key:string
  optionText: string
}
type HoursObject = {
  value: number
  key:string
  optionText: string
}

const CitesForm = () => {
  const dispatch = useDispatch()
  const { cites } = useSelector((state:AppState) => state)
  const [formValues, handleInputChange, reset] = useForm<DataForm>({
    name: '',
    last: '',
    date: '',
    time: '',
    email: '',
    phone: ''
  })
  const [disponibleHours, setDisponibleHours] = useState<HoursObject[]>([])
  const handleBusyHours = ({ target }:ChangeEvent<HTMLSelectElement>) => {
    const busyHours: number[] = getBusyHoursOfDay({ day: target.value, cites: cites })
    const filteredHours = hours.filter(hour => (!busyHours.includes(hour)))
    setDisponibleHours(():HoursObject[] =>
      (filteredHours.map((hour):HoursObject =>
        ({ value: hour, optionText: hour.toString(), key: uuidv4() }))))
  }
  const initialDays: DayObject[] = [{ value: moment().format('DD-MM-YY'), key: uuidv4(), optionText: moment().format('D-MMMM-YY') }]
  const [dayOptions, setDayOptions] = useState(initialDays)
  const daysToShowFromNow: number = 30
  let startHour: number = 8
  const hoursToWork: number = 12
  const hours: number[] = []
  for (let i = hoursToWork; i >= 0; i--) {
    hours.push(startHour)
    startHour++
  }
  const busyDays: string[] = ['12/4/21', '23/4,21']
  useEffect(() => {
    for (let i:number = 1; i <= daysToShowFromNow; i++) {
      setDayOptions(prevState => ([
        ...prevState,
        {
          value: moment().add(i, 'days').format('DD-MM-YY'),
          optionText: moment().add(i, 'days').format('D-MMMM-YY'),
          key: uuidv4()
        }
      ]))
    }
  }, [])
  const daysToShow: DayObject[] = dayOptions.filter((dayObject) => {
    return !busyDays.includes(dayObject.value)
  })

  const citeFormSubmitHandler = (evt: SyntheticEvent) => {
    evt.preventDefault()
    dispatch(startCreateCite(formValues))
  }
  const updateBusyHours = (evt: SyntheticEvent) => {
    const busyHours: number[] = getBusyHoursOfDay({ day: formValues.date, cites: cites })
    const filteredHours = hours.filter(hour => (!busyHours.includes(hour)))
    setDisponibleHours(():HoursObject[] =>
      (filteredHours.map((hour):HoursObject =>
        ({ value: hour, optionText: hour.toString(), key: uuidv4() }))))
    reset()
  }
  return (
    <div className="cites__form-wrapper">
      <h2 className="subtitle">Creacion de cita</h2>
      <form
        action="#"
        className="cites__form"
        onSubmit={(evt) => {
          citeFormSubmitHandler(evt)
          updateBusyHours(evt)
        }
        }
      >
        <div className="cites__input-wrapper">
          <FormInput
            name={'name'}
            txt={'cites'}
            labelText={'Nombre'}
            handler={handleInputChange}
            value={formValues.name}
          />
        </div>
        <div className="cites__input-wrapper">
          <FormInput
            name={'last'}
            txt={'cites'}
            labelText={'Apellido'}
            handler={handleInputChange}
            value={formValues.last}
          />
        </div>
        <div className="cites__input-wrapper">
          <FormSelect
            name={'date'}
            txt={'cites'}
            labelText={'Dia'}
            handlers={[handleInputChange, handleBusyHours]}
            value={formValues.date}
            defaultOption={'Selecciona un dia'}
            options={daysToShow} />
        </div>
        <div className="cites__input-wrapper">
          <FormSelect
            name={'time'}
            txt={'cites'}
            labelText={'Hora'}
            handlers={[handleInputChange]}
            value={formValues.time}
            defaultOption={'Selecciona una hora'}
            options={disponibleHours}
            disabled={formValues.date === '0'}
          />
        </div>
        <div className="cites__input-wrapper">
          <FormInput
            name={'email'}
            txt={'cites'}
            labelText={'Correo'}
            handler={handleInputChange}
            value={formValues.email}
          />
        </div>
        <div className="cites__input-wrapper">
          <FormInput
            name={'phone'}
            txt={'cites'}
            labelText={'Teléfono'}
            handler={handleInputChange}
            value={formValues.phone}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary cites__submit"
          id="submitForm"
        >
          Crear Cita
        </button>
      </form>
    </div>
  )
}

export default CitesForm
