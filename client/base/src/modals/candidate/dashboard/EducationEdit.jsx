import React, { useState } from 'react';
import { Modal, Box, Button, Typography, TextField, FormControlLabel, Checkbox } from '@mui/material';
import { useMyContext } from '../../../context/Context';

function EducationModal({ open, handleClose, education, setEducation, handleSave, errors }) {
  return (
    <Modal open={open} onClose={handleClose} aria-labelledby="education-modal-title">
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          borderRadius: 2,
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography id="education-modal-title" variant="h6" mb={2}>
          {education.id ? 'Edit Education' : 'Add New Education'}
        </Typography>

        <TextField
          label="Institute Name"
          fullWidth
          margin="normal"
          variant="outlined"
          value={education.instituteName}
          onChange={(e) => setEducation({ ...education, instituteName: e.target.value })}
          error={!!errors.instituteName}
          helperText={errors.instituteName}
        />
        <TextField
          label="Course Name"
          fullWidth
          margin="normal"
          variant="outlined"
          value={education.courseName}
          onChange={(e) => setEducation({ ...education, courseName: e.target.value })}
          error={!!errors.courseName}
          helperText={errors.courseName}
        />
        <TextField
          label="Start Date"
          fullWidth
          margin="normal"
          type="date"
          variant="outlined"
          value={education.startDate}
          onChange={(e) => setEducation({ ...education, startDate: e.target.value })}
          InputLabelProps={{ shrink: true }}
          error={!!errors.startDate}
          helperText={errors.startDate}
        />
        <TextField
          label="End Date"
          fullWidth
          margin="normal"
          type="date"
          variant="outlined"
          value={education.endDate}
          onChange={(e) => setEducation({ ...education, endDate: e.target.value })}
          InputLabelProps={{ shrink: true }}
          disabled={education.currentlyStudying} // Disable end date if currently studying is checked
          error={!!errors.endDate}
          helperText={errors.endDate}
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={education.currentlyStudying}
              onChange={(e) => setEducation({ ...education, currentlyStudying: e.target.checked })}
              color="primary"
            />
          }
          label="Currently Studying"
        />

        <Box mt={2} display="flex" justifyContent="flex-end">
          <Button onClick={handleClose} color="secondary" sx={{ mr: 1 }}>
            Cancel
          </Button>
          <Button onClick={handleSave} variant="contained" color="primary">
            Save
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}

function EducationEdit() {
  const { editEducation, setEditEducation } = useMyContext();
  const [educations, setEducations] = useState([
    { id: 1, instituteName: 'University A', courseName: 'B.Tech', startDate: '2015-08-01', endDate: '2019-05-01', currentlyStudying: false },
    { id: 2, instituteName: 'University B', courseName: 'M.Tech', startDate: '2020-09-01', endDate: '', currentlyStudying: true },
  ]);

  const [editingEducation, setEditingEducation] = useState({
    instituteName: '',
    courseName: '',
    startDate: '',
    endDate: '',
    currentlyStudying: false,
  });

  const [errors, setErrors] = useState({
    instituteName: '',
    courseName: '',
    startDate: '',
    endDate: '',
  });

  const [isEducationModalOpen, setIsEducationModalOpen] = useState(false);

  const handleOpen = () => setIsEducationModalOpen(true);
  const handleClose = () => setIsEducationModalOpen(false);

  const validate = () => {
    const newErrors = {
      instituteName: editingEducation.instituteName.trim() ? '' : 'Institute Name is required.',
      courseName: editingEducation.courseName.trim() ? '' : 'Course Name is required.',
      startDate: editingEducation.startDate ? '' : 'Start Date is required.',
      endDate: '',
    };

    if (!editingEducation.currentlyStudying) {
      if (!editingEducation.endDate) {
        newErrors.endDate = 'End Date is required unless "Currently Studying" is checked.';
      } else if (editingEducation.startDate && editingEducation.endDate < editingEducation.startDate) {
        newErrors.endDate = 'End Date must not be earlier than Start Date.';
      }
    }

    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === '');
  };

  const handleEdit = (education) => {
    setEditingEducation(education);
    setErrors({ instituteName: '', courseName: '', startDate: '', endDate: '' });
    handleOpen();
  };

  const handleAddNewEducation = () => {
    setEditingEducation({ instituteName: '', courseName: '', startDate: '', endDate: '', currentlyStudying: false });
    setErrors({ instituteName: '', courseName: '', startDate: '', endDate: '' });
    handleOpen();
  };

  const handleSave = () => {
    if (!validate()) return;

    if (editingEducation.id) {
      setEducations(educations.map((edu) => (edu.id === editingEducation.id ? editingEducation : edu)));
    } else {
      setEducations([...educations, { ...editingEducation, id: educations.length + 1 }]);
    }
    handleClose();
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this education record?')) {
      setEducations(educations.filter((edu) => edu.id !== id));
    }
  };

  return (
    <div>
      <Modal open={editEducation} onClose={() => setEditEducation(false)}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 600,
            bgcolor: 'background.paper',
            borderRadius: 2,
            boxShadow: 24,
            p: 4,
            maxHeight: '90vh',
            overflowY: 'auto',
          }}
        >
          {educations.map((education) => (
            <Box key={education.id} sx={{ marginBottom: 2, padding: 2, border: '1px solid #ccc', borderRadius: 2 }}>
              <Typography variant="h6">{education.instituteName}</Typography>
              <Typography variant="body2" color="textSecondary">
                {education.courseName} - {education.startDate} to {education.currentlyStudying ? 'Present' : education.endDate}
              </Typography>
              <Box mt={1}>
                <Button variant="outlined" color="primary" onClick={() => handleEdit(education)} sx={{ mr: 1 }}>
                  Edit
                </Button>
                <Button variant="outlined" color="error" onClick={() => handleDelete(education.id)}>
                  Delete
                </Button>
              </Box>
            </Box>
          ))}
          <Button variant="contained" color="primary" onClick={handleAddNewEducation} sx={{ mt: 2 }}>
            Add New Education
          </Button>
          <EducationModal
            open={isEducationModalOpen}
            handleClose={handleClose}
            education={editingEducation}
            setEducation={setEditingEducation}
            handleSave={handleSave}
            errors={errors}
          />
        </Box>
      </Modal>
    </div>
  );
}

export default EducationEdit;
