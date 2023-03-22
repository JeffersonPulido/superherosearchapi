import React from 'react'
import './Header.css'

export const Header = () => {
    return (
        <>
            <div className="containerTitle">
                <div className='title'>
                    <h1><i class="fa-solid fa-magnifying-glass"></i> Super<span>heroes</span></h1>
                </div>
                <div className='containerSearch'>
                    <form>
                        <input type="text" name='nameField' className='inputField' placeholder='Ingresa aqui el nombre de tu superheroe...' />
                    </form>
                </div>
            </div>

        </>
    )
}
