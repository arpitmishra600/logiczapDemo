import React, { useEffect } from 'react'
import { useMyContext } from '../../../context/Context'
import ExperienceDialogBox from '../../../components/ExperienceDialogBox'
import { Chip } from '@mui/material'

export default function ExperienceForm() {
  const {setExpdialog,formData,setFormData,formSteps,setEnableNextButton}=useMyContext()
  useEffect(() => {
    if (formSteps==3 && formData.experience.length==0){
      setEnableNextButton(false)
    }
    else{
      setEnableNextButton(true)
    }
    

   
  }, [formSteps,formData.experience])
  return (
    <>
      <div className='flex-1 flex border border-[#CCCCCC] py-1 px-3 rounded-sm font-[inter]'>
      <div onClick={(e)=>setExpdialog(true)} className='cursor-pointer flex justify-between w-[100%] items-center text-[#6B169F] font-[400] text-[16px]'>Add Experience <img src='/add.svg'  className='w-[30px] cursor-pointer'/></div>
      <div className=' max-h-[400px]'></div>
     </div>
     <div className='mt-3 rounded flex flex-wrap gap-2'>
     {formData.experience.map((item,index)=><Chip sx={{borderRadius:"5px",px:1}} deleteIcon onDelete={()=>setFormData((prevFormData) => ({
  ...prevFormData,
  experience: prevFormData.experience.filter((_, i) => i !== index), // Remove the education at the specified index
  }))} label={`${item.position} at ${item.companyName}`}/>)}
  </div>
  <ExperienceDialogBox/>
    </>
  )
}
