import { CiteObject } from '../types/states'

interface filterAndSortDatesProps {
  cites: CiteObject[]
  day?: string
}

export const filterAndSortDates = ({ day, cites }:filterAndSortDatesProps) => {
  let citesOfDay: CiteObject[]
  if (day) {
    citesOfDay = cites.filter((citesObj) => new Date(citesObj.date).getTime() === new Date(day).getTime())
  } else {
    citesOfDay = [...cites]
  }
  const citesOfDaySorted = citesOfDay.sort((a, b) => parseInt(a.time) - parseInt(b.time))
  return citesOfDaySorted as CiteObject[]
}
