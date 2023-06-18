import React from 'react'
import ReactDOM from 'react-dom/client'
import Authprovider from './Provider/Authprovider.jsx'
import {
  RouterProvider
} from "react-router-dom";
import router from './Routes/Routes.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-6xl mx-auto'>
    <React.StrictMode>
    <Authprovider>
      <RouterProvider router={router} />
    </Authprovider>
  </React.StrictMode>,

  </div>
  
)
