import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Header.scss";

function Header() {
  const [theme,setTheme] = useState("dark")

  function handleClick(e) {
    theme=== "dark" ? setTheme("light") : setTheme("dark");

    if (e.target.checked) {
      transition();
      document.documentElement.setAttribute("data-theme", "light");
    } else {
      transition();
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }

  function transition() {
    document.documentElement.classList.add("transition");
    window.setTimeout(() => {
      document.documentElement.classList.remove("transition");
    }, 1000);
  };

  const history = useHistory();

  return (
    <div className="header">
      <h1 className="header__title" onClick={(e) => history.push(`/`)}>
        Where in the world?
      </h1>
      <div className="header__toggle-container">
        <input
          onClick={handleClick}
          className="checkbox"
          type="checkbox"
          id="toggle"
        />
        <label className="switch" htmlFor="toggle">
          {theme=== "dark" ? <i className="fas fa-moon"></i> : <i className="far fa-moon"></i>}
        </label>
        <p className="header__dark-mode">Dark Mode</p>
      </div>
    </div>
  );
}

export default Header;
