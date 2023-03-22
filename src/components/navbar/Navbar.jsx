import React from 'react'
import logoClose from '../../images/closeNavbar.svg'
import logo from '../../images/sello.webp'
import './Navbar.css'

export const Navbar = () => {
    return (
        <>
            <nav className='navbar navbar-expand-lg navbar-light bg-dark sticky-top'>
                <div className='container'>
                    <a className='navbar-brand text-white' href='#home'>
                        <img src={logo} alt="Logo" className='logo d-flex img-fluid' />
                    </a>
                    <button className='btn btn-dark navbar-toggler border-3 px-2 text-white' type='button' data-bs-toggle='offcanvas' data-bs-target='#offcanvasExample' aria-controls='offcanvasExample'>
                        <i className="fa-solid fa-ellipsis-vertical"></i>
                    </button>
                    <div className='offcanvas offcanvas-start-lg bg-dark' tabIndex='-1' id='offcanvasExample' aria-labelledby='offcanvasExampleLabel'>
                        <div className='offcanvas-header d-flex d-lg-none'>
                            <h5 className='offcanvas-title text-white' id='offcanvasExampleLabel'>JPulido Dev</h5>
                            <a href='javascript:void(0)' className='text-reset p-0' data-bs-dismiss='offcanvas' aria-label='close'>
                                <img src={logoClose} alt="Icon Close Navbar" />
                            </a>
                        </div>
                        <div className='offcanvas-body p-lg-0'>
                            <ul className='navbar-nav'>
                                <li className='nav-item'>
                                    <a className='nav-link' aria-current='page'>Prográmate</a>
                                </li>
                                <li className='nav-item'>
                                    <a className='nav-link' aria-current='page'><span className='academy'>Academy</span></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
