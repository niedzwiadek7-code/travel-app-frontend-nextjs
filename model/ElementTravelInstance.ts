import { Activity } from './Activity'
import { LocallyTravelElement } from './LocallyTravelElement'

export class ElementTravelInstance {
  id: number

  passed: boolean

  photos: string[]

  from: string

  to: string

  activity: Activity

  elementTravel?: LocallyTravelElement

  constructor(
    id: number,
    passed: boolean,
    photos: string[],
    from: string,
    to: string,
    activity: Activity,
    elementTravel?: LocallyTravelElement
  ) {
    this.id = id
    this.passed = passed
    this.photos = photos
    this.from = from
    this.to = to
    this.activity = Activity.fromObject(activity)
    this.elementTravel = elementTravel || undefined
  }

  static fromObject(obj: any): ElementTravelInstance {
    return new ElementTravelInstance(
      obj.id,
      obj.passed,
      obj.photos,
      obj.from,
      obj.to,
      obj.activity,
      obj.elementTravel
    )
  }
}

