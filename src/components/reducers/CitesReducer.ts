import { CiteObject } from '../types/states'
import { AppActions } from '../types/ActionTypes'

const defaultState:CiteObject[] = []
export const CitesReducer = (state = defaultState, action:AppActions) => {
  switch (action.type) {
    case 'CREATE__CITE':
      return state
    default:
      return state
  }
}
