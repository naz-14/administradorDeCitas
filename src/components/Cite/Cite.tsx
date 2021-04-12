import React from 'react'
import { Link } from 'react-router-dom'

import './cite.scss'
import Button from '../Button/Button'
import { CiteObject } from '../../types/states'

const Cite = ({ name, date, email, id, last, phone, time }:CiteObject) => {
  console.log('me renderice', name)
  return (
    <div className="cite__cite-wrapper" id={id}>
      <h3 className="cite__full-name"><span>Nombre: </span>{`${name} ${last}`}</h3>
      <p className="cite__day"><span>Día: </span>{date}</p>
      <p className="cite__hour"><span>Hora: </span>{time}:00</p>
      <p className="cite__email"><span>Correo: </span>{email}</p>
      <p className="cite__phone"><span>Teléfono: </span>{phone}</p>
      <div className="cite__buttons-wrapper">
        <Link to={`/edit/${id}`}>
          <Button text={'Editar'} type={'edit'} />
        </Link>
        <Button text={'Eliminar'} type={'delete'}/>
      </div>
    </div>
  )
}

export default React.memo(Cite)
