import { useNavigate } from "react-router-dom";
import type { Countries } from "../interfaces/Countries";

interface CountryCardProps {
  pais: Countries;
}

const CountryCard = ({ pais }: CountryCardProps) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/countries/${pais.name.common}`);
  };

  return (
    <div className="w-full dark:bg-[hsl(209,23%,22%)] rounded-lg">
      <div onClick={handleCardClick}>
        <img
          src={pais.flags.png}
          alt={`Bandeira de ${pais.name.common}`}
          className="aspect-video w-full cursor-pointer rounded-t-lg"
        />
      </div>
      <div className="p-6">
        <h3
          className="mb-4 w-fit cursor-pointer text-lg font-extrabold"
          onClick={handleCardClick}
        >
          {pais.name.common}
        </h3>
        <ul>
          <li>
            <p>
              <strong>Population: </strong>
              {Intl.NumberFormat().format(pais.population)}
            </p>
          </li>
          <li>
            <p>
              <strong>Region: </strong>
              {pais.region}
            </p>
          </li>
          <li>
            <p>
              <strong>Capital: </strong>
              {pais.capital}
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CountryCard;