import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Routes.jsx';
import './custom.scss'
import AuthProvider from './contexts/AuthProvider.jsx';
import NewsProvider from './contexts/NewsProvider.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <NewsProvider>
        <RouterProvider router={router} />
      </NewsProvider>
    </AuthProvider>
  </React.StrictMode>,
)
