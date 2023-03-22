import React, { useState, useEffect } from "react";
import "./Body.css";

export const Body = () => {
  const [heroes, setHeroes] = useState([]);

  useEffect(() => {
    fetch("https://www.superheroapi.com/api.php/812629123100283/search/captain").then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Something went wrong');
    })
    .then((data) => setHeroes(data.results))
    .catch((error) => setHeroes(error));
  }, []);

  if (heroes != 1) {
    return (
      <>
        <div className="containerData">
          {heroes.map((heroe) => (
            <div className="cardData" data-aos="flip-left" data-aos-delay="100">
              <div className="headData">
                <p key={heroe.id} className="nameHeroe"> {heroe.name} </p>
                <p className="fullnameHeroe">{heroe.biography["full-name"]}</p>
              </div>
              <div className="imgData">
                <img data-aos="fade-up" data-aos-delay="300" src={heroe.image["url"]} alt="ImgHeroe" className="imgPortrait" />
              </div>
              <div className="powerstatsData">
                <p className="powerTitle"><i class="fa-solid fa-shield-halved fa-beat-fade"></i> PowerStats <i class="fa-solid fa-shield-halved fa-beat-fade"></i></p>
                <div className="powerDesc">
                  <div className="powerItem" data-aos="flip-left" data-aos-delay="300">
                    <p>Intelligence</p>
                    <span>{heroe.powerstats["intelligence"]}</span>
                  </div>
                  <div className="powerItem" data-aos="flip-left" data-aos-delay="300">
                    <p>Strength</p>
                    <span>{heroe.powerstats["strength"]}</span>
                  </div>
                  <div className="powerItem" data-aos="flip-left" data-aos-delay="300">
                    <p>Speed</p>
                    <span>{heroe.powerstats["speed"]}</span>
                  </div>
                  <div className="powerItem" data-aos="flip-left" data-aos-delay="300">
                    <p>Durability</p>
                    <span>{heroe.powerstats["durability"]}</span>
                  </div>
                  <div className="powerItem" data-aos="flip-left" data-aos-delay="300">
                    <p>Power</p>
                    <span>{heroe.powerstats["power"]}</span>
                  </div>
                  <div className="powerItem" data-aos="flip-left" data-aos-delay="300">
                    <p>Combat</p>
                    <span>{heroe.powerstats["combat"]}</span>
                  </div>
                </div>
              </div>
              <hr className="hr"/>
              <div className="appearanceData">
                <p className="powerTitle"><i class="fa-solid fa-star fa-bounce"></i> Appearance <i class="fa-solid fa-star fa-bounce"></i></p>
                <div className="powerDesc">
                  <div className="powerItem" data-aos="flip-right" data-aos-delay="600">
                    <p>Gender</p>
                    <span>{heroe.appearance["gender"]}</span>
                  </div>
                  <div className="powerItem" data-aos="flip-right" data-aos-delay="600">
                    <p>Race</p>
                    <span>{heroe.appearance["race"]}</span>
                  </div>
                  <div className="powerItem" data-aos="flip-right" data-aos-delay="600">
                    <p>Height</p>
                    <span>{heroe.appearance["height"][1]}</span>
                  </div>
                  <div className="powerItem" data-aos="flip-right" data-aos-delay="600">
                    <p>Weight</p>
                    <span>{heroe.appearance["weight"][1]}</span>
                  </div>
                  <div className="powerItem" data-aos="flip-right" data-aos-delay="600">
                    <p>Eye Color</p>
                    <span>{heroe.appearance["eye-color"]}</span>
                  </div>
                  <div className="powerItem" data-aos="flip-right" data-aos-delay="600">
                    <p>Hair Color</p>
                    <span>{heroe.appearance["hair-color"]}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }else{
    return (
      <>
        <div>
          <h1>¡Es hora de buscar un superhéroe!</h1>
        </div>
      </>
    )
  }
};
