import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Router/router.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-7xl'>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </div>,
)
