import React from "react";
import { usePageContext } from "../context/PageContext";

const Navbar = () => {
  const { dispatch, activePlanetsPage, activePeoplePage } = usePageContext();
  return (
    <nav>
      <button
        onClick={() => dispatch({ type: "PLANETS", payload: true })}
        className={activePlanetsPage ? "active" : ""}
      >
        Planets
      </button>
      <button
        onClick={() => dispatch({ type: "PEOPLES", payload: true })}
        className={activePeoplePage ? "active" : ""}
      >
        People
      </button>
    </nav>
  );
};

export default Navbar;
