import { CiteObject } from '../types/states'
import { filterAndSortDates } from '../helpers/filterAndSortDates'
import moment from 'moment'
import {
  ADD__TODAY__CITE,
  AppActions,
  DELETE__TODAY__CITE,
  DeleteTodayCiteI,
  EDIT__TODAY__CITE,
  EditTodayCiteI,
  SET__TODAY__CITES
} from '../types/ActionTypes'

export const setTodayCites = (cites:CiteObject[]): AppActions => {
  const todayCites = filterAndSortDates({ day: moment().format('DD-MM-YY'), cites: cites })
  return {
    type: SET__TODAY__CITES,
    payload: todayCites
  }
}
export const createTodayCite = (newCite:CiteObject): AppActions => ({
  type: ADD__TODAY__CITE,
  payload: newCite
})

export const editTodayCite = (newCite: CiteObject) => {
  return ({ type: EDIT__TODAY__CITE, payload: newCite }) as EditTodayCiteI
}
export const deleteTodayCite = (id:string) => {
  return ({ type: DELETE__TODAY__CITE, payload: id }) as DeleteTodayCiteI
}
