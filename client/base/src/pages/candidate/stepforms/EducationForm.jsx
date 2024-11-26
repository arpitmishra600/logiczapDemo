import React, { useEffect, useState } from 'react';
import { useMyContext } from '../../../context/Context';
import EducationDialogBox from '../../../components/EducationDialog';
import { Chip, Typography } from '@mui/material';

export default function EducationForm() {
    const { setEdudialog, formData, setFormData, formSteps, setEnableNextButton } = useMyContext();
    const [error, setError] = useState(''); // State for helper/error text

    useEffect(() => {
        // Disable/enable the next button based on the education array
        if (formSteps === 2 && formData.education.length === 0) {
            setEnableNextButton(false);
        } else {
            setEnableNextButton(true);
        }
    }, [formSteps, formData.education]);

    const handleAddEducation = () => {
        if (formData.education.length >= 3) {
            setError('You can add up to 3 education entries only.');
        } else {
            setError('');
            setEdudialog(true); // Open the dialog box for adding education
        }
    };

    const handleDeleteEducation = (index) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            education: prevFormData.education.filter((_, i) => i !== index), // Remove the education at the specified index
        }));
        setError(''); // Clear error if an education entry is removed
    };

    return (
        <>
            <div className="flex-1 flex flex-col border border-[#CCCCCC] py-1 px-3 rounded-sm font-[inter]">
                <div
                    onClick={handleAddEducation}
                    className="cursor-pointer flex justify-between w-[100%] items-center text-[#6B169F] font-[400] text-[16px]"
                >
                    Add Education
                    <img src="/add.svg" className="w-[30px] cursor-pointer" alt="Add Icon" />
                </div>
            </div>
            {error && (
                <Typography color="error" variant="caption" className="mt-1">
                    {error}
                </Typography>
            )}
            <div className="mt-3 rounded flex flex-wrap gap-2 max-md:max-h-[150px] max-md:overflow-auto">
                {formData.education.map((item, index) => (
                    <Chip
                        key={index}
                        sx={{ borderRadius: '5px', px: 1 }}
                        onDelete={() => handleDeleteEducation(index)}
                        deleteIcon
                        label={`${item.fieldOfStudy} in ${item.branch} at ${item.instituteName}`}
                    />
                ))}
            </div>
            <EducationDialogBox />
        </>
    );
}
