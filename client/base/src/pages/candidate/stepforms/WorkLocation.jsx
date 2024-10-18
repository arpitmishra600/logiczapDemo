import React, { useEffect } from 'react'
import { Autocomplete, Chip, TextField } from '@mui/material';
import { cities } from '../../../helpers/cities';
import { useMyContext } from '../../../context/Context';
export default function WorkLocation() {
  const { formSteps, setFormSteps,setFormData,formData,setEnableNextButton } = useMyContext();
  useEffect(() => {
    if (formSteps==7 && formData.preferredWorkLocations.length==0){
      setEnableNextButton(false)
    }
    else{
      setEnableNextButton(true)
    }
    

   
  }, [formSteps,formData.preferredWorkLocations])
  return (
    <Autocomplete
    size='small'
multiple
id="tags-outlined"
options={cities}
value={formData.preferredWorkLocations}
onChange={(event, newValue) => {
  setFormData((prevFormData) => ({
    ...prevFormData,
    preferredWorkLocations: newValue, // Update the state with the new value
  }));
}}
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
  placeholder="+ add locations"
/>
)}
/>
  )
}
