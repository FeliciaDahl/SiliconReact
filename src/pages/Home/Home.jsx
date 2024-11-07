import React from 'react'
import Hero from './components/Hero/Hero'
import Partners from './components/Partners/Partners'
import Features from './components/AppFeatures/Features'
import HowDoesItWork from './components/HowDoesItWork/HowDoesItWork'
import InfoCardsDesktop from '../../components/InfoCardsDesktop'
import Testimonials from '../../components/Testimonials'
import Faq from './components/FAQ/Faq'
import ContactCards from '../../components/ContactCards'
import ButtonContact from '../../components/ButtonContact'
import Newsletter from './components/Subscribe/Newsletter'
import SubscribeForm from './components/Subscribe/SubscribeForm'



const Home = () => {
    return (
        <>
        <Hero />
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

        </>
    )
}

export default Home