import { Activity } from './Activity'
import { DateType } from '@/utils/Date'

export class LocallyTravelElement {
  id: string

  dayCount: number

  from: DateType

  to: DateType

  activity: Activity

  price: number

  numberOfPeople: number

  description: string

  photos: string[]

  constructor(
    id: string,
    dayCount: number,
    from: DateType,
    to: DateType,
    activity: Activity,
    price: number,
    numberOfPeople: number,
    description: string,
    photos: string[],
  ) {
    this.id = id
    this.dayCount = dayCount
    this.from = from
    this.to = to
    this.activity = activity
    this.numberOfPeople = numberOfPeople
    this.price = price
    this.description = description
    this.photos = photos
  }

  static fromObject(obj: any): LocallyTravelElement {
    return new LocallyTravelElement(
      obj.id,
      obj.dayCount,
      obj.from,
      obj.to,
      Activity.fromObject(obj.activity),
      obj.price,
      obj.numberOfPeople,
      obj.description,
      obj.photos,
    )
  }
}
