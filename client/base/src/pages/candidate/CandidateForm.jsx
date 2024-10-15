import React from 'react'
import Steper from './Steper'

import { useMyContext } from '../../context/Context'
import Form1 from './Form1'
import Form2 from './Form2'
import ProjectsDialogBox from '../../components/ProjectsDialogBox'
import ExperienceDialogBox from '../../components/ExperienceDialogBox'
import Form3 from './Form3'
import { createTheme, ThemeProvider } from '@mui/material'
import EducationDialogBox from '../../components/EducationDialog'


export default function CandidateForm() {
  const {formSteps}=useMyContext()
  return (
    <div className='flex font-[OpenSauceSans]'>
      <div className='flex flex-1 relative justify-center items-center'>
      <div className='flex flex-1 h-screen opacity-25' style={{background:"url('/form/formbkg.png')",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}> </div> 

      <div className='flex flex-col w-[730px] absolute border h-[90%] justify-center'>
        <div className='border-l-[5px] border-[#123D33] pr-10 gap-3 p-5 mb-20 flex flex-col'>
          <img src='/arro.png' className='w-[50px]'/>
          <div className='text-5xl font-extrabold'>Let’s start creating</div>
          <div className='text-5xl font-extrabold mb-3'>your portfolio with AI</div>
          <div className='text-md font-[400] tracking-wide'>Simply answer a few questions, and our AI tool will generate a customized, personalized portfolio, meticulously tailored just for you. Perfectly designed to meet your unique needs and aspirations.</div>
        </div> 
      <button className='border-[gray] border-[1px] rounded absolute bottom-0 px-14 py-2 text-[gray]'>Back</button>
      </div>
      </div>
      <div className='flex w-[400px] justify-center items-center'>
        <div className='h-[90%] border w-[80%]'>
          <div className='mt-10 font-bold leading-6'>Are you an experienced professional in the industry, or are you just starting your career as a fresher?</div>
        </div>
      </div> 
    </div>
  )
}

