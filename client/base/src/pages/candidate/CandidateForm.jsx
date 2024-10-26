import React, { useEffect, useState } from 'react'
import Steper from './Steper'

import { useMyContext } from '../../context/Context'
import ProjectsDialogBox from '../../components/ProjectsDialogBox'
import ExperienceDialogBox from '../../components/ExperienceDialogBox'

import { createTheme, ThemeProvider } from '@mui/material'
import EducationDialogBox from '../../components/EducationDialog'
import NameForm from './stepforms/NameForm'
import AboutForm from './stepforms/AboutForm'
import EducationForm from './stepforms/EducationForm'
import ExperienceForm from './stepforms/ExperienceForm'
import ProjectForm from './stepforms/ProjectForm'
import SkillForm from './stepforms/SkillForm'
import WorkRolesForm from './stepforms/WorkRolesForm'
import WorkLocation from './stepforms/WorkLocation'
import Languageform from './stepforms/Languageform'
import ImageForm from './stepforms/ImageForm'
import {AnimatePresence, motion} from "framer-motion"
import { TypeAnimation } from 'react-type-animation'

export default function CandidateForm() {
  const form=[<NameForm/>,<AboutForm/>,<EducationForm/>,<ExperienceForm/>,<ProjectForm/>,<SkillForm/>,<WorkRolesForm/>,<WorkLocation/>,<Languageform/>,<ImageForm/>]
  const {formSteps, setFormSteps,enableNextButton,setEnableNextButton,formData} = useMyContext()


  
  // Define the fade-in and fade-out animation
  const fadeVariants = {
    initial: { opacity: 0 }, // Start with opacity 0 (invisible)
    animate: { opacity: 1}, // Fade in to full visibility
    exit: { opacity: 0},    // Fade out back to invisible
  }
  const fadeVariants2 = {
    initial: {x:-100,opacity: 0 }, // Start with opacity 0 (invisible)
    animate: {x:0,opacity: 1}, // Fade in to full visibility
    exit: {x:100,opacity: 0},    // Fade out back to invisible
  }
useEffect(() => {
  if(formSteps>8){ 
    setEnableNextButton(false)
  }
}, [formSteps])

  return (
    <div className='flex font-[OpenSauceSans] overflow-hidden'>
      <div className='flex flex-1 relative justify-center items-center'>
        <div className='flex flex-1 h-screen opacity-25' style={{background:"url('/form/formbkg.png')", backgroundRepeat:"no-repeat", backgroundSize:"cover"}}></div> 
 
        {/* Wrap the motion.div inside AnimatePresence */}
          <div className='flex flex-col w-[730px] absolute h-[90%] justify-center overflow-hidden'>
            <div className='border-l-[5px] border-[#123D33] pr-10 gap-3 p-5 mb-20 flex flex-col transition-all'>
              <motion.img
            animate={{
              x: [0, 8, 0], // Moves horizontally between 0 and 100px
            }}
            transition={{
              repeat: Infinity, // Infinite loop
              duration: 2, // Duration of each loop
              ease: "linear", // Smooth movement
            }} src='/arro.png' className='w-[50px]' />

            <AnimatePresence mode="wait">
              <motion.div 
                key={formSteps} // Key to track formSteps
                initial="initial"
                animate="animate"
                exit="exit"
                variants={fadeVariants2}
                transition={{ duration: 0.5,ease: [0.42, 0, 0.58, 1]}} // Transition time
              >
                <div className='text-5xl font-extrabold leading-[60px] mb-4'>Let’s start creating<br/>your portfolio with AI</div>
                
               <TypeAnimation sequence={[
          // Same substring at the start will only be typed out once, initially
          'Simply answer a few questions, and our AI tool will generate a customized, personalized portfolio, meticulously tailored just for you. Perfectly designed to meet your unique needs and aspirations.',
          1000, // wait 1s before replacing "Mice" with "Hamsters"
        ]}
        wrapper="span"
        speed={60}
        style={{display: 'inline-block'}}
        className='flex items-center text-md font-[400] tracking-wide font-[OpenSauceSans]'
        repeat={Infinity} />
              </motion.div>
         
              </AnimatePresence>
            </div> 
            <button 
              className='border-[gray] font-bold border-[1px] rounded absolute bottom-0 px-14 py-2 text-[gray] transition-all duration-500' 
              onClick={() => setFormSteps(formSteps - 1)}
              style={{opacity:formSteps<1?"50%":1}}
              disabled={formSteps<1}
            >
              Back
            </button>
        
          </div>
      </div>

      <div className='flex w-[400px] justify-center items-center'>
        <div className='h-[90%] w-[80%] relative'>
        <AnimatePresence mode="wait">
         <motion.div 
          key={formSteps} // Key to track formSteps
          initial="initial"
          animate="animate"
          exit="exit"
          variants={fadeVariants}
          transition={{ duration: 0.5 }} // Transition time
         >
            <div className='mt-20 font-bold leading-6 mb-5'>
              Are you an experienced professional in the industry, or are you just starting your career as a fresher?
            </div>
            {form[formSteps]}
         </motion.div>
          </AnimatePresence>
         {formSteps<8? <button 
            className={`${!enableNextButton?"bg-[gray] opacity-50":"bg-[#6B169F] opacity-100"}border-[gray] border-[1px] rounded absolute font-bold bottom-0 right-0 px-14 py-2 text-[white] transition-all duration-500 `}
            onClick={() => setFormSteps(formSteps + 1)}
            disabled={!enableNextButton}
          >
            Next
          </button>:
          <button 
          className={`bg-[#6B169F] border-[gray] border-[1px] rounded absolute font-bold bottom-0 right-0 px-14 py-2 text-[white] transition-all duration-500 `}
          onClick={() => console.log(formData)}
          
        >
          Submit
        </button>
          }
        </div>
      </div>

      <ProjectsDialogBox />
    </div>
  )
}