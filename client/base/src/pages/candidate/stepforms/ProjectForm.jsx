import React, { useEffect } from 'react'
import { useMyContext } from '../../../context/Context'
import ExperienceDialogBox from '../../../components/ExperienceDialogBox'
import { Avatar, Chip } from '@mui/material'
import ProjectsDialogBox from '../../../components/ProjectsDialogBox'

export default function ProjectForm() {
  const {setProDialog,formData,setFormData,formSteps,setEnableNextButton}=useMyContext()
  useEffect(() => {
    if (formSteps==4 && formData.projects.length==0){
      setEnableNextButton(false)
    }
    else{
      setEnableNextButton(true)
    }
    

   
  }, [formSteps,formData.experience])
  return (
    <>
      <div className='flex gap-3'>
      <div className='flex-1 flex border border-[#CCCCCC] py-1 px-3 rounded-sm font-[inter] max-h-[300px]'>
       <div onClick={(e)=>setProDialog(true)} className='cursor-pointer flex justify-between w-[100%] items-center text-[#6B169F] font-[400] text-[16px]'>Add Projects <img src='/add.svg'  className='w-[30px] cursor-pointer'/></div>
       <div className=' max-h-[400px]'></div>
      </div>
     
   </div>
   <div className='mt-3 rounded flex flex-wrap gap-2'>
   {formData.projects.map((item,index)=><Chip sx={{borderRadius:"5px",px:1}} deleteIcon onDelete={()=>setFormData((prevFormData) => ({
  ...prevFormData,
  projects: prevFormData.projects.filter((_, i) => i !== index), // Remove the education at the specified index
  }))} avatar={<Avatar src={item.image} sx={{borderRadius:"3px"}}/>} label={`${item.projectName}`}/>)}
  </div>
  <ProjectsDialogBox/>
    </>
  )
}
