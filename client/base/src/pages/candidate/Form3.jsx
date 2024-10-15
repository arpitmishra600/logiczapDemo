import React from 'react'
import { Autocomplete, Chip, TextField } from '@mui/material'
import { Link } from 'react-router-dom'

import { languages } from '../../helpers/languages'
import { cities } from '../../helpers/cities'
import { useMyContext } from '../../context/Context'
import Uploaders from './Uploaders'
export default function Form3() {
    const {formSteps, setFormSteps}=useMyContext()
  return (
    <div className=' flex flex-col gap-2 w-[65%]'>

<Autocomplete
        size='small'
  multiple
  id="tags-outlined"
  options={languages}
  freeSolo // Allows users to add custom values
  getOptionLabel={(option) => {
    // Check if the option is an object or a freeSolo string
    return typeof option === 'string' ? option : option.title;
  }}
  renderTags={(value, getTagProps) =>
    value.map((option, index) => {
      const { key, ...tagProps } = getTagProps({ index });
      return (
        <Chip
          variant="outlined"
          label={typeof option === 'string' ? option : option.title} // Handle both objects and strings
          key={key}
          {...tagProps}
        />
      );
    })
  }
  filterSelectedOptions
  renderInput={(params) => (
    <TextField
      {...params}
      label="Preferred Work Roles"
      placeholder="+ add skills"
    />
  )}
/>


      <div className='flex gap-3 border'>
      <Uploaders/>
      </div>
     
        

     


         <div className='flex justify-between mt-2 mb-4 mx-1'>

        <button disabled={formSteps==0} className={`text-sm font-bold ${formSteps==0?"text-[gray]":"text-[#3523B5]"}  underline`} onClick={(e)=>setFormSteps(formSteps-1)}>Previous</button> 
        {formSteps<2 && <button disabled={formSteps==2} className={`text-sm font-bold ${formSteps==2?"text-[gray]":"text-[#3523B5]"}  underline`} onClick={(e)=>setFormSteps(formSteps+1)}>Next</button> }
        {formSteps===2 && <button className={`text-sm font-bold text-[#3523B5] underline`} >Submit</button> }

    </div>
      </div>
  )
}


