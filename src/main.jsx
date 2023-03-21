import React from 'react'
import ReactDOM from 'react-dom/client'
import { Body } from './components/body/Body'
import { Header } from './components/header/Header'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Body />
  </React.StrictMode>,
)
