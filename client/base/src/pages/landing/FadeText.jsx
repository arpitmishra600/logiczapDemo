import { useInView } from 'framer-motion';
import React, { useRef } from 'react'
import {motion} from "framer-motion"
export default function FadeText() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  return (
    
    <motion.div ref={ref} className='font-[inter] py-10'>
        {isInView && <div className='fadetext text-[white] '>
      <span className='mt-12 text-[13px] font-medium -tracking-[0.5px] md:mt-0 md:text-[20px] mr-1'>Move</span>
      <span className='mt-12 text-[13px] font-medium -tracking-[0.5px] md:mt-0 md:text-[20px] mr-1'>Over</span>
      <span className='mt-12 text-[13px] font-medium -tracking-[0.5px] md:mt-0 md:text-[20px] mr-1'>traditional</span>
      <span className='mt-12 text-[13px] font-medium -tracking-[0.5px] md:mt-0 md:text-[20px] mr-1'>courses</span>
      <br/>
      <span className='text-[24px] font-semibold leading-8 -tracking-[1.6px] md:text-[44px] md:font-medium md:leading-[52px] mr-2'>Start</span>
      <span className='text-[24px] font-semibold leading-8 -tracking-[1.6px] md:text-[44px] md:font-medium md:leading-[52px] mr-2'>Making</span>
      <span className='text-[24px] font-semibold leading-8 -tracking-[1.6px] md:text-[44px] md:font-medium md:leading-[52px] mr-2'>Progress</span>
      <br/>
      <span className='text-[24px] font-semibold leading-8 -tracking-[1.6px] md:text-[44px] md:font-medium md:leading-[52px] mr-2'>with</span>
      <span className='text-[24px] font-semibold leading-8 -tracking-[1.6px] md:text-[44px] md:font-medium md:leading-[52px] mr-2'>1:1</span>
      <span className='text-[24px] font-semibold leading-8 -tracking-[1.6px] md:text-[44px] md:font-medium md:leading-[52px] mr-2'>Long</span>
      <span className='text-[24px] font-semibold leading-8 -tracking-[1.6px] md:text-[44px] md:font-medium md:leading-[52px] mr-2'>Term</span>
      <span className='text-[24px] font-semibold leading-8 -tracking-[1.6px] md:text-[44px] md:font-medium md:leading-[52px] mr-2'>Mentorship</span>

        </div>}
    </motion.div >
  )
}

