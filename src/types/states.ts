export type CiteObject = {
  id: string
  name: string
  last: string
  date: string
  time: string
  email: string
  phone: string
}
export interface AppState {
  cites: CiteObject[]
  todayCites: CiteObject[]
}
