import React, { useState, useEffect } from "react";
import Header from "./Header";
import Card from "./Card";
import SelectBox from "./SelectBox";

function App() {
  const [countries, setCountries] = useState([]);
  const baseEndpoint = "https://restcountries.eu/rest/v2/all";
  const [selected, setSelected] = useState("Filter by Region");

  async function fetchCountries() {
    const response = await fetch(`${baseEndpoint}`);
    const data = await response.json();
    setCountries(data);
  }

  useEffect(() => {
    fetchCountries();
  }, []);

  function handleClick(e) {
    setSelected(e.target.innerText);
  }

  function matchSelected(country) {
    if (selected === "Filter by Region") return true;
    if (selected === "All") {
      setSelected("Filter by Region");
    } else {
      return country.region.includes(selected);
    }
  }

  return (
    <div className="App">
      <Header />
      <SelectBox handleClick={handleClick} selected={selected} />
      {countries
        .filter((country) => matchSelected(country))
        .map((country, index) => (
          <Card key={index} country={country} />
        ))}
    </div>
  );
}

export default App;
