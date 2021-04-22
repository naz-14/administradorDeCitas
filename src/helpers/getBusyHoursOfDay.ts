import { CiteObject } from '../types/states'

interface getBusyHoursOfDayProps {
  day: string
  cites: CiteObject[]
}
export const getBusyHoursOfDay = ({ day, cites }:getBusyHoursOfDayProps): number[] => {
  const citesOfDay: CiteObject[] = cites.filter((citeObj) => citeObj.date === day)
  const busyHoursOfDay: number[] = citesOfDay.map((citeObj) => parseInt(citeObj.time))
  return busyHoursOfDay
}
