import React from 'react'
import thumbnailInit from '../../images/thumbnail-batman.jpg'
import './Header.css'

export const Header = () => {
    return (
        <>
            {/* Header */}
            <div class="app-header">
                <h2 class="app-header-title">Super<span>Hero.</span></h2>
                <form class="app-header-search">
                    <input type="text" class="form-control" placeholder="Search your superhero here ..." name="search"/>
                        <button type="submit" class="search-btn">
                            <i class="fas fa-search"></i>
                        </button>
                        <div class="search-list" id="search-list">
                            <div class="search-list-item">
                                <img src={thumbnailInit} alt="MiniaturaInicial"/>
                                    <p>Batman</p>
                            </div>
                        </div>
                </form>
            </div>
            {/* End Header */}
        </>
    )
}
