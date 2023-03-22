import React from 'react'
import { Body } from './components/body/Body'
import { Header } from './components/header/Header'

export const App = () => {
  return (
    <>
        <div class = "main-wrapper">
            <div class = "app">
                <Header />
                <Body />
            </div>
        </div>
    </>
  )
}
