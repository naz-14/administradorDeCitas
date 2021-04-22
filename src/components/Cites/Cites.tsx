import React from 'react'

import './cites.scss'

import CitesForm from '../CitesForm/CitesForm'
import ListOfCites from '../ListOfCites/ListOfCites'

const Cites = () => {
  return (
    <div className="cites__wrapper">
      <CitesForm
        formInitState={
          {
            name: '',
            last: '',
            date: '',
            time: '',
            email: '',
            phone: ''
          }
        }
        submitText={'Crear cita'}
        submitAction={'create'}
      />
      <ListOfCites />
    </div>
  )
}

export default Cites
