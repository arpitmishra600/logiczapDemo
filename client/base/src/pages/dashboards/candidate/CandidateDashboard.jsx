import React, { useEffect } from 'react'
import Sidebar from '../../candidate/sidebar/Sidebar'
import Topbar from '../../candidate/topbar/Topbar'
import axios from 'axios';

export default function CandidateDashboard() {
 
 
  return (
    <div className='w-screen border flex flex-col'>
         <Topbar/>
      <Sidebar/>
      
    </div>
  )
}
