import { CountryAPI } from "~/services/services";
import { CountryInfoService } from "./country.service";
import { CountryInfoController } from "./country.controller";

const countryApi = new CountryAPI();
const countryInfoService = new CountryInfoService(countryApi);
const countryInfoController = new CountryInfoController(countryInfoService);

export { countryInfoController };