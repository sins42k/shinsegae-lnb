import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './global.css'
import Nav from './components/Navgation.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nav />
  </StrictMode>,
)
