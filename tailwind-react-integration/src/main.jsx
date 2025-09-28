// main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'   // TailwindCSS is imported here
import App from './App.jsx'

// Render the App inside the root div
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
