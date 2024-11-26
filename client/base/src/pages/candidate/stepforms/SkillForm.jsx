import React, { useEffect, useState } from 'react';
import { Autocomplete, Chip, TextField } from '@mui/material';
import { useMyContext } from '../../../context/Context';

export default function SkillForm() {
    const { formData, setFormData, formSteps, setEnableNextButton } = useMyContext();
    const [error, setError] = useState(''); // State to hold the error message

    useEffect(() => {
        if (formSteps === 5 && formData.skills.length === 0) {
            setEnableNextButton(false);
        } else {
            setEnableNextButton(true);
        }
    }, [formSteps, formData.skills]);

    const handleSkillsChange = (event, newValue) => {
        if (newValue.length > 3) {
            setError('You can add up to 30 skills only.');
        } else {
            setError('');
            const lowercasedSkills = newValue.map(skill =>
                typeof skill === 'string' ? skill.toLowerCase() : skill.title.toLowerCase()
            );
            setFormData((prevFormData) => ({
                ...prevFormData,
                skills: lowercasedSkills, // Update the state with lowercase values
            }));
        }
    };

    return (
        <div className='flex flex-col gap-2'>
            <Autocomplete
            className='!max-h-[150px]'
                size='small'
                multiple
                id="tags-outlined"
                options={[]}
                freeSolo // Allows users to add custom values
                value={formData.skills} // Bind the state to the Autocomplete component
                onChange={handleSkillsChange}
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
                        helperText={error || 'press Enter to add skills'} // Default helper text when no error
                        error={!!error} // Set error state for the text field
                    />
                )}
                disableClearable // Disable the dropdown
            />
        </div>
    );
}
