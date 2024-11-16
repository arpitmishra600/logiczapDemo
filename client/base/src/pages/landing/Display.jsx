import React, { useRef, useState } from 'react'
import Chip from '@mui/material/Chip';
import { Avatar } from '@mui/material';
import BlackButton from './BlackButton';
import AluminiCard from './AluminiCard';
import { motion, useInView } from 'framer-motion';

export default function Display() {
    const [select,setSelect]=useState("Engineering")
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
  return (
    <motion.div ref={ref}
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
    transition={{ duration: 0.7 }} 
    className='flex flex-col justify-center items-center'>
          <div class="flex flex-col gap-2 border-b border-[#D6E0FF] pb-[20px] md:border-none md:pb-[40px]"><p class="text-center text-[20px] font-semibold leading-[24px] -tracking-[0.8px] text-[#272727] md:text-[36px] md:font-medium md:leading-[50px] md:-tracking-[1.44px]">600+ mentors are just a Free Trial Session away!</p><p class="text-center text-[12px] leading-4 text-[#5C5C5C]  md:text-[16px] md:leading-6 md:-tracking-[0.176px]">Choose your ideal mentor and get started with a FREE trial session</p></div>
          <div className='w-full flex items-center justify-center gap-2'>
            {["Engineering","Data Science","Business","Product"].map((item)=><Chip label={item} sx={{px:0.5,fontSize:"0.7rem",fontWeight:500,background:select==item?"#007AFF":"",color:select==item?"white":"black"}} onClick={()=>setSelect(item)}/>)}
          </div>
          <div className='flex flex-wrap gap-5 justify-center py-10 w-[80%]'>
           {Object.keys(data).map((item)=><AluminiCard data={data[item]} name={item}/>)}
          </div>
    </motion.div>
  )
}


const data={
  first_last1:{
    profilepic:"",
    rating:5,
    member:"elite",
    desig:"Quality Assurance Engineer II",
    exp:5,
    company:"Google",
  },
  first_last2:{
    profilepic:"",
    rating:4,
    member:"elite",
    desig:"SAP ABAP",
    exp:3,
    company:"Facebook",
  },
  first_last3:{
    profilepic:"",
    rating:5,
    member:"elite",
    desig:"Software Tester",
    exp:10,
    company:"Meta",
  },
  first_last4:{
    profilepic:"",
    rating:5,
    member:"pro",
    desig:"UI/UX Designer",
    exp:6,
    company:"Linkedin",
  },
  first_last5:{
    profilepic:"",
    rating:4,
    member:"pro",
    desig:"Data Analyst",
    exp:3,
    company:"Brave",
  },
  first_last6:{
    profilepic:"",
    rating:4,
    member:"pro",
    desig:"DevOps III",
    exp:9,
    company:"HP",
  },
  first_last6:{
    profilepic:"",
    rating:4,
    member:"pro",
    desig:"DevOps III",
    exp:9,
    company:"HP",
  },
}