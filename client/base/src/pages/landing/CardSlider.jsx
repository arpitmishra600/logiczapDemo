import { Avatar } from '@mui/material'
import React from 'react'
import Marquee from 'react-fast-marquee'

export default function CardSlider() {
  return (
    <Marquee className='mt-20' autoFill direction='right' gradient gradientColor='#020617' gradientWidth={70} pauseOnHover>
    <div className='relative h-[390px] w-[300px] bg-[white] mr-5 rounded-xl justify-center font-[inter]'>
      <Avatar className='!w-full !h-[80%] !rounded-t-xl !rounded-b-[0px]'/>
      <div className='px-4 py-2'>
        <div className='flex absolute right-4 -mt-7 border p-2 rounded-full bg-white items-center justify-center pl-3 card-shadow-lite'><svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.666687 0.853333V19.52L15.3334 10.1867L0.666687 0.853333Z" fill="#21C4E8"/></svg></div>
        <div className='absolute text-[green] left-1 -mt-10 border px-3 py-1 rounded-xl bg-white text-xs font-bold'>Domain Switch</div>
        <div className='leading-1 font-bold '>First_last</div>
        <div className='text-sm opacity-70 leading-1'>Software Developer</div>
        <div className='text-xs font-bold opacity-50'>Google | 3.3 LPA</div>
      </div>
    </div>
    </Marquee>
  )
}
