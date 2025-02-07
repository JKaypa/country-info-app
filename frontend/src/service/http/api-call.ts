import { AvailableCountriesResponse } from "../../types/available-countries-response.type"
import { CountryInfoResponse } from "../../types/country-info-response.type"
import { load } from "./load"

class APICall {
  public getAllCountries = async () => {
    return await load<AvailableCountriesResponse>("http://localhost:8080/country")
  }

  public getCountryInfo = async (countryCode: string, countryName: string) => {
    return await load<CountryInfoResponse>(`http://localhost:8080/country/${countryCode}/${countryName}`)
  }
}

const apiCall = new APICall();

export { apiCall }