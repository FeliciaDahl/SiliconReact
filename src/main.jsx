import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/index.css'
import'./assets/colors.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
