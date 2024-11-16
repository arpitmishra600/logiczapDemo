import React from 'react' 
import {motion} from 'framer-motion'
export default function BlackButton({title,changes,arrow}) {

  return (
    <>
        <motion.button  whileTap={{ scale: 0.85 }} className={`flex justify-center items-center relative border text-sm inter font-bold text-[white] px-4 py-2 border-1 border-habotOrange flex-1 rounded-lg bg-gradient-to-tr from-[#3AB6FF] via-[#546FFD] to-[#004AAD] transition duration-300 ease-out max-sm:text-xs text-nowrap ${changes}`}>
          {title}{arrow && svgs.arrow}
          <div className='absolute right-3 top-4'></div>
        </motion.button>
        
    </>
  )
}

const svgs={
    arrow:<svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m13.477 9.167-4.47-4.47 1.178-1.179L16.667 10l-6.482 6.482-1.178-1.179 4.47-4.47H3.333V9.167h10.144Z" fill="#F9F9FB"></path></svg>
}
