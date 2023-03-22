import React, { useState, useEffect } from "react";
import "./Body.css";

export const Body = () => {
  const [heroes, setHeroes] = useState([]);

  useEffect(() => {
    fetch("https://www.superheroapi.com/api.php/812629123100283/search/ironman")
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
            <p className="fullnameHeroe">{heroe.biography["full-name"]}</p>
          </div>
          <div className="imgData">
            <img
              src={heroe.image["url"]}
              alt="ImgHeroe"
              className="imgPortrait"
            />
          </div>
          <div className="powerstatsData">
            <p className="powerTitle"><i class="fa-solid fa-shield-halved"></i> PowerStats <i class="fa-solid fa-shield-halved"></i></p>
            <div className="powerDesc">
              <div className="powerItem">
                <p>Intelligence</p>
                <span>{heroe.powerstats["intelligence"]}</span>
              </div>
              <div className="powerItem">
                <p>Strength</p>
                <span>{heroe.powerstats["strength"]}</span>
              </div>
              <div className="powerItem">
                <p>Speed</p>
                <span>{heroe.powerstats["speed"]}</span>
              </div>
              <div className="powerItem">
                <p>Durability</p>
                <span>{heroe.powerstats["durability"]}</span>
              </div>
              <div className="powerItem">
                <p>Power</p>
                <span>{heroe.powerstats["power"]}</span>
              </div>
              <div className="powerItem">
                <p>Combat</p>
                <span>{heroe.powerstats["combat"]}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
