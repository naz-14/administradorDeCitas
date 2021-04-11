import { AppState, CiteObject } from '../types/states'
import { filterAndSortDates } from '../helpers/filterAndSortDates'
import moment from 'moment'
import { ADD__TODAY__CITE, SET__TODAY__CITES, TodayActions } from '../types/ActionTypes'
import { DataForm } from '../components/CitesForm/CitesForm'
import { ThunkAction } from 'redux-thunk'
import { db } from '../firebase/firebase'

export const startCreateTodayCite = (newCiteObj:DataForm): ThunkAction<void, AppState, unknown, TodayActions> => async (dispatch) => {
  const notesSnap = await db.collection('cites/').add(newCiteObj)
  const newCite: CiteObject = { ...newCiteObj, id: notesSnap.id }
  dispatch(createTodayCite(newCite))
}

export const setTodayCites = (cites:CiteObject[]): TodayActions => {
  const todayCites = filterAndSortDates({ day: moment().format('DD-MM-YYYY'), cites: cites })
  return {
    type: SET__TODAY__CITES,
    payload: todayCites
  }
}
export const createTodayCite = (newCite:CiteObject): TodayActions => ({
  type: ADD__TODAY__CITE,
  payload: newCite
})
