import { useState } from 'react'
import NavBar from './components/NavBar/NavBar'
import Carrusel from './components/Carrusel/Carrusel'
import ListProducts from './components/ListProducts/ListProducts'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Carrusel></Carrusel>
      <ListProducts></ListProducts>
      <Footer></Footer>
    </div>
  )
}

export default App
