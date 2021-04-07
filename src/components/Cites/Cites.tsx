import React from 'react'

import './cites.scss'

import CitesForm from '../CitesForm/CitesForm'
import ListOfCites from '../ListOfCites/ListOfCites'

const Cites = () => {
  return (
    <div className="cites__wrapper">
      <CitesForm />
      <ListOfCites />
    </div>
  )
}

export default Cites
