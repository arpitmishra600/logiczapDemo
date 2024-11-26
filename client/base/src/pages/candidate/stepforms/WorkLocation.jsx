import React, { useEffect, useState } from 'react';
import { Autocomplete, Chip, TextField } from '@mui/material';
import { cities } from '../../../helpers/cities';
import { useMyContext } from '../../../context/Context';

export default function WorkLocation() {
    const { formSteps, setFormSteps, setFormData, formData, setEnableNextButton } = useMyContext();
    const [error, setError] = useState(''); // State to manage error messages

    useEffect(() => {
        if (formSteps === 7 && formData.preferredWorkLocations.length === 0) {
            setEnableNextButton(false);
        } else {
            setEnableNextButton(true);
        }
    }, [formSteps, formData.preferredWorkLocations]);

    const handleLocationsChange = (event, newValue) => {
        // Remove duplicates and enforce limit
        const uniqueLocations = Array.from(new Set(newValue.map((location) => 
            typeof location === 'string' ? location.toLowerCase() : location.title.toLowerCase()
        )));
        
        if (uniqueLocations.length > 7) {
            setError('You can add up to 7 locations only.');
        } else if (uniqueLocations.length < newValue.length) {
            setError('Duplicate locations are not allowed.');
        } else {
            setError('');
        }

        setFormData((prevFormData) => ({
            ...prevFormData,
            preferredWorkLocations: uniqueLocations.slice(0, 7), // Enforce max limit of 7
        }));
    };

    return (
        <Autocomplete
            size="small"
            multiple
            id="tags-outlined"
            options={cities} // Predefined city options
            value={formData.preferredWorkLocations}
            onChange={handleLocationsChange}
            freeSolo // Allows users to add custom values
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
                    label="Preferred Work Locations"
                    placeholder="+ add locations"
                    helperText={error || 'Press Enter to add locations'} // Default helper text or error message
                    error={!!error} // Show error state if there's an error
                />
            )}
        />
    );
}
