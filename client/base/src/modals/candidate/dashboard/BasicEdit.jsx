import React, { useState } from "react";
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  Autocomplete,
} from "@mui/material";
import LocationDropdown from "../../../components/LocationDropdown";

const BasicEdit = ({ open, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    workRoles: [],
    minSalary: "",
    maxSalary: "",
  });

  const workRolesOptions = [
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
    "Designer",
    "Project Manager",
    "DevOps Engineer",
    "Data Scientist",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRolesChange = (event, value) => {
    setFormData((prev) => ({
      ...prev,
      workRoles: value,
    }));
  };

  const handleSave = () => {
   
    onClose(false); // Close modal
  };

  return (
    <Modal open={open} onClose={()=>onClose()} aria-labelledby="edit-profile-modal">
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          borderRadius: 2,
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography id="edit-profile-modal" variant="h6" component="h2" mb={2}>
          Edit Profile
        </Typography>
        <TextField
          size="small"
          label="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          size="small"
          label="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          fullWidth
          sx={{ mb: 2 }}
        />
        <LocationDropdown/>
        
        <Autocomplete
          size="small" 
          multiple
          options={workRolesOptions}
          value={formData.workRoles}
          onChange={handleRolesChange}
          renderInput={(params) => (
            <TextField
              size="small"
              {...params}
              label="Preferred Work Roles"
              placeholder="Select roles"
              sx={{ mb: 2 }}
              fullWidth
            />
          )}
        />
        <Box display="flex" gap={2} sx={{ mb: 2 }}>
          <TextField
            size="small"
            label="Min Salary (₹)"
            name="minSalary"
            value={formData.minSalary}
            onChange={handleChange}
            placeholder="e.g., 500000"
            fullWidth
          />
          <TextField
            size="small"
            label="Max Salary (₹)"
            name="maxSalary"
            value={formData.maxSalary}
            onChange={handleChange}
            placeholder="e.g., 700000"
            fullWidth
          />
        </Box>
        <Box mt={2} display="flex" justifyContent="flex-end" gap={2}>
          <Button onClick={onClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSave} variant="contained" color="primary">
            Save
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default BasicEdit;



