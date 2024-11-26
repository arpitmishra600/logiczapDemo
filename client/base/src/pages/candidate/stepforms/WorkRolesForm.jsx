import React, { useEffect, useState } from 'react';
import { Autocomplete, Chip, TextField } from '@mui/material';
import { useMyContext } from '../../../context/Context';

export default function WorkRolesForm() {
    const { formSteps, setFormSteps, setFormData, formData, setEnableNextButton } = useMyContext();
    const [error, setError] = useState(''); // State to manage error messages

    useEffect(() => {
        if (formSteps === 6 && formData.preferredWorkRoles.length === 0) {
            setEnableNextButton(false);
        } else {
            setEnableNextButton(true);
        }
    }, [formSteps, formData.preferredWorkRoles]);

    const handleRolesChange = (event, newValue) => {
        if (newValue.length > 3) {
            setError('You can add up to 3 work roles only.');
        } else {
            setError('');
            const lowercasedRoles = newValue.map(role =>
                typeof role === 'string' ? role.toLowerCase() : role.title.toLowerCase()
            );
            setFormData((prevFormData) => ({
                ...prevFormData,
                preferredWorkRoles: lowercasedRoles, // Update the state with lowercase roles
            }));
        }
    };

    return (
        <div className='flex flex-col gap-2'>
            <Autocomplete
                size='small'
                multiple
                id="tags-outlined"
                options={[]} // Add predefined options here if needed
                freeSolo // Allows users to add custom values
                value={formData.preferredWorkRoles}
                onChange={handleRolesChange}
                getOptionLabel={(option) =>
                    typeof option === 'string' ? option : option.title
                }
                renderTags={(value, getTagProps) =>
                    value.map((option, index) => {
                        const { key, ...tagProps } = getTagProps({ index });
                        return (
                            <Chip
                                variant="outlined"
                                label={typeof option === 'string' ? option : option.title}
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
                        helperText={error || 'Press Enter to add'} // Show error or default helper text
                        error={!!error} // Show error state if there's an error
                    />
                )}
            />
        </div>
    );
}
