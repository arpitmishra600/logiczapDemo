import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Context from './context/Context.jsx'
import { ThemeProvider } from '@mui/material'
import { theme } from './theme/theme.js'
import { Provider } from 'react-redux';
import store from './redux/store';

createRoot(document.getElementById('root')).render(

    <Provider store={store}><ThemeProvider theme={theme}><Context><App /></Context></ThemeProvider></Provider>
,
)
