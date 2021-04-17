import React from 'react'

import './listOfCites.scss'

import Cite from '../Cite/Cite'
import { useSelector } from 'react-redux'
import { AppState } from '../../types/states'

const ListOfCites = () => {
  const todayCites = useSelector((state:AppState) => state.todayCites)

  return (
    <div className="cites__list">
      <h2 className="subtitle">Citas De Hoy</h2>
      <div className="cites__grid">
        {
          todayCites.length > 0
            ? todayCites.map((cite) => (<Cite key={cite.id} {...cite} />))
            : <h2>No hay citas el dia de hoy</h2>
        }
      </div>
    </div>
  )
}

export default ListOfCites
