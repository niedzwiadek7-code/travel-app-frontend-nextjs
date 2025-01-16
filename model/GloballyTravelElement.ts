import { Activity } from './Activity'

export class GloballyTravelElement {
  id: string

  from: number

  to: number

  activity: Activity

  price: number

  numberOfPeople: number

  description: string

  photos: string[]

  constructor(
    id: string,
    from: number,
    to: number,
    activity: Activity,
    price: number,
    numberOfPeople: number,
    description: string,
    photos: string[]
  ) {
    this.id = id
    this.from = from
    this.to = to
    this.activity = activity
    this.numberOfPeople = numberOfPeople
    this.price = price
    this.description = description
    this.photos = photos
  }

  static fromObject(obj: any): GloballyTravelElement {
    return new GloballyTravelElement(
      obj.id,
      obj.from,
      obj.to,
      Activity.fromObject(obj.activity),
      obj.price,
      obj.numberOfPeople,
      obj.description,
      obj.photos
    )
  }
}
