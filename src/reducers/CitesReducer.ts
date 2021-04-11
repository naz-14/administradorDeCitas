import { CiteObject } from '../types/states'
import { CiteActions, CREATE__CITE } from '../types/ActionTypes'

const defaultState:CiteObject[] = []

export const CitesReducer = (state = defaultState, action:CiteActions) => {
  switch (action.type) {
    case 'SET__CITES':
      return action.payload
    case CREATE__CITE:
      return [...state, action.payload]
    default:
      return state
  }
}
