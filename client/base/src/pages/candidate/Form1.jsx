import React from 'react'
import { Autocomplete, Chip, TextField } from '@mui/material'
import { Link } from 'react-router-dom'

import { languages } from '../../helpers/languages'
import { cities } from '../../helpers/cities'
import { useMyContext } from '../../context/Context'
export default function Form1() {
    const {formSteps, setFormSteps}=useMyContext()
  return (
    <div className=' flex flex-col gap-2 w-[65%]'>
        <div className='flex gap-2'>
           <TextField className='flex-1' id="name" label="First Name" variant="outlined" size='small'/>
           <TextField className='flex-1' id="name" label="Last Name" variant="outlined" size='small'/>
        </div>
        <textarea id='about' className="font-[inter] p-2 outline-none bg-[#F4F2EE]  border-[#2D1BAB] border-[2px] rounded-md" placeholder="About"></textarea>
         <div className='flex gap-2 max-sm:flex-col'>
          <TextField id="password" className='flex-1' label="Portfolio Link" size='small' variant="outlined" />
          <TextField id="password" className='flex-1' label="Github Link" size='small' variant="outlined" />
        </div>

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
      label="Languages Spoken"
      placeholder="Favorites"
    />
  )}
/>


        <Autocomplete
        size='small'
  multiple
  id="tags-outlined"
  options={cities}
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
      label="Preferred Work Locations"
      placeholder="Favorites"
    />
  )}
/>


         <div className='flex justify-between mt-2 mb-4 mx-1'>

        <button disabled={formSteps==0} className={`text-sm font-bold ${formSteps==0?"text-[gray]":"text-[#3523B5]"}  underline`} onClick={(e)=>setFormSteps(formSteps-1)}>Previous</button> 
        {formSteps<2 && <button disabled={formSteps==2} className={`text-sm font-bold ${formSteps==2?"text-[gray]":"text-[#3523B5]"}  underline`} onClick={(e)=>setFormSteps(formSteps+1)}>Next</button> }
        {formSteps===2 && <button className={`text-sm font-bold text-[#3523B5] underline`} >Submit</button> }

    </div>
      </div>
  )
}
