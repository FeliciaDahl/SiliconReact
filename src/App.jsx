import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Partners from './components/Partners'
import Features from './components/Features'
import HowDoesItWork from './components/HowDoesItWork'
import InfoCardsDesktop from './components/InfoCardsDesktop'
import Testimonials from './components/Testimonials'

function App() {


  return (
    <>
    <Header/>
    <main>
      <Hero/>
      <Partners/>
      <Features/>
      <HowDoesItWork/>
      <InfoCardsDesktop/>
      <Testimonials/>
    </main>
    </>
  )
}

export default App
