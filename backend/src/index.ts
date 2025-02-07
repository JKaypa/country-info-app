import express from 'express'
import cors from 'cors'
import { countryRouter } from './modules/country/country.routes';

const app = express()

app.use(cors())
app.use(countryRouter)

const PORT = 8080;
app.listen(PORT, () => console.log(`Server listening at http://localhost:${PORT}`))