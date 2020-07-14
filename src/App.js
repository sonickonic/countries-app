import React, { useState, useEffect } from "react";
import ListView from "./ListView";
import Header from "./Header";

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
    <div>
      <Header />
      <ListView countries={countries} />
    </div>
  );
}

export default App;
