import './country.css'

type Properties = {
  countryName: string;
  countryCode: string;
}

const Country: React.FC<Properties> = ({ countryCode, countryName }) => {

  return (
    <div className="country">
      <span className='country__name'>{countryName}</span>
      <span className='country__code'>{countryCode}</span>
    </div>
  );
}

export { Country };