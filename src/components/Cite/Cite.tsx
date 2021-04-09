import React from 'react'

import './cite.scss'
import Button from '../Button/Button'

const Cite = () => {
  return (
    <div className="cite__cite-wrapper">
      <h3 className="cite__full-name"><span>Nombre: </span>Uriel</h3>
      <p className="cite__day"><span>Día: </span>14-Diciembre-1995</p>
      <p className="cite__hour"><span>Hora: </span>14:00</p>
      <p className="cite__email"><span>Correo: </span>pwnaz@mail.com</p>
      <p className="cite__phone"><span>Teléfono: </span>5569636585</p>
      <div className="cite__buttons-wrapper">
        <Button text={'Editar'} type={'edit'} />
        <Button text={'Eliminar'} type={'delete'} />
      </div>
    </div>
  )
}

export default Cite
