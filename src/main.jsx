import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { createTheme, ThemeProvider } from '@mui/material/styles'

import './index.css'
import App from './App.jsx'

const theme = createTheme({
  typography: {
    fontFamily: [
      'ArcadeFont'
    ].join(',')
  }
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
