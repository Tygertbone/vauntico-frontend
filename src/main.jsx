import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { inject } from '@vercel/analytics'
import App from './App' 
import './index.css'
import { initPerformanceMonitoring } from './utils/performance'

// Initialize Vercel Analytics safely
if (typeof window !== 'undefined') {
  inject();
}

// Initialize performance monitoring
initPerformanceMonitoring();

const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  )
}
