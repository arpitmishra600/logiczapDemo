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
import axios from 'axios'
const textData=[
  ["Let’s get to know you! Share your complete name.","Your full name, please!","Let’s keep it formal yet fabulous."],
  ["Introduce yourself to potential employers—what should they know about you?","Who are you beyond the resume?","Describe yourself in a way that showcases your personality and passion."],
  ["List the schools, colleges, and programs that shaped your path.","From classrooms to career","Every great story starts with learning. What’s your educational chapter?"],
  ["What’s your professional journey so far? Share your experience!","What’s your career story?","Tell us about the roles that shaped your career."],
  ["What are the projects that showcase your skills? Tell us about them!","What’s your masterpiece?","Tell us about the challenges you’ve tackled and the solutions you’ve built."],
  ["What are your superpowers? Share the skills that set you apart!","What’s in your toolkit?","Share the skills that power your career and passions."],
  ["What’s your dream role? Tell us where you see yourself excelling.","What’s your next big move?","What role are you ready to shine in? Share your preferred job titles."],
  ["Where do you see yourself working? Tell us your preferred locations.","From remote to in-office","where do you want your career to thrive?"],
  ["What languages do you speak fluently? Let us know your linguistic skills.","Fluent in more than one language?","Tell us what languages you speak!"]
  
]
export default function CandidateForm() {
  
  const form=[<NameForm/>,<AboutForm/>,<EducationForm/>,<ExperienceForm/>,<ProjectForm/>,<SkillForm/>,<WorkRolesForm/>,<WorkLocation/>,<Languageform/>,<ImageForm/>]
  const {formSteps, setFormSteps,enableNextButton,setEnableNextButton,formData} = useMyContext()

  const handelFinalSubmit = async() => {
  const formDataUpd = new FormData();

  // Serialize complex fields before appending
  formDataUpd.append("education", JSON.stringify(formData.education)); // Serialize array/object
  formDataUpd.append("skills", JSON.stringify(formData.skills)); // Serialize array/object
  formDataUpd.append("workExperience", JSON.stringify(formData.experience)); // Serialize array/object
  formDataUpd.append("name", `${formData.firstName}, ${formData.lastName}`); // Combine firstName and lastName
  formDataUpd.append("domain", JSON.stringify(formData.preferredWorkRoles)); // Serialize array/object
  formDataUpd.append("languages", JSON.stringify(formData.languagesSpoken)); // Serialize array/object
  formDataUpd.append("locations", JSON.stringify(formData.preferredWorkLocations)); // Serialize array/object
  formDataUpd.append("expectedSalary", 0); // Direct value
  formDataUpd.append("experience", JSON.stringify(formData.experience)); // Serialize array/object
  formDataUpd.append("about", formData.about); // Direct value

  // Logging FormData contents
  for (let [key, value] of formDataUpd.entries()) {
    console.log(key, value);
  }
  const response=await axios.post(`${import.meta.env.VITE_SERVER_ENDPOINT}/api/v1/profile/updateProfile`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    withCredentials: true,
  });
  console.log(response)
};


 


  
  
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
    <div className='flex font-[OpenSauceSans] overflow-hidden h-screen max-md:flex-col'>
      <div className='flex flex-1 relative justify-center items-center max-md:items-start'>
        <div className='flex flex-1 h-full opacity-25' style={{background:"url('/form/formbkg.png')", backgroundRepeat:"no-repeat", backgroundSize:"cover"}}></div> 
 
        {/* Wrap the motion.div inside AnimatePresence */}
          <div className='flex flex-col max-w-[730px] px-3 absolute h-[90%] justify-center overflow-hidden max-sm:w-full'>
            <div className='border-l-[5px] border-[#123D33] pr-10 gap-3 p-5 mb-20 max-md:mb-5 flex flex-col transition-all max-sm:w-full'>
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
                <div className='text-5xl font-extrabold leading-[60px] mb-4 max-md:text-4xl max-sm:text-xl'>{textData[formSteps] && textData[formSteps][1]}</div>
                
               <TypeAnimation sequence={[
          // Same substring at the start will only be typed out once, initially
          textData[formSteps] && textData[formSteps][2],
          1000, // wait 1s before replacing "Mice" with "Hamsters"
        ]}
        wrapper="span"
        speed={60}
        style={{display: 'inline-block',}}
        className='flex items-center text-md font-[400] tracking-wide font-[OpenSauceSans] max-sm:text-sm'
        repeat={Infinity} />
              </motion.div>
         
              </AnimatePresence>
            </div> 
            <button 
              className='border-[gray] font-bold max-md:hidden border-[1px] rounded absolute bottom-0 px-14 py-2 text-[gray] transition-all duration-500' 
              onClick={() => setFormSteps(formSteps - 1)}
              style={{opacity:formSteps<1?"50%":1}}
              disabled={formSteps<1}
            >
              Back
            </button>
        
          </div>
      </div>

      <div className='flex max-md:flex-1 h-full max-md:w-full w-[400px] justify-center items-center max-md:items-start max-md:p-10 max-md:rounded-[32px] max-md:relative max-md:top-[-20px] z-1 bg-[white] max-sm:p-3'>
        <div className='h-[90%] w-[80%] max-md:w-full relative max-md:h-full max-w-[500px]'>
        <AnimatePresence mode="wait">
         <motion.div 
          key={formSteps} // Key to track formSteps
          initial="initial"
          animate="animate"
          exit="exit"
          variants={fadeVariants}
          transition={{ duration: 0.5 }} // Transition time
         >
            <div className='mt-20 max-md:mt-0 font-bold leading-6 mb-5'>
              {textData[formSteps] && textData[formSteps][0]}
            </div>
            {form[formSteps]}
         </motion.div>
          </AnimatePresence>
          <button 
              className='border-[gray] max-sm:text-sm max-sm:px-8 font-bold border-[1px] hidden max-md:block rounded absolute bottom-0 px-14 py-2 text-[gray] transition-all duration-500' 
              onClick={() => setFormSteps(formSteps - 1)}
              style={{opacity:formSteps<1?"50%":1}}
              disabled={formSteps<1}
            >
              Back
            </button>
         {formSteps<8? <button 
            className={`${!enableNextButton?"bg-[gray] opacity-50":"bg-[#6B169F] opacity-100"}border-[gray] max-sm:px-8 max-sm:text-sm border-[1px] rounded absolute font-bold bottom-0 right-0 px-14 py-2 text-[white] transition-all duration-500 `}
            onClick={() => setFormSteps(formSteps + 1)}
            disabled={!enableNextButton}
            
          >
            Next
          </button>:
          <motion.button initial={{opacity:0,display:"none"}} animate={{opacity:1,display:"block"}} transition={{duration:0.5,delay:1}}
          className={`${!enableNextButton?"bg-[gray] opacity-50":"bg-[#6B169F] opacity-100"}border-[gray] max-sm:px-8 max-sm:text-sm border-[1px] rounded absolute font-bold bottom-0 right-0 px-14 py-2 text-[white] transition-all duration-500 `}
          onClick={() => 
            // console.log(formData)
            handelFinalSubmit()
          }
          disabled={!enableNextButton}
        >
          Submit
        </motion.button>
          }
        </div>
      </div>

      <ProjectsDialogBox />
    </div>
  )
}