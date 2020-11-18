import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
  HashRouter,
} from "react-router-dom";
import ListView from "../listView";
import Header from "../header";
import DetailsView from "../detailsView";
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
      <HashRouter basename="/">
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
      </HashRouter>
    </Router>
  );
}

export default App;
