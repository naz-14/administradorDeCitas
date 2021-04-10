import { CiteObject } from './states'

export const CREATE__CITE = 'CREATE__CITE'
export const DELETE__CITE = 'DELETE__CITE'
export const EDIT__CITE = 'EDIT__CITE'

interface CreateCiteActionI {
  type: typeof CREATE__CITE
  payload: CiteObject
}

interface DeleteCiteActionI {
  type: typeof DELETE__CITE
  payload: {
    id: string
  }
}
interface EditCiteActionI {
  type: typeof EDIT__CITE
  payload: {
    id:string
  }
}

export type CiteActions = CreateCiteActionI | DeleteCiteActionI | EditCiteActionI

export type AppActions = CiteActions
