import { LocallyTravelElement } from './LocallyTravelElement'
import { GloballyTravelElement } from './GloballyTravelElement'

export class TravelRecipe {
  id: number

  name: string

  travelElementsLocally: LocallyTravelElement[]

  travelElementsGlobally: GloballyTravelElement[]

  countDays: number

  constructor(
    id: number,
    name: string,
    travelElements: LocallyTravelElement[],
    accommodations: GloballyTravelElement[],
    countDays: number,
  ) {
    this.id = id
    this.name = name || ''

    this.travelElementsLocally = (travelElements || [])
      .map((elem: any) => LocallyTravelElement.fromObject(elem))

    this.travelElementsGlobally = (accommodations || [])
      .map((elem: any) => GloballyTravelElement.fromObject(elem))

    this.countDays = countDays
  }

  static fromObject(obj: any) {
    return new TravelRecipe(
      obj.id,
      obj.name,
      obj.travelElementsLocally,
      obj.travelElementsGlobally,
      obj.countDays,
    )
  }
}

