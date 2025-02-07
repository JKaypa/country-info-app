import { Border } from "./borders.type"
import { FlagImageUrl } from "./flag.type"
import { Population } from "./population.type"

type CountryInfoResponse = {
  borders: Border[],
  population: Population,
  flagUrl: Omit<FlagImageUrl, 'name'>
}

export { type CountryInfoResponse }