import { Router } from "express";
import { countryInfoController } from "./country.module";

const countryRouter = Router();

countryRouter.get("/country", countryInfoController.getAllCountries);
countryRouter.get("/country/:countryCode/:countryName", countryInfoController.getCountryInfo);

export { countryRouter };