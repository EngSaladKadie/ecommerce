import React from 'react'
import Navbar from './components/Navabar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaaceOder from './pages/PlaceOrder/PlaaceOder'


const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Cart' element={<Cart />} />
        <Route path='/ PlaceOrder' element={<PlaaceOder />} />
      </Routes>
    </div>
  )
}

export default App
