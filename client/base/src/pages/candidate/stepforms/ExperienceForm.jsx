import React, { useEffect, useState } from 'react';
import { useMyContext } from '../../../context/Context';
import ExperienceDialogBox from '../../../components/ExperienceDialogBox';
import { Chip, Typography } from '@mui/material';

export default function ExperienceForm() {
    const { setExpdialog, formData, setFormData, formSteps, setEnableNextButton } = useMyContext();
    const [error, setError] = useState(''); // State for helper/error text

    useEffect(() => {
        // Disable/enable the next button based on the experience array
        if (formSteps === 3 && formData.experience.length === 0 ) {
            setEnableNextButton(false);
        } else {
            setEnableNextButton(true);
        }
    }, [formSteps, formData.experience]);

    const handleAddExperience = () => {
        if (formData.experience.length >= 3) {
            setError('You can add up to 3 experiences only.');
        } else {
            setError('');
            setExpdialog(true); // Open the dialog box for adding experience
        }
    };

    const handleDeleteExperience = (index) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            experience: prevFormData.experience.filter((_, i) => i !== index), // Remove the experience at the specified index
        }));
        setError(''); // Clear error if an experience is removed
    };

    return (
        <>
            <div className="flex-1 flex border border-[#CCCCCC] py-1 px-3 rounded-sm font-[inter]">
                <div
                    onClick={handleAddExperience}
                    className="cursor-pointer flex justify-between w-[100%] items-center text-[#6B169F] font-[400] text-[16px]"
                >
                    Add Experience <img src="/add.svg" className="w-[30px] cursor-pointer" alt="Add Icon" />
                </div>
            </div>
            {error && (
                <Typography color="error" variant="caption" className="mt-1">
                    {error}
                </Typography>
            )}
            <div className="mt-3 rounded flex flex-wrap gap-2 max-md:max-h-[150px] max-md:overflow-auto">
                {formData.experience.map((item, index) => (
                    <Chip
                        key={index}
                        sx={{ borderRadius: '5px', px: 1 }}
                        onDelete={() => handleDeleteExperience(index)}
                        deleteIcon
                        label={`${item.position} at ${item.companyName}`}
                    />
                ))}
            </div>
            <ExperienceDialogBox />
        </>
    );
}
