import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './assets/css/bootstrap.min.css'
import './assets/css/fontawesome.css'
import './assets/css/fontawesome.min.css'
import './assets/css/slick-theme.min.css'
import './assets/css/slick-theme.css'
import './assets/css/slick.min.css'
import './assets/css/templatemo.min.css'
import './assets/css/templatemo.css'
import {BrowserRouter} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  
  // <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
   //</React.StrictMode> 
)
