import React from 'react'
import Sidebar from '../../candidate/sidebar/Sidebar'
import Topbar from '../../candidate/topbar/Topbar'

export default function CandidateDashboard() {
  return (
    <div className='w-screen h-screen border flex flex-col'>
         <Topbar/>
      <Sidebar/>
      
    </div>
  )
}
