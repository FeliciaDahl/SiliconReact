import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Partners from './components/Partners'
import Features from './components/Features'
import HowDoesItWork from './components/HowDoesItWork'
import InfoCardsDesktop from './components/InfoCardsDesktop'
import Testimonials from './components/Testimonials'
import Faq from './components/Faq'
import ContactCards from './components/ContactCards'
import ButtonContact from './components/ButtonContact'
import Newsletter from './components/Newsletter'
import { SubscribeForm } from './components/SubscribeForm'
import Footer from './components/Footer'


function App() {


  return (
    <>
    <div className="head-bg">
      <Header />
        <Hero />
        </div>
        <main>
        <Partners />
        <Features />
        <HowDoesItWork />
        <InfoCardsDesktop />
        <Testimonials />
        <section aria-label="frequently asked questions" className="faq">
          <div className="container">
            <div className="desktop-layout">
              <Faq />
              <ContactCards />
            </div>
          </div>
          <ButtonContact />
          <div className="newsletter grid-2">
            <Newsletter />
            <SubscribeForm />
          </div>
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App
