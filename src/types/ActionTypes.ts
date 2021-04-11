import { CiteObject } from './states'

export const CREATE__CITE = 'CREATE__CITE'
export const DELETE__CITE = 'DELETE__CITE'
export const EDIT__CITE = 'EDIT__CITE'
export const SET__CITES = 'SET__CITES'
export const SET__TODAY__CITES = 'SET__TODAY__CITES'
export const ADD__TODAY__CITE = 'ADD__TODAY__CITE'
export const REMOVE__TODAY__CITE = 'REMOVE__TODAY__CITE'

export interface CreateCiteActionI {
  type: typeof CREATE__CITE
  payload: CiteObject
}

export interface DeleteCiteActionI {
  type: typeof DELETE__CITE
  payload: {
    id: string
  }
}
export interface EditCiteActionI {
  type: typeof EDIT__CITE
  payload: {
    id: string
  }
}

export interface SetCitesI {
  type: typeof SET__CITES
  payload: CiteObject[]
}

export interface SetTodayCitesI {
  type: typeof SET__TODAY__CITES
  payload: CiteObject[]
}

export interface AddTodayCiteI {
  type: typeof ADD__TODAY__CITE
  payload: CiteObject
}
export interface RemoveTodayCiteI {
  type: typeof REMOVE__TODAY__CITE
  payload: {
    id: string
  }
}

export type CiteActions = CreateCiteActionI | DeleteCiteActionI | EditCiteActionI | SetCitesI

export type TodayActions = SetTodayCitesI | AddTodayCiteI | RemoveTodayCiteI

export type AppActions = CiteActions | TodayActions
