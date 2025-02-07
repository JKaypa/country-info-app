import { Border } from "./borders.type"
import { FlagImageUrl } from "./flag.type"
import { Population } from "./population.type"

type CountryInfo = {
  borders: Border[],
  population: Population,
  flagUrl: Omit<FlagImageUrl, 'name'>
}

export { type CountryInfo }