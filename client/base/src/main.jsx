import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Context from './context/Context.jsx'
import { ThemeProvider } from '@mui/material'
import { theme } from './theme/theme.js'
import { Provider } from 'react-redux';
import store from './redux/store';
import { GoogleOAuthProvider } from '@react-oauth/google';

createRoot(document.getElementById('root')).render(

    <GoogleOAuthProvider clientId={import.meta.env.VITE_OAUTH_KEY}> <Provider store={store}><ThemeProvider theme={theme}><Context><App /></Context></ThemeProvider></Provider></GoogleOAuthProvider>
,
)
