import React, { useEffect } from 'react'
import { useMyContext } from '../../../context/Context'
import EducationDialogBox from '../../../components/EducationDialog'
import { Chip } from '@mui/material'

export default function EducationForm() {
  const {setEdudialog,formData,setFormData,formSteps,setEnableNextButton}=useMyContext()

  useEffect(() => {
    if (formSteps==2 && formData.education.length==0){
      setEnableNextButton(false)
    }
    else{
      setEnableNextButton(true)
    }
    

   
  }, [formSteps,formData.education])
  
  return (
    <>
      <div className='flex-1 flex flex-col border border-[#CCCCCC] py-1 px-3 rounded-sm font-[inter]'>
      <div onClick={(e)=>setEdudialog(true)} className='cursor-pointer flex justify-between w-[100%] items-center text-[#6B169F] font-[400] text-[16px]'>Add Education<img src='/add.svg'   className='w-[30px] cursor-pointer'/></div>
      <div className=' max-h-[400px]'></div>
     </div>
     <div className='mt-3 rounded flex flex-wrap gap-2'>
        {formData.education.map((item,index)=><Chip sx={{borderRadius:"5px",px:1}} deleteIcon onDelete={()=>setFormData((prevFormData) => ({
    ...prevFormData,
    education: prevFormData.education.filter((_, i) => i !== index), // Remove the education at the specified index
  }))} label={`${item.fieldOfStudy} in ${item.branch} at ${item.instituteName}`}/>)}
     </div>
     <EducationDialogBox />
    </>
  )
}