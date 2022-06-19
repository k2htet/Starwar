import React from "react";

const Card = ({ item }) => {
  return (
    <div className="card">
      {!item.hasOwnProperty("height") ? (
        <>
          <h3>{item.name}</h3>
          <p>Population - {item.population}</p>
          <p>Terrain - {item.terrain}</p>
        </>
      ) : (
        <>
          <h3>{item.name}</h3>
          <p>Gender - {item.gender}</p>
          <p>Birth Year - {item.birth_year}</p>
        </>
      )}
    </div>
  );
};

export default Card;
