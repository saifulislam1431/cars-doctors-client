import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Router/router.jsx'
import Auth from './Provider/Auth/Auth'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-7xl mx-auto'>
    <React.StrictMode>
      <Auth>
        <RouterProvider router={router} />
      </Auth>
    </React.StrictMode>
  </div>,
)
