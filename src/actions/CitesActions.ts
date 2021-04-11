import { DataForm } from '../components/CitesForm/CitesForm'
import { AppState, CiteObject } from '../types/states'
import { CiteActions, CREATE__CITE, CreateCiteActionI, SET__CITES } from '../types/ActionTypes'
import { ThunkAction } from 'redux-thunk'
import { db } from '../firebase/firebase'

export const startCreateCite = (newCiteObj:DataForm): ThunkAction<void, AppState, unknown, CiteActions> => async (dispatch) => {
  const notesSnap = await db.collection('cites/').add(newCiteObj)
  const newCite: CiteObject = { ...newCiteObj, id: notesSnap.id }
  dispatch(createCite(newCite))
}

export const createCite = (newCite: CiteObject) => {
  return ({ type: CREATE__CITE, payload: newCite }) as CreateCiteActionI
}

export const setCites = (cites:CiteObject[]) => {
  return ({ type: SET__CITES, payload: cites })
}
