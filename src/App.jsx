import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
import Inicio from './components/Inicio'
import Character from './components/Character'


function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Inicio></Inicio> }></Route>
          <Route path='/characters/:id' element={ <Character></Character> }></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
