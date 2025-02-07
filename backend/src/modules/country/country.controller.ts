import { Request, Response } from "express";
import { CountryInfoService } from "./country.service";

class CountryInfoController {
  private countryInfoService: CountryInfoService;

  public constructor(countryInfoService: CountryInfoService) {
    this.countryInfoService = countryInfoService;
  }

  public getAllCountries = async (_req: Request, res: Response): Promise<void> => {
    res.json(await this.countryInfoService.getAllCountries())
  }

  public getCountryInfo = async (req: Request, res: Response): Promise<void> => {
    const { countryCode, countryName } = req.params;
    res.json(await this.countryInfoService.getCountryInfo(countryCode, countryName))
  }
}

export { CountryInfoController };