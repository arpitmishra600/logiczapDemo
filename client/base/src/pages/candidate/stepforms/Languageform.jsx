import { Autocomplete, Chip, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { languages } from '../../../helpers/languages';
import { useMyContext } from '../../../context/Context';

export default function LanguageForm() {
    const { formSteps, setFormSteps, setFormData, formData, setEnableNextButton } = useMyContext();
    const [error, setError] = useState(''); // State to manage error messages

    useEffect(() => {
        if (formSteps === 8 && formData.languagesSpoken.length === 0) {
            setEnableNextButton(false);
        } else {
            setEnableNextButton(true);
        }
    }, [formSteps, formData.languagesSpoken]);

    const handleLanguagesChange = (event, newValue) => {
        // Ensure all values are in lowercase and remove duplicates
        const uniqueLanguages = Array.from(new Set(newValue.map((language) =>
            typeof language === 'string' ? language.toLowerCase() : language.title.toLowerCase()
        )));

        if (uniqueLanguages.length > 10) {
            setError('You can add up to 10 languages only.');
        } else if (uniqueLanguages.length < newValue.length) {
            setError('Duplicate languages are not allowed.');
        } else {
            setError('');
        }

        setFormData((prevFormData) => ({
            ...prevFormData,
            languagesSpoken: uniqueLanguages.slice(0, 10), // Limit to 10 unique languages
        }));
    };

    return (
        <Autocomplete
            size="small"
            multiple
            id="tags-outlined"
            options={languages}
            value={formData.languagesSpoken}
            onChange={handleLanguagesChange}
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
                    label="Languages Spoken"
                    placeholder="Favorites"
                    helperText={error || 'Press Enter to add languages'} // Default helper text or error message
                    error={!!error} // Show error state if there's an error
                />
            )}
        />
    );
}
