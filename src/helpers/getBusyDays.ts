import { CiteObject } from '../types/states'

interface DayObject {
  value:string
  key:string
  optionText: string
}
export const getBusyDays = (dayOptions: DayObject[], cites: CiteObject[], hoursToWork:number):string[] => {
  const days: string[] = dayOptions.map((day) => {
    return day.value
  })
  const ocupedDays: string[] = []

  days.forEach((day) => {
    const citesPerDay = cites.filter((cite) => cite.date === day)
    if (citesPerDay.length >= hoursToWork) {
      ocupedDays.push(day)
    }
  })
  return ocupedDays
}
