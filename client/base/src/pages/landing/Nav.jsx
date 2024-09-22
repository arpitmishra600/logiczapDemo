import React from 'react'
import BlackButton from './BlackButton'

export default function Nav() {
  return (
    <div className='font-[inter] flex justify-between items-center p-5 border-b'>
      <img src='./logo.webp' className='w-[150px]'/>
      <div className='flex gap-4 font-[500] cursor-pointer'>
        <span>Explore Mentors</span>
        <span>Ask Mentor Anything</span>
        <span>Blogs</span>
        <span>Webinars</span>
        <span className='flex gap-1'>ProPilot <div class="flex items-center rounded-full bg-gradient-to-r from-[#FB6514] to-[#FEB273] pl-2 pr-2.5 text-[13px]"><svg width="17" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.166 1.333 3.23 8.458c-.233.28-.35.42-.351.537-.002.102.044.2.124.264.091.074.273.074.636.074H8.5l-.667 5.334L13.77 7.54c.232-.279.348-.418.35-.536a.333.333 0 0 0-.124-.264c-.091-.074-.273-.074-.636-.074H8.5l.666-5.334Z" fill="currentColor"></path></svg><p class="py-[2px]">AI</p></div></span>
      </div>
     <div className='h-[30px] flex justify-center items-center'> <BlackButton title={"Find your mentor"} arrow={true}/></div>
    </div>
  )
}
