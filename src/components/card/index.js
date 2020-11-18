import React from "react";
import { useHistory } from "react-router-dom";
import "./Card.scss";
import formatPopulation from "../../utils/formatPopulation";

function Card({ country }) {
  const history = useHistory();

  return (
    <div
      className="card"
      onClick={() => history.push(`/${country.name.toLowerCase()}`)}
    >
      <img className="card__flag" src={country.flag} alt="flag" />
      <div className="card__container">
        <h3 className="card__title">{country.name}</h3>
        <ul className="card__list">
          <li className="card__list-item">
            <span className="card__list-item--bold">Population:</span>
            {formatPopulation(country.population)}
          </li>
          <li className="card__list-item">
            <span className="card__list-item--bold">Region:</span>
            {country.region}
          </li>
          <li className="card__list-item">
            <span className="card__list-item--bold">Capital:</span>
            {country.capital}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Card;
