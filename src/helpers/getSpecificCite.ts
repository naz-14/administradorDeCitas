import { useSelector } from 'react-redux'
import { AppState, CiteObject } from '../types/states'

export const getSpecificCite = (id:string) => {
  const { cites } = useSelector((state:AppState) => state)
  const citeToEdit = cites.find((citeObj) => citeObj.id === id)
  if (citeToEdit !== undefined) {
    return citeToEdit as CiteObject
  }
  return null
}
