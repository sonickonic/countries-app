import React, { useState } from "react";
import Card from "./Card";
import Input from "./Input";
import SelectBox from "./SelectBox";

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
    <div>
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

export default ListView;
