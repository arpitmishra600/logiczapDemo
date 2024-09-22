import { Rating } from '@mui/material'
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion';
export default function CommentCards({name,review}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  return (
 
      <motion.div
      
      whileHover={{ scale: 1.01,cursor:"default" }}
      transition={{
        type: 'spring',  // Defines the spring effect
        stiffness: 300,  // Controls the spring stiffness
        damping: 15,     // Controls the spring damping (bounciness)
        duration: 0.3    // Optional: Controls the duration of the effect
      }}
     
  
       class="blog_post font-[inter] m-3 max-w-[400px] h-[150px]">
    <div class="img_pod h-[55px] w-[55px] flex justify-center items-center absolute rounded-[100%] -left-5 -top-3">
      <img src="https://pbs.twimg.com/profile_images/890901007387025408/oztASP4n.jpg" alt="random image" className='h-[50px] w-[50px] rounded-[50%]'/>
    </div>
    <div class="container_copy px-5">
    <div className='w-[100%] flex justify-between pt-3 pb-2'><h1 className='pl-5'>{name}</h1><Rating name="read-only" value={5} readOnly className=''/></div>
      
      <p className='text-[#333] pb-5 text-[0.8em]'>{`"${review}"`}</p>
    </div>
    
  </motion.div>
  )
}
