import React from 'react'
import Marquee from 'react-fast-marquee'
import Carausel from './Carausel'
import { TypeAnimation } from 'react-type-animation'

export default function Templates() {
  return (
    <section className='px-10 py-5 font-[inter] text-[white] h-[90vh] relative'>
    <div className='flex bg-[#020617] h-[100%] rounded-[32px] card-shadow justify-center items-center'>
      <div className='flex-1 flex flex-col gap-5 h-[100%] justify-center px-20'>
        <h3 className='text-4xl'>Recruiters love our resume templates</h3>
        <h3 className='text-2xl'>Most resumes look dull. Yours won’t. Create a strong first impression with a resume that says “I’m different”. Download to Word or PDF.</h3>
        <a className='rounded-[32px] border py-3 px-5 relative w-[90%]'>
          
        <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Explore templates',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Show your creativity',
        1000,
        'Building resume',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{display: 'inline-block',fontFamily:"" }}
      className=''
      repeat={Infinity}
    />
          
           <img src="./search.svg" className='absolute right-4 top-[9px] h-[32px]'/></a>
      </div>
      <div className='flex-1 border h-[100%] relative rounded-r-[32px] overflow-hidden'>
        <Marquee autoFill>
          <img src='./cv1.webp' className='w-[210px]'/>
          <img src='./cv2.webp' className='w-[210px]'/>
          <img src='./cv3.webp' className='w-[210px]'/>
         
     
        </Marquee>
        <Marquee autoFill direction='right'>
          <img src='./cv4.webp' className='w-[200px]'/>
          <img src='./cv5.webp' className='w-[200px]'/>
          <img src='./cv6.webp' className='w-[200px]'/>
          <img src='./cv7.webp' className='w-[200px]'/>

        </Marquee>
        {/* <Carausel/> */}
      </div>
    </div>
  </section>
  )
}
