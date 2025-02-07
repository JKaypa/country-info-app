import { CountryAPI } from '~/services/services'
import { AvailableCountries, CountryInfo } from '~/types/types';

class CountryInfoService {
  private countryApi: CountryAPI;

  public constructor(countryApi: CountryAPI) {
    this.countryApi = countryApi;
  }

  public getAllCountries = async (): Promise<AvailableCountries> => {
    return await this.countryApi.getAvailableCountriesList();
  }

  public getCountryInfo = async (countryCode: string, countryName: string): Promise<CountryInfo> => {
    
    const borders = await this.countryApi.getBorderCountriesList(countryCode);
    const population = await this.countryApi.getCountryPopulation(countryName);
    const flagUrl = await this.countryApi.getCountryFlag(countryName);

    return { borders, flagUrl, population }
  }
}

export { CountryInfoService }