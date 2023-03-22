import React from 'react'
import './Header.css'

export const Header = () => {
    return (
        <>
            <div className="containerTitle">
                <div className='title'>
                    <h1>Searcher Super<span>heroes</span></h1>
                </div>
                <div className='containerSearch'>
                    <input type="text" name='nameField' className='inputField' placeholder='Ingresa aqui el nombre de tu superheroe...' />
                </div>
            </div>

        </>
    )
}
