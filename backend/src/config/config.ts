import { loadEnvFile } from "node:process";

loadEnvFile()

const config = {
  baseNagerUrl: process.env.BASE_NAGER_URL,
  baseCountriesNowUrl: process.env.BASE_COUNTRIES_NOW_URL,
  port: process.env.PORT ?? 8080
}

export { config }