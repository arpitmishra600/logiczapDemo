import React, { useEffect, useState } from 'react';
import { useMyContext } from '../../../context/Context';
import ExperienceDialogBox from '../../../components/ExperienceDialogBox';
import { Avatar, Chip, Typography } from '@mui/material';
import ProjectsDialogBox from '../../../components/ProjectsDialogBox';

export default function ProjectForm() {
    const { setProDialog, formData, setFormData, formSteps, setEnableNextButton } = useMyContext();
    const [error, setError] = useState(''); // State for error messages

    useEffect(() => {
        if (formSteps === 4 && formData.projects.length === 0) {
            setEnableNextButton(false);
        } else {
            setEnableNextButton(true);
        }
    }, [formSteps, formData.projects]);

    const handleAddProject = () => {
        if (formData.projects.length >= 3) {
            setError('You can add up to 3 projects only.');
        } else {
            setError('');
            setProDialog(true); // Open the project dialog box
        }
    };

    const handleDeleteProject = (index) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            projects: prevFormData.projects.filter((_, i) => i !== index), // Remove the project at the specified index
        }));
        setError(''); // Clear error if a project is removed
    };

    return (
        <>
            <div className="flex gap-3">
                <div className="flex-1 flex border border-[#CCCCCC] py-1 px-3 rounded-sm font-[inter] max-h-[300px]">
                    <div
                        onClick={handleAddProject}
                        className="cursor-pointer flex justify-between w-[100%] items-center text-[#6B169F] font-[400] text-[16px]"
                    >
                        Add Projects <img src="/add.svg" className="w-[30px] cursor-pointer" alt="Add Icon" />
                    </div>
                </div>
            </div>
            {error && (
                <Typography color="error" variant="caption" className="mt-1">
                    {error}
                </Typography>
            )}
            <div className="mt-3 rounded flex flex-wrap gap-2 max-md:max-h-[150px] max-md:overflow-auto">
                {formData.projects.map((item, index) => (
                    <Chip
                        key={index}
                        sx={{ borderRadius: '5px', px: 1 }}
                        onDelete={() => handleDeleteProject(index)}
                        avatar={<Avatar src={item.image} sx={{ borderRadius: '3px' }} />}
                        label={`${item.projectName}`}
                    />
                ))}
            </div>
            <ProjectsDialogBox />
        </>
    );
}
