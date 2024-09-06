import { useState } from 'react'

import {BrowserRouter,Routes,Route} from "react-router-dom"
import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'
import Mainpage from './components/Mainpage'
import Protected from './components/Protected'
import {Toaster} from "react-hot-toast"

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login/>}></Route>
            <Route path='/signup' element={<Signup/>}></Route>
            <Route path='/mainpage' element={<Protected><Mainpage/></Protected>}></Route>
          </Routes>
        </BrowserRouter>
        <Toaster
  position="top-center"
  reverseOrder={false}
/>
   
    </>
     
    
  )
}

export default App
