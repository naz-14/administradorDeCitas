import { CiteObject } from '../types/states'

interface getBusyHoursOfDayProps {
  day: string
  cites: CiteObject[]
}
export const getBusyHoursOfDay = ({ day, cites }:getBusyHoursOfDayProps): number[] => {
  cites.forEach((cite) => {
    console.log(cite.date)
  })
  const citesOfDay: CiteObject[] = cites.filter((citeObj) => citeObj.date === day)
  citesOfDay.forEach((cite) => { console.log(cite.time) })
  const busyHoursOfDay: number[] = citesOfDay.map((citeObj) => parseInt(citeObj.time))
  return busyHoursOfDay
}
