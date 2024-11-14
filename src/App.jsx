
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
import './assets/styles/FAQ/faqView.css'

import './assets/styles/Contact/contactUs.css'
import './assets/styles/Contact/consultationForm.css'
import './assets/styles/Contact/findUs.css'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import Home from './pages/Home/Home'
import Contact from './pages/Contact/Contact'
import Feature from './pages/Feature/Feature'
import FaqView from './pages/FAQ/FaqView'
import SignIn from './pages/SignIn/SignIn'

import FaqProvider from './components/contexts/FaqContext'

function App() {


  return (

  <FaqProvider>
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <main>
          <Routes>
           <Route path='/' element={<Home />} />
           <Route path='/contact' element={<Contact />} />
            <Route path='/feature' element={<Feature />} />
            <Route path='/FAQ' element={<FaqView />} />
           <Route path='/signin' element={<SignIn />} />
         </Routes>
        </main>
        <Footer />  
      </div>
   </BrowserRouter>
  </FaqProvider>
  )
}

export default App
