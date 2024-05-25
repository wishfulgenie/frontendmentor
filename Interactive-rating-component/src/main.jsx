import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import InteractiveRating from './components/InteractiveRating.jsx'
import { theme } from './theme.js'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <InteractiveRating />
    </ThemeProvider>
  </React.StrictMode>,
)
