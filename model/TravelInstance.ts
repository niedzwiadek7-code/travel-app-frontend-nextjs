import { ElementTravelInstance } from './ElementTravelInstance'
import { TravelRecipe } from './TravelRecipe'

export class TravelInstance {
  id: number

  from: string

  to: string

  travelRecipe: TravelRecipe

  travelElements: ElementTravelInstance[]

  constructor(
    id: number,
    from: string,
    to: string,
    travelRecipe: TravelRecipe,
    travelElements: ElementTravelInstance[],
  ) {
    this.id = id
    this.from = from
    this.to = to
    this.travelRecipe = TravelRecipe.fromObject(travelRecipe || {})
    this.travelElements = (travelElements || []).map(
      (elem: any) => ElementTravelInstance.fromObject(elem),
    )
  }

  static fromObject(obj: any) {
    return new TravelInstance(
      obj.id,
      obj.from,
      obj.to,
      obj.travelRecipe,
      obj.travelElements,
    )
  }
}

export default TravelInstance
