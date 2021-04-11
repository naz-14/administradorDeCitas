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
          todayCites.map((cite) => (<Cite key={cite.id} {...cite} />))
        }
      </div>
    </div>
  )
}

export default ListOfCites
