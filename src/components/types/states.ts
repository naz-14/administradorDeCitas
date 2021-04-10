export type CiteObject = {
  id: string
  name: string
  last: string
  date: string
  time: number
  email: string
  phone: number
}
export interface AppState {
  cites: CiteObject[]
}
