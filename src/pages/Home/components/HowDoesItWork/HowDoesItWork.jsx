import React from 'react'
import HowDoesItWorkTablet from './HowDoesItWorkTablet'
import HowsDoesItWorkMobile from './HowsDoesItWorkMobile'
import HowDoesItWorkDesktop from './HowDoesItWorkDesktop'

const HowDoesItWork = () => {
  return (

    <section aria-label="how does it work" className="HowDoesItWork">

      <div className="container">
        <h2 className="hdw-h2 pb-2">How does it work?</h2>

        <HowsDoesItWorkMobile />

        <HowDoesItWorkTablet />

        <HowDoesItWorkDesktop />
      </div>
    </section>
  )
}

export default HowDoesItWork