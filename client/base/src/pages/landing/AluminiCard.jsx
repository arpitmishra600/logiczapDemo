import React from 'react'
import BlackButton from './BlackButton'
import { Avatar } from '@mui/material'
import {motion} from "framer-motion"
export default function AluminiCard() {
  return (
    <motion.div  whileHover={{ scale: 1.03 }}
    transition={{
      type: 'spring',  // Defines the spring effect
      stiffness: 300,  // Controls the spring stiffness
      damping: 15,     // Controls the spring damping (bounciness)
      duration: 0.3    // Optional: Controls the duration of the effect
    }} className='w-[300px] border relative flex flex-col gap-[0.5] p-5 rounded-[12px] card-shadow'>
    <Avatar src='' sx={{width:60,height:60}}/>
    <p class="line-clamp-1 text-[13px] font-semibold leading-5 text-[#272727]  md:text-[17px]  md:leading-[26px] py-3">Anarghya Kini</p>
    <p class=" line-clamp-1 text-[10px] leading-[18px] text-[#5C5C5C] md:text-[14px] md:leading-[18px] ">Quality Assurance Engineer II</p>
    <p class="line-clamp-1 hidden text-sm leading-[21px] text-[#5C5C5C] md:block">7 Years of Experience</p>
    <div className='flex gap-2 items-center py-3'>{svgs.google}Google</div>
    <div class="absolute right-5 top-5 gap-1 rounded-md bg-white px-1 py-0.5 md:flex md:px-2 md:py-1"><svg width="18" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg" class="scale-90 text-yellow-400 md:h-[21px] md:w-[21px]"><path d="m10.633 1.63 2.103 4.797a1.1 1.1 0 0 0 .91.654l5.122.46c.58.084.811.795.391 1.204l-3.86 3.243a1.099 1.099 0 0 0-.368 1.073l1.122 5.252a.706.706 0 0 1-1.025.743l-4.472-2.619a1.099 1.099 0 0 0-1.112 0l-4.472 2.618a.707.707 0 0 1-1.025-.744l1.122-5.252a1.102 1.102 0 0 0-.37-1.073L.84 8.746a.707.707 0 0 1 .39-1.204l5.124-.46a1.101 1.101 0 0 0 .91-.654l2.102-4.797a.707.707 0 0 1 1.268-.001Z" fill="currentColor"></path><path d="m10.48 6.714-.357-3.534c-.014-.197-.055-.535.26-.535.25 0 .387.52.387.52l1.069 2.838c.403 1.08.237 1.45-.152 1.669-.447.25-1.106.055-1.208-.958Z" fill="#FFFF8D"></path><path d="m14.887 11.673 3.065-2.392c.152-.126.425-.328.206-.558-.173-.18-.642.08-.642.08l-2.683 1.049c-.8.276-1.33.685-1.378 1.201-.06.688.557 1.217 1.432.62Z" fill="#F4B400"></path></svg><p class="text-[15px] font-semibold -tracking-[0.084] text-[#272727] md:pt-[2px]">5.0</p></div>
    <BlackButton title="Book a FREE Trial"/>
    </motion.div>
  )
}
const svgs={
    google:<svg width="15px" height="15px" viewBox="-3 0 262 262" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" fill="#4285F4"></path><path d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" fill="#34A853"></path><path d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" fill="#FBBC05"></path><path d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" fill="#EB4335"></path></g></svg>,
}
