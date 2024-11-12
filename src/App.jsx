
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './assets/styles/Base/colors.css'
import './assets/styles/Base/global.css'

import './assets/styles/Base/footer.css'
import './assets/styles/Base/header.css'


import './assets/styles/Home/hero.css'
import './assets/styles/Home/partners.css'
import './assets/styles/Home/appFeatures.css'
import './assets/styles/Home/howDoesItWork.css'
import './assets/styles/Home/desktopView/infoCards.css'
import './assets/styles/Home/desktopView/testimonials.css'
import './assets/styles/Home/faq.css'
import './assets/styles/Home/contactCards.css'
import './assets/styles/Home/subscribe.css'

import './assets/styles/Contact/contactUs.css'
import './assets/styles/Contact/consultationForm.css'
import './assets/styles/Contact/findUs.css'


import Home from './pages/Home/Home'
import Contact from './pages/Contact/Contact'
import Feature from './pages/Feature/Feature'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import SignIn from './pages/SignIn/SignIn'




function App() {


  return (

  <BrowserRouter>
   
    <div className="wrapper">
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/feature' element={<Feature />} />
          <Route path='/signin' element={<SignIn />} />
        </Routes>
      </main>
        <Footer />  
      </div>
 
  </BrowserRouter>
  )
}

export default App
