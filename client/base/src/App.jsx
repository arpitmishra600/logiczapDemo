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
import { Resume } from './pages/resume/Resume'
import CandidateDashboard from './pages/dashboards/candidate/CandidateDashboard'
import RecruiterDashboard from './pages/dashboards/recruiter/RecruiterDashboard'
import ChatApp from './components/ChatApp';

function App() {

  return (
    
    <>
        <BrowserRouter>
          <Routes>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/candidate/profile/:pid' element={<CandidateProfile type={"public"}/>}></Route>
            <Route path='/candidate/form' element={<CandidateForm/>}></Route>
            <Route path='/candidate/dashboard' element={<CandidateDashboard />}></Route>

            <Route path='/recruiter/dashboard' element={<RecruiterDashboard />}/>
            <Route path='/' element={<Landing/>}></Route>
            <Route path='/signup' element={<Signup/>}></Route>
            <Route path='/mainpage' element={<Protected><Mainpage/></Protected>}></Route>
            <Route path="/resume" element={<Protected><Resume/></Protected>}></Route>
            <Route path="/chatApp" element={<ChatApp/>}></Route>
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
