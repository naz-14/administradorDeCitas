import { CiteObject } from '../types/states'
import { TodayActions } from '../types/ActionTypes'
import { filterAndSortDates } from '../helpers/filterAndSortDates'

const defaultState:CiteObject[] = []

export const TodayCitesReducer = (state = defaultState, action:TodayActions) => {
  let newState: CiteObject[]
  switch (action.type) {
    case 'SET__TODAY__CITES':
      return action.payload
    case 'ADD__TODAY__CITE':
      newState = filterAndSortDates({ cites: [...state, action.payload] })
      return newState
    default:
      return state
  }
}
