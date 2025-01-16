import { User } from './User'
import { ActivityType } from './ActivityType'

interface Rating {
  text: string
  photos: string[]
  author: User
}

export class Activity {
  id: number

  accepted: boolean

  name: string

  description: string

  activityType: ActivityType

  price: number

  ratings: Array<Rating>

  from: string

  to: string

  place: string

  priceType: string

  constructor(
    id: number,
    accepted: boolean,
    name: string,
    description: string,
    activityType: ActivityType,
    price: number,
    ratings: Array<Rating>,
    from: string,
    to: string,
    place: string,
    priceType: string
  ) {
    this.id = id
    this.accepted = accepted
    this.name = name
    this.description = description
    this.activityType = activityType
    this.price = price
    this.ratings = ratings

    this.from = from
    this.to = to
    this.place = place
    this.priceType = priceType
  }

  static fromObject(obj: any): Activity {
    return new Activity(
      obj.id,
      obj.accepted,
      obj.name,
      obj.description,
      obj.activityType,
      obj.price,
      obj.ratings,
      obj.from,
      obj.to,
      obj.place,
      obj.priceType
    )
  }
}
