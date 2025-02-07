type AllCountriesPopulation = {
  data: Population[]
}

type Population = {
  country: string,
  populationCounts: {
    year: number,
    value: number
  }[]
}



export { type AllCountriesPopulation, type Population }