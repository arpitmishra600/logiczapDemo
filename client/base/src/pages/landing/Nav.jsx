import React from 'react'
import BlackButton from './BlackButton'

export default function Nav() {
  return (
    <div className='font-[inter] flex justify-between items-center p-5 border-b'>
      <img src='./logo.png' className='w-[150px]'/>
      <div className='flex gap-4 font-[500] cursor-pointer'>
        <span>Resume Builder</span>
        <span>Career Mentorship</span>
        <span>Explore Plans</span>
        <span>Services</span>
       
      </div>
     <div className='h-[30px] flex justify-center items-center'> <BlackButton title={"Hire Talent"} arrow={true}/></div>
    </div>
  )
}
