import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Context from './context/Context.jsx'
import { ThemeProvider } from '@mui/material'
import { theme } from './theme/theme.js'

createRoot(document.getElementById('root')).render(

    <ThemeProvider theme={theme}><Context><App /></Context></ThemeProvider>
,
)
