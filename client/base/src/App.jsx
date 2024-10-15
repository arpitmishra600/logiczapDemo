import { useState } from 'react'

import {BrowserRouter,Routes,Route} from "react-router-dom"
import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'
import Mainpage from './components/Mainpage'
import Protected from './components/Protected'
import {Toaster} from "react-hot-toast"
import Landing from './pages/landing/Landing'
import CandidateProfile from './pages/candidate/CandidateProfile'
import CandidateForm from './pages/candidate/CandidateForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <>
        <BrowserRouter>
          <Routes>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/candidate/profile' element={<CandidateProfile/>}></Route>
            <Route path='/candidate/form' element={<CandidateForm/>}></Route>
            <Route path='/' element={<Landing/>}></Route>
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
