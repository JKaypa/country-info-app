import React, { useCallback, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { apiCall } from "../../service/service";
import './country-info.css';
import { Chart, Country } from "../../components/components";
import { Border } from "../../types/borders.type";


const CountryInfo: React.FC = () => {
  const [countryName, setCountryName] = useState<string>("");
  const [population, setPopulation] = useState<number[]>([]);
  const [flag, setFlag] = useState<string>("");
  const [years, setYears] = useState<number[]>([]);
  const [borders, setBorders] = useState<Border[]>([]);

  const { code, name } = useParams<{ code: string, name: string }>();

  const fetchCountryInfo = useCallback(async () => {
    if (!code || !name) return;
    const response = await apiCall.getCountryInfo(code, name)

    setCountryName(response.population?.country)
    setFlag(response.flagUrl?.flag)
    setPopulation(response.population?.populationCounts.map(elements => elements.value))
    setYears(response.population?.populationCounts.map(elements => elements.year))
    setBorders(response.borders)

  }, [code, name]);

  useEffect(() => {
    fetchCountryInfo();
  }, [fetchCountryInfo])


  return (
    <main className="info">
      {
        countryName ?
          <>
            <section className="info">
              <h1 className="info__title">{countryName}</h1>
              <img className="info__flag" src={flag} alt="flag" />
            </section>
            <section className="info info__bar-title">
              <h2 className="info__bar-title">{`Evolution of ${countryName}'s population from 1960 to 2018`}</h2>
              <Chart population={population}
                years={years} />
            </ section>
            <section >
              <h2 className="info info__bar-title">Countries that border {countryName}</h2>
              <div className="info__borders">
                {borders.map((border, index) =>
                  <Link to={`/${border.countryCode}/${border.commonName}`} key={index}>
                    <Country countryName={border.commonName} countryCode={border.countryCode} key={index} />
                  </Link>
                )}
              </div>
            </section>
          </>
          :
          <h1>Loading...</h1>
      }
    </main>
  )
}

export { CountryInfo };