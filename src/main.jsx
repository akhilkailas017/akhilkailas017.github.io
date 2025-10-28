import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'

// lazysizes
import 'lazysizes'
import 'lazysizes/plugins/attrchange/ls.attrchange'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
