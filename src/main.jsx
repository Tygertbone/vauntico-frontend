import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App' 
import './index.css'

// 1. Resolve the .js file without the extension for TS5097
// @ts-ignore
import { initPerformanceMonitoring } from './utils/performance'

// 2. Use a universal way to check for PROD for TS2339
const meta = import.meta as any;
const isProd = meta.env?.PROD || process.env.NODE_ENV === 'production';

if (isProd) {
  // Use dynamic import for analytics to hide it from the initial type-scan
  import('@vercel/analytics').then(({ inject }) => inject()).catch(() => {});
}

initPerformanceMonitoring();

const container = document.getElementById('root');
if (container) {
  const root = ReactDOM.createRoot(container);
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
}
