import { CiteObject } from '../types/states'

interface filterAndSortDatesProps {
  cites: CiteObject[]
  day?: string
}

export const filterAndSortDates = ({ day, cites }:filterAndSortDatesProps) => {
  let citesOfDay: CiteObject[]
  if (day) {
    citesOfDay = cites.filter((citesObj) => (citesObj.date === day))
  } else {
    citesOfDay = [...cites]
  }
  const citesOfDaySorted = citesOfDay.sort((a, b) => parseInt(a.time) - parseInt(b.time))
  return citesOfDaySorted as CiteObject[]
}
