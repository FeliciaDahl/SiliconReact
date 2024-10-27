
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './assets/colors.css'
import './assets/index.css'
import Home from './views/Home'
import Contact from './views/Contact'
import Feature from './views/Feature'
import Header from './components/Header'
import Footer from './components/Footer'
import SignIn from './views/SignIn'
import NavBar from './components/NavBar'



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
