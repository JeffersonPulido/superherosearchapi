import React, { useState, useEffect } from "react";
import "./Body.css";

export const Body = () => {
  const [heroes, setHeroes] = useState([]);

  useEffect(() => {
    fetch("https://www.superheroapi.com/api.php/812629123100283/search/batman")
      .then((response) => response.json())
      .then((data) => setHeroes(data.results))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="containerData">
      {heroes.map((heroe) => (
        <div className="cardData">
          <div className="headData">
            <p key={heroe.id} className="nameHeroe">
              {heroe.name}
            </p>
            <p className="fullnameHeroe">
              {heroe.biography['full-name']}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
