import { CiteObject } from '../types/states'
import { filterAndSortDates } from '../helpers/filterAndSortDates'
import moment from 'moment'
import { ADD__TODAY__CITE, AppActions, SET__TODAY__CITES } from '../types/ActionTypes'

export const setTodayCites = (cites:CiteObject[]): AppActions => {
  const todayCites = filterAndSortDates({ day: moment().format('DD-MM-YYYY'), cites: cites })
  return {
    type: SET__TODAY__CITES,
    payload: todayCites
  }
}
export const createTodayCite = (newCite:CiteObject): AppActions => ({
  type: ADD__TODAY__CITE,
  payload: newCite
})
