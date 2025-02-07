import express from 'express'
import cors from 'cors'
import { countryRouter } from './modules/country/country.routes';
import { config } from './config/config';

const app = express()

app.use(cors())
app.use(countryRouter)


app.listen(config.port, () => console.log(`Server listening at http://localhost:${config.port}`))