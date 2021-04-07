import React from 'react'

import './citesForm.scss'

const CitesForm = () => {
  return (
    <div className="cites__form-wrapper">
      <h2 className="subtitle">Creacion de cita</h2>
      <form action="#" className="cites__form">
        <div className="cites__input-wrapper">
          <label
            htmlFor="name"
            className="cites__label"
          >
            Nombre
          </label>
          <input
            type="text"
            className="cites__input"
            name="name"
          />
        </div>
        <div className="cites__input-wrapper">
          <label
            htmlFor="last-name"
            className="cites__label"
          >
            Apellidos
          </label>
          <input
            type="text"
            className="cites__input"
            name="last-name"
          />
        </div>
        <div className="cites__input-wrapper">
          <label
            htmlFor="date"
            className="cites__label"
          >
            Día
          </label>
          <select
            className="cites__input"
            name="date"
          >
            <option value="">Selecciona un dia</option>
          </select>
        </div>
        <div className="cites__input-wrapper">
          <label
            htmlFor="time"
            className="cites__label"
          >
            Hora
          </label>
          <select
            className="cites__input"
            name="time"
          >
            <option value="">--</option>
            <option value="14:00">14:00</option>
          </select>
        </div>
        <div className="cites__input-wrapper">
          <label
            htmlFor="email"
            className="cites__label"
          >
            Correo
          </label>
          <input
            type="mail"
            className="cites__input"
            name="email"
          />
        </div>
        <div className="cites__input-wrapper">
          <label
            htmlFor="phone"
            className="cites__label"
          >
            Teléfono
          </label>
          <input
            type="phone"
            className="cites__input"
            name="phone"
          />
        </div>
        <button type="submit" className="btn btn-primary cites__submit">Crear Cita</button>
      </form>
    </div>
  )
}

export default CitesForm
