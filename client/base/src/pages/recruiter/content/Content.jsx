import React, { Suspense } from 'react'
import { useMyContext } from '../../../context/Context'
import Profile from '../profile/Profile'
import CandidatesBox from '../candidatesBox/CandidatesBox'

export default function Content() {
const {selectedRecruiterMenu}=useMyContext()
  const switcher=()=>{
    switch (selectedRecruiterMenu) {
      case "profile": return <Profile/>
      case "candidates": return <CandidatesBox/>
   
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
