import React, { useState } from "react";
import "./SelectBox.scss";

function SelectBox({handleClick, selected}) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="select-box__wrapper"
      onClick={() => {
        open ? setOpen(false) : setOpen(true);
      }}
    >
      <div className="select-box">
        <div className="select-box__trigger">
          <span>{selected}</span>
          <i className="fas fa-chevron-down"></i>
        </div>
        <div
          className={`select-box__options ${
            open && "select-box__options--open"
          }`}
        >
          {selected !== "Filter by Region" ? <span className="select-box__option" onClick={handleClick}>All</span> : null}
          <span className="select-box__option" onClick={handleClick}>Africa</span>
          <span className="select-box__option" onClick={handleClick}>America</span>
          <span className="select-box__option" onClick={handleClick}>Asia</span>
          <span className="select-box__option" onClick={handleClick}>Europe</span>
          <span className="select-box__option" onClick={handleClick}>Oceania</span>
        </div>
      </div>
    </div>
  );
}

export default SelectBox;
