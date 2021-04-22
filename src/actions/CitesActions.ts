import { DataForm } from '../components/CitesForm/CitesForm'
import { AppState, CiteObject } from '../types/states'
import {
  AppActions,
  CREATE__CITE,
  CreateCiteActionI, DELETE__CITE, DeleteCiteActionI,
  EDIT__CITE,
  EditCiteActionI,
  SET__CITES
} from '../types/ActionTypes'
import { ThunkAction } from 'redux-thunk'
import { db } from '../firebase/firebase'
import { createTodayCite, deleteTodayCite, editTodayCite } from './TodayCiteActions'
import moment from 'moment'

export const startCreateCite = (newCiteObj:DataForm): ThunkAction<void, AppState, unknown, AppActions> => async (dispatch) => {
  const notesSnap = await db.collection('cites/').add(newCiteObj)
  const newCite: CiteObject = { ...newCiteObj, id: notesSnap.id }
  dispatch(createCite(newCite))
  if (newCite.date === moment().format('DD-MM-YY')) {
    dispatch(createTodayCite(newCite))
  }
}

export const createCite = (newCite: CiteObject) => {
  return ({ type: CREATE__CITE, payload: newCite }) as CreateCiteActionI
}

export const setCites = (cites:CiteObject[]) => {
  return ({ type: SET__CITES, payload: cites })
}

export const startEditCite = (newValues: DataForm, id: string, prevDate: string): ThunkAction<void, AppState, unknown, AppActions> => async (dispatch) => {
  await db.doc(`cites/${id}`).update(newValues)
  const newCite:CiteObject = { ...newValues, id }
  dispatch(editCite(newCite))
  if (prevDate === moment().format('DD-MM-YY') && prevDate !== newCite.date) {
    dispatch(deleteTodayCite(id))
    return
  }
  if (prevDate === moment().format('DD-MM-YY')) {
    dispatch(editTodayCite(newCite))
  }
}
export const editCite = (newCite: CiteObject) => {
  return ({ type: EDIT__CITE, payload: newCite }) as EditCiteActionI
}

export const startDeleteCite = (id:string, date:string): ThunkAction<void, AppState, unknown, AppActions> => async (dispatch) => {
  await db.doc(`cites/${id}`).delete()
  dispatch(deleteCite(id))
  if (date === moment().format('DD-MM-YY')) {
    dispatch(deleteTodayCite(id))
  }
}

export const deleteCite = (id:string) => {
  return ({ type: DELETE__CITE, payload: id }) as DeleteCiteActionI
}
