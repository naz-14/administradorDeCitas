import React from 'react'
import PageTitle from '../components/PageTitle/PageTitle'
import CitesForm from '../components/CitesForm/CitesForm'

const CitesEdit = () => {
  return (
    <>
      <PageTitle/>
      <div className="edit__form-wrapper">
        <CitesForm />
      </div>
    </>
  )
}

export default CitesEdit
