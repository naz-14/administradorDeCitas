import { DataForm } from '../components/CitesForm/CitesForm'
import { AppState, CiteObject } from '../types/states'
import { AppActions, CREATE__CITE, CreateCiteActionI, SET__CITES } from '../types/ActionTypes'
import { ThunkAction } from 'redux-thunk'
import { db } from '../firebase/firebase'
import { createTodayCite } from './TodayCiteActions'
import moment from 'moment'

export const startCreateCite = (newCiteObj:DataForm): ThunkAction<void, AppState, unknown, AppActions> => async (dispatch) => {
  const notesSnap = await db.collection('cites/').add(newCiteObj)
  const newCite: CiteObject = { ...newCiteObj, id: notesSnap.id }
  dispatch(createCite(newCite))
  if (new Date(newCite.date).getTime() === new Date(moment().format('DD-MM-YYYY')).getTime()) {
    dispatch(createTodayCite(newCite))
  }
}

export const createCite = (newCite: CiteObject) => {
  return ({ type: CREATE__CITE, payload: newCite }) as CreateCiteActionI
}

export const setCites = (cites:CiteObject[]) => {
  return ({ type: SET__CITES, payload: cites })
}
