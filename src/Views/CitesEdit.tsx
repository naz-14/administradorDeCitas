import React from 'react'
import PageTitle from '../components/PageTitle/PageTitle'
import CitesForm from '../components/CitesForm/CitesForm'
import { Redirect, RouteComponentProps } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getSpecificCite } from '../helpers/getSpecificCite'
import { AppState } from '../types/states'

type TParams = { id: string}

const CitesEdit = ({ match }:RouteComponentProps<TParams>) => {
  const { cites } = useSelector((state:AppState) => state)
  const id = match.params.id
  const citeToedit = getSpecificCite(id)
  console.log(citeToedit, cites)
  return (
    <>
      <PageTitle title={'Editor de Cita'}/>
      <div className="cites__wrapper">
        <div className="edit__form-wrapper">
          {
            cites.length !== 0 && citeToedit
              ? <CitesForm
                formInitState={citeToedit}
                submitAction={'edit'}
                submitText={'Guardar Cambios'}
                citeId={id}
                />
              : cites.length !== 0 && !citeToedit ? <Redirect to={'/'}/> : ''
          }
        </div>
      </div>
    </>
  )
}

export default CitesEdit
