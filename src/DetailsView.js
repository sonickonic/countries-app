import React from "react";
import { useParams, useHistory } from "react-router-dom";
import "./DetailsView.scss";

function Language({ language }) {
  return <>{language}</>;
}

function Border({ border }) {
  const history = useHistory();
  return (
    <li
      className="details__btn"
      onClick={(e) =>
        history.push(`/${e.currentTarget.innerText.toLowerCase()}`)
      }
    >
      {border}
    </li>
  );
}

function DetailsView({ countries }) {
  let { id } = useParams();
  let country = countries.find((country) => country.name.toLowerCase() === id);
  const history = useHistory();

  return (
    <>
      {country && (
        <div className="details">
          <button
            className="details__btn details__btn--back"
            onClick={(e) => history.goBack()}
          >
            <i className="details__btn-arrow fas fa-arrow-left"></i>Back
          </button>
          <img className="details__flag" src={country.flag} alt="flag" />
          <h3 className="details__title">{country.name}</h3>
          <ul className="details__list">
            <li className="details__list-item">
              <span className="details__list-item--bold">Native Name:</span>{" "}
              {country.nativeName}
            </li>
            <li className="details__list-item">
              <span className="details__list-item--bold">Population:</span>{" "}
              {country.population
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </li>
            <li className="details__list-item">
              <span className="details__list-item--bold">Region:</span>{" "}
              {country.region}
            </li>
            <li className="details__list-item">
              <span className="details__list-item--bold">Sub Region:</span>{" "}
              {country.subregion}
            </li>
            <li className="details__list-item">
              <span className="details__list-item--bold">Capital:</span>{" "}
              {country.capital}
            </li>
          </ul>
          <ul className="details__list">
            <li className="details__list-item">
              <span className="details__list-item--bold">
                Top Level Domain:
              </span>{" "}
              {country.topLevelDomain}
            </li>
            <li className="details__list-item">
              <span className="details__list-item--bold">Currencies:</span>{" "}
              {country.currencies[0].name}
            </li>
            <li className="details__list-item">
              <span className="details__list-item--bold">Languages:</span>{" "}
              {country.languages
                .map((language, index) => (
                  <Language key={index} language={language.name} />
                ))
                .reduce(
                  (acc, x) => (acc === null ? [x] : [acc, ", ", x]),
                  null
                )}
            </li>
          </ul>
          <h4 className="details__list-item--bigger">Borders countries:</h4>{" "}
          <ul className="details__list details__list--horizontal">
            {country.borders
              .map((border) =>
                countries.find((country) => country.alpha3Code === border)
              )
              .map((country, index) => (
                <Border key={index} border={country.name} />
              ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default DetailsView;
