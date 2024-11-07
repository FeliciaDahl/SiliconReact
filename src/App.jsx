
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './assets/colors.css'
import './assets/index.css'
import './assets/contact.css'

import Home from './pages/Home/Home'
import Contact from './pages/Contact/Contact'
import Feature from './pages/Feature'
import Header from './components/Header/Header'
import Footer from './components/Footer'
import SignIn from './pages/SignIn'




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
