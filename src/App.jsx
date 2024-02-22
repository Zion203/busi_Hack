import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DealsMen from './components/DealsMen'
import DealsWomen from './components/DealsWomen'
import NavBar from './components/NavBar'
import SeeAll from './components/SeeAll'
import CartDis from './components/CartDis'

function App() {

  return (
    <>
      {/* <DealsMen/> */}
      {/* <DealsWomen/> */}
      {/* <SeeAll></SeeAll> */}
      <CartDis></CartDis>
    </>
  )
}

export default App
