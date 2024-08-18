import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'
import BackGround from './BackGround'
import ImageText from './ImageText'
import Sticker from './Sticker'
import HumanIng from './HumanIng'
import { CarouselDefault } from './Carousal'
import WritingOne from './WritingOne'
import Footer from './Footer'

function App() {

  return (
    <>
      <Navbar />
      <BackGround />
      <ImageText />
      <Sticker />
      <HumanIng />
      <CarouselDefault />
      <WritingOne />
      <Footer />
    </>
  )
}

export default App
