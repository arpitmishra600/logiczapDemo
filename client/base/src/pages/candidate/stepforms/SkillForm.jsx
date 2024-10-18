import React, { useEffect, useState } from 'react';
import { Autocomplete, Chip, TextField } from '@mui/material';
import { Link } from 'react-router-dom';

import { languages } from '../../../helpers/languages';
import { cities } from '../../../helpers/cities';
import { useMyContext } from '../../../context/Context';

export default function SkillForm() {
    const { formData, setFormData,formSteps,setEnableNextButton } = useMyContext();
    const [skills, setSkills] = useState([]); // State to hold the list of skills
    useEffect(() => {
        if (formSteps==5 && formData.skills.length==0){
          setEnableNextButton(false)
        }
        else{
          setEnableNextButton(true)
        }
        
    
       
      }, [formSteps,formData.skills])
    return (
        <div className='flex flex-col gap-2'>
            <Autocomplete
                size='small'
                multiple
                id="tags-outlined"
                options={[]}
                freeSolo // Allows users to add custom values
                value={formData.skills} // Bind the state to the Autocomplete component
                onChange={(event, newValue) => {
                  setFormData((prevFormData) => ({
                    ...prevFormData,
                    skills: newValue, // Update the state with the new value
                  }));
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
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Skills"
                        placeholder="+ add skills"
                    />
                )}
                disableClearable // Disable the dropdown
            />
        </div>
    );
}