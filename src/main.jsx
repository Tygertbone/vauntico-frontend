import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { inject } from '@vercel/analytics'
import App from './App' // FIX: Removed .jsx/.tsx extension
import './index.css'
import { initPerformanceMonitoring } from './utils/performance' // FIX: Removed .js extension

// FIX: Defensive check for production that TypeScript won't block
const isProd = typeof process !== 'undefined' && process.env?.NODE_ENV === 'production';

if (isProd) {
  try {
    inject();
  } catch (e) {
    console.warn('Analytics injection skipped');
  }
}

// Initialize performance monitoring
initPerformanceMonitoring();

const root = document.getElementById('root');
if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  )
}
