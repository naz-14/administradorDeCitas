import { CiteObject } from '../types/states'
import { TodayActions } from '../types/ActionTypes'
import { filterAndSortDates } from '../helpers/filterAndSortDates'

const defaultState:CiteObject[] = []

export const TodayCitesReducer = (state = defaultState, action:TodayActions) => {
  let newState: CiteObject[]
  let index: number
  let newValues: CiteObject
  let citeId: string
  switch (action.type) {
    case 'SET__TODAY__CITES':
      return action.payload
    case 'ADD__TODAY__CITE':
      newState = filterAndSortDates({ cites: [...state, action.payload] })
      return newState
    case 'EDIT__TODAY__CITE':
      citeId = action.payload.id
      index = state.findIndex((citeObj) => citeObj.id === citeId)
      newValues = { ...action.payload }
      newState = [...state]
      newState[index] = { ...newValues }
      return newState
    case 'REMOVE__TODAY__CITE':
      index = state.findIndex((citeObj) => citeObj.id === action.payload)
      newState = [...state]
      newState.splice(index, 1)
      return newState
    default:
      return state
  }
}
