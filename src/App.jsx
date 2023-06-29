import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import CocktailPage from './components/CocktailPage'

function App() {


  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
         <Route path="/" element={<Home />}/>
         <Route path="/cocktails/:name" element={<CocktailPage />}/>
        </Routes>
      </main>
    </div>
  )
}

export default App
