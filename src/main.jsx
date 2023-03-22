import React from 'react'
import ReactDOM from 'react-dom/client'
import { Body } from './components/body/Body'
import { Header } from './components/header/Header'
import { Navbar } from './components/navbar/Navbar'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Header />
    <Body />
  </React.StrictMode>,
)
