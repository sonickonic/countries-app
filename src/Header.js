import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Header.scss";

function Header() {
  const [theme, setTheme] = useState("light");

  function handleClick(e) {
    theme === "dark" ? setTheme("light") : setTheme("dark");

    if (e.target.checked) {
      transition();
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      transition();
      document.documentElement.setAttribute("data-theme", "light");
    }
  }

  function transition() {
    document.documentElement.classList.add("transition");
    window.setTimeout(() => {
      document.documentElement.classList.remove("transition");
    }, 1000);
  }

  const history = useHistory();

  return (
    <div className="header">
      <div className="header__container">
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
            <i className={theme === "dark" ? "fas fa-moon" : "far fa-moon"} />
          </label>
          <p className="header__dark-mode">Dark Mode</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
