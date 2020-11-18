import React, { useState } from "react";
import Card from "../card";
import Input from "../input";
import SelectBox from "../selectBox";
import "./ListView.scss";

function ListView({ countries }) {
  const [selected, setSelected] = useState("Filter by Region");
  const [InputValue, setInputValue] = useState("");

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
    <div className="list">
      <div className="list__container--flex">
        <Input handleChange={handleChange} InputValue={InputValue} />
        <SelectBox handleClick={handleClick} selected={selected} />
      </div>
      <div className="list__container--flex list__container--wrap">
        {countries
          .filter((country) => matchSelected(country))
          .filter((country) => matchInput(country))
          .map((country, index) => (
            <Card key={index} country={country} />
          ))}
      </div>
    </div>
  );
}

export default ListView;
