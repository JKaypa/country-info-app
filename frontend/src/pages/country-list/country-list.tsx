import { useCallback, useEffect, useState } from "react";
import { apiCall } from "../../service/http/api-call";
import { AvailableCountriesResponse } from "../../types/available-countries-response.type";
import { Country } from "../../components/components";
import './country-list.css';
import { Link } from "react-router-dom";

const CountryList: React.FC = () => {
  const [countries, setCountries] = useState<AvailableCountriesResponse>([]);

  const fetchCountries = useCallback(async () => {
    const countriesResponse = await apiCall.getAllCountries();
    setCountries(countriesResponse);
  }, [])


  useEffect(() => {
    fetchCountries();
  }, [fetchCountries])

  return (
    <main className="countryList">
      <h1 className="countryList__title">This is a list of all available countries</h1>
      {countries.map(({ countryCode, name }) =>
        <Link to={`/${countryCode}/${name}`} key={countryCode + name}>
          <Country key={countryCode + name} countryCode={countryCode} countryName={name} />
        </Link>
      )}
    </main>)
}

export { CountryList };