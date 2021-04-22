import { CiteObject } from '../types/states'
import { CiteActions, CREATE__CITE } from '../types/ActionTypes'

const defaultState:CiteObject[] = []

export const CitesReducer = (state = defaultState, action:CiteActions) => {
  let citeId:string
  let newState:CiteObject[]
  let index: number
  let newValues:CiteObject
  switch (action.type) {
    case 'SET__CITES':
      return action.payload
    case CREATE__CITE:
      return [...state, action.payload]
    case 'EDIT__CITE':
      citeId = action.payload.id
      index = state.findIndex((citeObj) => citeObj.id === citeId)
      newValues = { ...action.payload }
      newState = [...state]
      newState[index] = { ...newValues }
      return newState
    default:
      return state
  }
}
