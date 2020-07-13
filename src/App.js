import React, { useState, useEffect } from "react";
import Header from "./Header";
import Card from "./Card";
import Input from "./Input";
import SelectBox from "./SelectBox";

function App() {
  const [countries, setCountries] = useState([]);
  const baseEndpoint = "https://restcountries.eu/rest/v2/all";
  const [selected, setSelected] = useState("Filter by Region");
  const [InputValue, setInputValue] = useState("");

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

  function handleChange(e) {
    setInputValue(e.target.value.toLowerCase());
  }

  function matchInput(country) {
    if (InputValue === "") return true;

    return country.name.toLowerCase().startsWith(`${InputValue}`);
  }

  return (
    <div className="App">
      <Header />
      <Input handleChange={handleChange} InputValue={InputValue} />
      <SelectBox handleClick={handleClick} selected={selected} />
      {countries
        .filter((country) => matchSelected(country))
        .filter((country) => matchInput(country))
        .map((country, index) => (
          <Card key={index} country={country} />
        ))}
    </div>
  );
}

export default App;
