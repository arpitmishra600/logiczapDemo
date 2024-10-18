import { Autocomplete, Chip, TextField } from '@mui/material';
import React, { useEffect } from 'react'
import { languages } from '../../../helpers/languages';
import { useMyContext } from '../../../context/Context';
export default function Languageform() {
  const { formSteps, setFormSteps,setFormData,formData,setEnableNextButton } = useMyContext();
  useEffect(() => {
    if (formSteps==8 && formData.languagesSpoken.length==0){
      setEnableNextButton(false)
    }
    else{
      setEnableNextButton(true)
    }
    

   
  }, [formSteps,formData.languagesSpoken])
  return (
    <Autocomplete
    size='small'
multiple
id="tags-outlined"
options={languages}
value={formData.languagesSpoken}
onChange={(event, newValue) => {
  setFormData((prevFormData) => ({
    ...prevFormData,
    languagesSpoken: newValue, // Update the state with the new value
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
  label="Languages Spoken"
  placeholder="Favorites"
/>
)}
/>
  )
}
