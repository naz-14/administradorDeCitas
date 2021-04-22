import { db } from '../firebase/firebase'
import { CiteObject } from '../types/states'

export const loadCites = async () => {
  const citesSnap = await db.collection('cites').get()
  const cites: CiteObject[] = []
  citesSnap.forEach((citeChild) => {
    cites.push({
      id: citeChild.id,
      ...citeChild.data()
    }as CiteObject)
  })
  return cites as CiteObject[]
}
