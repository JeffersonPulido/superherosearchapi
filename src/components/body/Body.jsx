import React from 'react'
import thumbnailInit from '../../images/thumbnail-batman.jpg'
import './Body.css'

export const Body = () => {
    return (
        <>
            <div class="app-body">
                <div class="app-body-content">
                    {/* app body thumbnail */}
                    <div class="app-body-content-thumbnail">
                        <img src={thumbnailInit} />
                    </div>
                    {/* end of app body thumbnail */}
                    <div class="app-body-content-list">
                        <div class="name">Batman</div>
                        {/* BUTTONS */}
                        <div class="app-body-tabs-head">
                            <button type="button" class="tab-head-single" data-id="1">
                                <span>Poderes</span>
                            </button>
                            <button type="button" class="tab-head-single" data-id="2">
                                <span>Biografia</span>
                            </button>
                            <button type="button" class="tab-head-single" data-id="3">
                                <span>Apariencia</span>
                            </button>
                            <button type="button" class="tab-head-single" data-id="4">
                                <span>Conexiones</span>
                            </button>
                        </div>
                        {/* END BUTTONS */}
                        {/* Buttons body */}
                        <div class="app-body-tabs-body">
                            {/* Poderes tabs */}
                            <ul class="tab-body-single powerstats">
                                <li>
                                    <div>
                                        <i class="fa-solid fa-shield-halved"></i>
                                        <span>Inteligencia</span>
                                    </div>
                                    <span>100</span>
                                </li>
                                <li>
                                    <div>
                                        <i class="fa-solid fa-shield-halved"></i>
                                        <span>Fuerza</span>
                                    </div>
                                    <span>26</span>
                                </li>
                                <li>
                                    <div>
                                        <i class="fa-solid fa-shield-halved"></i>
                                        <span>Velocidad</span>
                                    </div>
                                    <span>27</span>
                                </li>
                                <li>
                                    <div>
                                        <i class="fa-solid fa-shield-halved"></i>
                                        <span>Durabilidad</span>
                                    </div>
                                    <span>50</span>
                                </li>
                                <li>
                                    <div>
                                        <i class="fa-solid fa-shield-halved"></i>
                                        <span>Poder</span>
                                    </div>
                                    <span>47</span>
                                </li>
                                <li>
                                    <div>
                                        <i class="fa-solid fa-shield-halved"></i>
                                        <span>Combate</span>
                                    </div>
                                    <span>100</span>
                                </li>
                            </ul>
                            {/* End Poderes tabs */}
                            {/* Biografia tabs */}
                            <ul class="tab-body-single biography">
                                <li>
                                    <span>Nombre Completo</span>
                                    <span>Terry Mcginnis</span>
                                </li>
                                <li>
                                    <span>Alteregos</span>
                                    <span>No se ha encontrado informacion.</span>
                                </li>
                                <li>
                                    <span>Apodos</span>
                                    <span>Batman II, The Tomorrow Knight, Batman Beyond</span>
                                </li>
                                <li>
                                    <span>Fecha Nacimiento</span>
                                    <span>Gothan City, 25th Century</span>
                                </li>
                                <li>
                                    <span>Primera Aparicion</span>
                                    <span>Batman Beyonce #1</span>
                                </li>
                            </ul>
                            {/* End Biografia tabs */}
                            {/* Apariencia tabs */}
                            <ul class="tab-body-single appearance">
                                <li>
                                    <span><i class="fas fa-star"></i>Genero</span>
                                    <span>Masculino</span>
                                </li>
                                <li>
                                    <span><i class="fas fa-star"></i>Raza</span>
                                    <span>Humano</span>
                                </li>
                                <li>
                                    <span><i class="fas fa-star"></i>Altura</span>
                                    <span>5' 10'</span>
                                </li>
                                <li>
                                    <span><i class="fas fa-star"></i>Peso</span>
                                    <span>170 Lbs</span>
                                </li>
                                <li>
                                    <span><i class="fas fa-star"></i>Color de Ojos</span>
                                    <span>Blue</span>
                                </li>
                                <li>
                                    <span><i class="fas fa-star"></i>Color de Pelo</span>
                                    <span>Black</span>
                                </li>
                            </ul>
                            {/* End Apariencia tabs */}
                            {/* Conexiones tabs */}
                            <ul class="tab-body-single connections">
                                <li>
                                    <span>Equipo</span>
                                    <span>Batman Family, Justice League Unlimited</span>
                                </li>
                                <li>
                                    <span>Familia</span>
                                    <span>Bruce Wayne (biological father), Warren McGinnis (father, deceased), Mary McGinnis (mother), Matt McGinnis (brother)</span>
                                </li>
                            </ul>
                            {/* End Conexiones tabs */}
                        </div>
                        {/* end buttons body */}
                    </div>
                </div>
            </div>
            {/* End Body */}
        </>
    )
}
