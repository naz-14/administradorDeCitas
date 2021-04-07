import React from 'react'

import './listOfCites.scss'

import Cite from '../Cite/Cite'

const ListOfCites = () => {
  return (
    <div className="cites__list">
      <h2 className="subtitle">Citas De Hoy</h2>
      <div className="cites__grid">
        <Cite />
      </div>
    </div>
  )
}

export default ListOfCites
