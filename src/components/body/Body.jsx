import React, { useState } from "react";
import logoProgramate from '../../images/image.webp'
import logoJpulido from '../../images/sello.webp'
import "./Body.css";

export const Body = () => {

  //State inicial de la API search/names
  const [heroes, setHeroes] = useState([]);
  //State con buscador
  const [busqueda, setBusqueda] = useState("");
  //State contador
  const [counterUser, setcounterUser] = useState(0);
  //evento de Enter que dispara el fetch de la API con el valor especifico
  const handleEnter = (event) => {
    if (event.key === 'Enter') {
      const valueInput = event.target.value
      fetch(`https://www.superheroapi.com/api.php/812629123100283/search/${valueInput}`).then((response) => {
      if (response.ok) {
        return response.json();
      }
        throw new Error('Something went wrong');
      })
      .then((data) => setHeroes(data.results))
      .catch((error) => console.log(error));
      setBusqueda(valueInput)
      setcounterUser(heroes.length) 
    }
  };

  if (busqueda != "") {
    return (
      <>
        <div className="containerTitle">
          <div className='title'>
            <h1><i className="fa-solid fa-magnifying-glass"></i> Super<span>heroes</span></h1>
          </div>
          <div className="counter">
            <h3>Heroes encontrados: </h3><h3 className="counterVar">{counterUser}</h3>
          </div>
          <div className='containerSearch'>
            <input type='text' id="inputHeroe" className='inputField' placeholder='Ingresa aqui el nombre de tu superheroe...' onKeyDown={handleEnter} />
          </div>
        </div>
        <div className="containerData">
          {heroes.map((heroe) => (
            <div className="cardData" data-aos="flip-left" data-aos-delay="100">
              <div className="front">
                <div className="headData">
                  <p key={heroe.id} className="nameHeroe"> {heroe.name} </p>
                  <p className="fullnameHeroe">{heroe.biography["full-name"]}</p>
                </div>
                <div className="imgData">
                  <img data-aos="fade-up" data-aos-delay="300" src={heroe.image["url"]} alt="ImgHeroe" className="imgPortrait" />
                </div>
              </div>
              <div className="back">
                <div className="headData">
                  <p className="nameHeroe"> {heroe.name} </p>
                  <p className="fullnameHeroe">Specifications</p>
                </div>
                <div className="powerstatsData">
                  <p className="powerTitle"><i className="fa-solid fa-shield-halved fa-beat-fade"></i> PowerStats <i className="fa-solid fa-shield-halved fa-beat-fade"></i></p>
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
                  <p className="powerTitle"><i className="fa-solid fa-star fa-bounce"></i> Appearance <i className="fa-solid fa-star fa-bounce"></i></p>
                  <div className="powerDesc">
                    <div className="powerItem" data-aos="flip-right">
                      <p>Gender</p>
                      <span>{heroe.appearance["gender"]}</span>
                    </div>
                    <div className="powerItem" data-aos="flip-right">
                      <p>Race</p>
                      <span>{heroe.appearance["race"]}</span>
                    </div>
                    <div className="powerItem" data-aos="flip-right">
                      <p>Height</p>
                      <span>{heroe.appearance["height"][1]}</span>
                    </div>
                    <div className="powerItem" data-aos="flip-right">
                      <p>Weight</p>
                      <span>{heroe.appearance["weight"][1]}</span>
                    </div>
                    <div className="powerItem" data-aos="flip-right">
                      <p>Eye Color</p>
                      <span>{heroe.appearance["eye-color"]}</span>
                    </div>
                    <div className="powerItem" data-aos="flip-right">
                      <p>Hair Color</p>
                      <span>{heroe.appearance["hair-color"]}</span>
                    </div>
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
        <div className="containerTitle">
          <div className='title'>
            <h1><i className="fa-solid fa-magnifying-glass"></i> Super<span>heroes</span></h1>
          </div>
          <div className="counter">
            <h3>Heroes encontrados: </h3><h3 className="counterVar">{counterUser}</h3>
          </div>
          <div className='containerSearch'>
            <input type='text' id="inputHeroe" className='inputField' placeholder='Ingresa aqui el nombre de tu superheroe...' onKeyDown={handleEnter}/>
          </div>
        </div>
        <div className="error">
          <h1>Bienvenido, ¡es hora de buscar tu héroe!</h1>
        </div>
        <div className="containerLogos">
          <img src={logoProgramate} className="logoProgramate" alt="LogoProgramate" />
          <img src={logoJpulido} className="logoProgramate" alt="LogoProgramate" />
        </div>
      </>
    )
  }
};
