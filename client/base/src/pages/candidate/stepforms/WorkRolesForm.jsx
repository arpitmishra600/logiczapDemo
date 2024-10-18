import React, { useEffect, useState } from 'react';
import { Autocomplete, Chip, TextField } from '@mui/material';
import { Link } from 'react-router-dom';

import { languages } from '../../../helpers/languages';

import { useMyContext } from '../../../context/Context';

export default function WorkRolesForm() {
    const { formSteps, setFormSteps,setFormData,formData,setEnableNextButton } = useMyContext();
    const [selectedRoles, setSelectedRoles] = useState([]);
    useEffect(() => {
        if (formSteps==6 && formData.preferredWorkRoles.length==0){
          setEnableNextButton(false)
        }
        else{
          setEnableNextButton(true)
        }
        
    
       
      }, [formSteps,formData.preferredWorkRoles])

    return (
        <div className='flex flex-col gap-2'>
            <Autocomplete
                size='small'
                multiple
                id="tags-outlined"
                options={[]}
                freeSolo // Allows users to add custom values
                value={formData.preferredWorkRoles}
                onChange={(event, newValue) => {
                  setFormData((prevFormData) => ({
                    ...prevFormData,
                    preferredWorkRoles: newValue, // Update the state with the new value
                  }));
                }}
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
                        placeholder="+ add roles"
                    />
                )}
            />
        </div>
    );
}