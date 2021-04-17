import PageTitle from '../components/PageTitle/PageTitle'
import Cites from '../components/Cites/Cites'
import React from 'react'

const CitesAdmin = () => {
  return (
    <>
      <PageTitle title={'Administrador de Citas'}/>
      <div className="cites__wrapper">
        <Cites />
      </div>
    </>
  )
}

export default CitesAdmin
