import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button } from '@mui/material';

const UpdateProfilePopup = ({ open, onClose, onSave }) => {
  const [formValues, setFormValues] = useState({
    fullName: '',
    companyName: '',
    designation: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
  
    // Regular expressions
    const nameRegex = /^[a-zA-Z\s]+$/; // Allows only letters and spaces
    const alphanumericRegex = /^[a-zA-Z0-9\s]+$/; // Allows letters, numbers, and spaces
  
    // Full Name Validation
    if (!formValues.fullName.trim()) {
      newErrors.fullName = "Full Name is required.";
    } else if (!nameRegex.test(formValues.fullName)) {
      newErrors.fullName = "Full Name must not contain numbers or special characters.";
    }
  
    // Company Name Validation
    if (!formValues.companyName.trim()) {
      newErrors.companyName = "Company Name is required.";
    } else if (!alphanumericRegex.test(formValues.companyName)) {
      newErrors.companyName = "Company Name must not contain special characters.";
    }
  
    // Designation Validation
    if (!formValues.designation.trim()) {
      newErrors.designation = "Designation is required.";
    } else if (!alphanumericRegex.test(formValues.designation)) {
      newErrors.designation = "Designation must not contain special characters.";
    }
  
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  

  const handleChange = (field) => (event) => {
    setFormValues({ ...formValues, [field]: event.target.value });
  };

  const handleSave = () => {
    if (validate()) {
      onSave(formValues);
      onClose();
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Update Profile</DialogTitle>
      <DialogContent>
        <TextField
          label="Full Name"
          value={formValues.fullName}
          onChange={handleChange('fullName')}
          error={!!errors.fullName}
          helperText={errors.fullName}
          fullWidth
          margin="dense"
        />
        <TextField
          label="Company Name"
          value={formValues.companyName}
          onChange={handleChange('companyName')}
          error={!!errors.companyName}
          helperText={errors.companyName}
          fullWidth
          margin="dense"
        />
        <TextField
          label="Designation"
          value={formValues.designation}
          onChange={handleChange('designation')}
          error={!!errors.designation}
          helperText={errors.designation}
          fullWidth
          margin="dense"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button variant="contained" color="primary" onClick={handleSave}>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

// Usage Example
export default function ProfileEdit({open,setOpen}) {

  const handleSave = (data) => {
    console.log("Updated Data:", data);
  };

  return (
    <div>
   
      <UpdateProfilePopup
        open={open}
        onClose={() => setOpen(false)}
        onSave={handleSave}
      />
    </div>
  );
}
