import React from "react";
import "./Input.scss";

function Input({ handleChange, InputValue }) {
  return (
    <div className="input">
      <i className="fas fa-search input__icon"></i>
      <input
        placeholder="Search for a country..."
        className="input__field"
        type="text"
        name="input"
        id="input"
        value={InputValue}
        onChange={handleChange}
      ></input>
    </div>
  );
}

export default Input;
