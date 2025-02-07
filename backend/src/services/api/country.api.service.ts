import { AvailableCountries, FlagImageUrl, Population, AllCountriesPopulation, FlagImageUrls, Border, Borders } from "~/types/types"
import { load } from "../http/load"
import { firstLetterUpperCase } from "./helpers/uppercase.helper";

class CountryAPI {
  private baseNagerUrl = "https://date.nager.at/api/v3";
  private baseCountriesNowUrl = "https://countriesnow.space/api/v0.1/countries";

  public getAvailableCountriesList = async (): Promise<AvailableCountries> => {
    return await load(`${this.baseNagerUrl}/AvailableCountries`)
  }

  public getBorderCountriesList = async (countryCode: string): Promise<Border[]> => {
    const { borders } = await load<Borders>(`${this.baseNagerUrl}/Countryinfo/${countryCode}`)
    return borders
  }

  public getCountryPopulation = async (country: string): Promise<Population> => {
    const countryName = firstLetterUpperCase(country)
    const response = await load<AllCountriesPopulation>(`${this.baseCountriesNowUrl}/population`)
    const [population] = response.data.filter((item) => item.country === countryName)

    return population
  }

  public getCountryFlag = async (country: string): Promise<FlagImageUrl> => {
    const countryName = firstLetterUpperCase(country)
    const response = await load<FlagImageUrls>(`${this.baseCountriesNowUrl}/flag/images`)
    const [imageUrl] = response.data.filter(item => item.name === countryName)

    return imageUrl
  }

}

export { CountryAPI }