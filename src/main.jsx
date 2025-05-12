import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Header from './Components/Layouts/Header.jsx'
import Home from './Components/Pages/Home.jsx'
import About from './Components/Pages/About.jsx'
import Services from './Components/Pages/Services.jsx'
import Gallery from './Components/Pages/Gallery.jsx'
import Contact from './Components/Pages/Contact.jsx'
import Location from './Components/Pages/Location.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/services',
        element: <Services />
      },
      {
        path: '/gallery',
        element: <Gallery />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/location',
        element: <Location />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider  router={router} />
  </StrictMode>,
)
