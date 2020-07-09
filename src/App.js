import React from "react";

const baseEndpoint = "https://restcountries.eu/rest/v2/all";

async function fetchCountries() {
  const response = await fetch(`${baseEndpoint}`);
  const data = await response.json();
  console.log(data);
}

fetchCountries();

function App() {
  return <div className="App"></div>;
}

export default App;
