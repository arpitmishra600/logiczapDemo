import React, { Suspense } from 'react'
import CandidateDashboard from '../../dashboards/candidate/CandidateDashboard'
import CandidateProfile from '../CandidateProfile'
import { useMyContext } from '../../../context/Context'
import Chats from '../chats/Chats'
import Schedule from '../scheduler/Schedule'
import Todos from '../todos/Todos'

export default function Content() {
const {selectedCandidateMenu}=useMyContext()
  const switcher=()=>{
    switch (selectedCandidateMenu) {
      case "profile": return <CandidateProfile/>
      case "messages": return <Chats/>
      case "mytasks": return <Schedule/>
      case "todos": return <Todos/>
    
      default:
        break;
    }
  }
  return (
    <Suspense fallback={<div>Loading...</div>}>
       {switcher()}
    </Suspense>
  )
}
