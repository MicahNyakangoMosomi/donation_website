import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import './index.css'
import Navbar from './navbar';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
  </StrictMode>,
)
