import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import ListView from "./ListView";
import Header from "./Header";
import DetailsView from "./DetailsView";
import "./App.scss";

function App() {
  const [countries, setCountries] = useState([]);
  const baseEndpoint = "https://restcountries.eu/rest/v2/all";

  function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  }

  async function fetchCountries() {
    const response = await fetch(`${baseEndpoint}`);
    const data = await response.json();
    setCountries(data);
  }

  useEffect(() => {
    fetchCountries();
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact>
            <ListView countries={countries} />
          </Route>
          <Route path="/:id">
            <DetailsView countries={countries} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
