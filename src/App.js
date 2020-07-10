import React, { useState, useEffect } from "react";
import Header from "./Header";
import Card from "./Card";

function App() {
  const [countries, setCountries] = useState([]);
  const baseEndpoint = "https://restcountries.eu/rest/v2/all";

  async function fetchCountries() {
    const response = await fetch(`${baseEndpoint}`);
    const data = await response.json();
    setCountries(data);
  }

  useEffect(() => {
    fetchCountries();
  }, []);

  return (
    <div className="App">
      <Header />
      {countries.map((country, index) => (
        <Card key={index} country={country} />
      ))}
    </div>
  );
}

export default App;
