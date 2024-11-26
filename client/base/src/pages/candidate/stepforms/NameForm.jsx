import React, { useState, useEffect } from 'react';
import { TextField } from '@mui/material';
import { useMyContext } from '../../../context/Context';

export default function NameForm() {
  const { setEnableNextButton,setFormData,formData } = useMyContext();
  const [firstName, setFirstName] = useState(formData.firstName);
  const [lastName, setLastName] = useState(formData.lastName);
  const [errors, setErrors] = useState({ firstName: '', lastName: '' });

  // Validate name function
  const validateName = (name) => {
    if (!name) return 'Name cannot be empty';
  if (name.length < 2) return 'Name must be at least 2 characters long';
  if (name.length > 50) return 'Name cannot be more than 50 characters long';
  if (/\d/.test(name)) return 'Name cannot contain numbers';
  if (/\s/.test(name)) return 'Name cannot contain spaces';
  if (/[^a-zA-Z]/.test(name)) return 'Name cannot contain special characters';
  if (/^\s|\s$/.test(name)) return 'Name cannot start or end with spaces';
  return '';
  };
  // Handle input change for first name
  const handleFirstNameChange = (event) => {
    const value = event.target.value;
    setFormData({...formData})
    setFirstName(value);

    setErrors((prevErrors) => ({
      ...prevErrors,
      firstName: validateName(value),
    }));
  };

  // Handle input change for last name
  const handleLastNameChange = (event) => {
    const value = event.target.value;
    setLastName(value);

    setErrors((prevErrors) => ({
      ...prevErrors,
      lastName: validateName(value),
    }));
  };
  setTimeout(() => {
    if (firstName=="" && lastName=="") setEnableNextButton(false)
  }, 10);
 
  // Use useEffect to check when both inputs are valid and enable the next button
  useEffect(() => {
    const firstNameError = validateName(firstName);
    const lastNameError = validateName(lastName);

 

    if (!firstNameError && !lastNameError) {
      setEnableNextButton(true);  // Enable button when both inputs are valid
      setFormData({...formData,firstName,lastName})
    } else {
      setEnableNextButton(false); // Disable button if any error exists
    }
  }, [firstName, lastName, setEnableNextButton]);  // Run the validation whenever firstName or lastName changes


  
  return (
    <form className='flex flex-col gap-3'>
      <TextField
        className='flex-1'
        id="firstName"
        label="First Name"
        variant="outlined"
        size='small'
        value={firstName}
        onChange={handleFirstNameChange}
        error={!!errors.firstName}
        helperText={errors.firstName}
      />
      <TextField
        className='flex-1'
        id="lastName"
        label="Last Name"
        variant="outlined"
        size='small'
        value={lastName}
        onChange={handleLastNameChange}
        error={!!errors.lastName}
        helperText={errors.lastName}
      />
    </form>
  );
}
