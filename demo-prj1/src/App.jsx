import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './components/Header'
import MainComponent from './components/MainComponent'
import Footer from './components/Footer'


function App() {
  return (
    <>
      <Header />
      <Footer />
      <MainComponent />

    </>
  )
}

export default App;
