import React from 'react'
import ReactDOM from 'react-dom/client'
import { Body } from './components/body/Body'
import { Navbar } from './components/navbar/Navbar'
import { UpArrow } from './components/upArrow/UpArrow'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Body />
    <UpArrow/>
  </React.StrictMode>,
)
