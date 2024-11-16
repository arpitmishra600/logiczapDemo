import React, { useState } from 'react';
import { Modal, Box, Button, Typography, TextField, FormControlLabel, Checkbox } from '@mui/material';
import { useMyContext } from '../../../context/Context';

function ExperienceModal({ open, handleClose, experience, setExperience, handleSave, errors }) {
  return (
    <Modal open={open} onClose={handleClose} aria-labelledby="experience-modal-title">
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
        <Typography id="experience-modal-title" variant="h6" mb={2}>
          {experience.id ? 'Edit Experience' : 'Add New Experience'}
        </Typography>

        <TextField
          label="Company Name"
          fullWidth
          margin="normal"
          variant="outlined"
          value={experience.companyName}
          onChange={(e) => setExperience({ ...experience, companyName: e.target.value })}
          error={!!errors.companyName}
          helperText={errors.companyName}
        />
        <TextField
          label="Position"
          fullWidth
          margin="normal"
          variant="outlined"
          value={experience.position}
          onChange={(e) => setExperience({ ...experience, position: e.target.value })}
          error={!!errors.position}
          helperText={errors.position}
        />
        <TextField
          label="Start Date"
          fullWidth
          margin="normal"
          type="date"
          variant="outlined"
          value={experience.startDate}
          onChange={(e) => setExperience({ ...experience, startDate: e.target.value })}
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
          value={experience.endDate}
          onChange={(e) => setExperience({ ...experience, endDate: e.target.value })}
          InputLabelProps={{ shrink: true }}
          disabled={experience.present}
          error={!!errors.endDate}
          helperText={errors.endDate}
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={experience.present}
              onChange={(e) => setExperience({ ...experience, present: e.target.checked })}
              color="primary"
            />
          }
          label="Currently working here"
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

function ExperienceEdit() {
  const { editExperience, setEditExperience } = useMyContext();
  const [experiences, setExperiences] = useState([
    { id: 1, companyName: 'Company A', position: 'Software Engineer', startDate: '2020-01-01', endDate: '2022-12-31', present: false },
    { id: 2, companyName: 'Company B', position: 'Frontend Developer', startDate: '2022-01-01', endDate: '', present: true },
    { id: 3, companyName: 'Company C', position: 'Backend Developer', startDate: '2018-05-01', endDate: '2020-08-01', present: false },
  ]);

  const [editingExperience, setEditingExperience] = useState({
    companyName: '',
    position: '',
    startDate: '',
    endDate: '',
    present: false,
  });

  const [errors, setErrors] = useState({
    companyName: '',
    position: '',
    startDate: '',
    endDate: '',
  });

  const [isExperienceModalOpen, setIsExperienceModalOpen] = useState(false);

  const handleClose = () => setIsExperienceModalOpen(false);

  const handleEdit = (experience) => {
    setEditingExperience(experience);
    setErrors({ companyName: '', position: '', startDate: '', endDate: '' });
    setIsExperienceModalOpen(true);
  };

  const handleAddNewExperience = () => {
    setEditingExperience({ companyName: '', position: '', startDate: '', endDate: '', present: false });
    setErrors({ companyName: '', position: '', startDate: '', endDate: '' });
    setIsExperienceModalOpen(true);
  };

  const validate = () => {
    const newErrors = {
      companyName: editingExperience.companyName.trim() ? '' : 'Company Name is required.',
      position: editingExperience.position.trim() ? '' : 'Position is required.',
      startDate: editingExperience.startDate ? '' : 'Start Date is required.',
      endDate: '',
    };

    if (!editingExperience.present) {
      if (!editingExperience.endDate) {
        newErrors.endDate = 'End Date is required unless "Currently working here" is checked.';
      } else if (editingExperience.startDate && editingExperience.endDate < editingExperience.startDate) {
        newErrors.endDate = 'End Date must not be earlier than Start Date.';
      }
    }

    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === '');
  };

  const handleSave = () => {
    if (!validate()) return;

    if (editingExperience.id) {
      setExperiences(experiences.map((exp) => (exp.id === editingExperience.id ? editingExperience : exp)));
    } else {
      setExperiences([...experiences, { ...editingExperience, id: experiences.length + 1 }]);
    }
    handleClose();
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this experience?')) {
      setExperiences(experiences.filter((experience) => experience.id !== id));
    }
  };

  return (
    <Modal open={editExperience} onClose={() => setEditExperience(false)}>
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
        {experiences.map((experience) => (
          <Box key={experience.id} sx={{ marginBottom: 2, padding: 2, border: '1px solid #ccc', borderRadius: 2 }}>
            <Typography variant="h6">{experience.companyName}</Typography>
            <Typography variant="body2" color="textSecondary">
              {experience.position} - {experience.startDate} to {experience.present ? 'Present' : experience.endDate}
            </Typography>
            <Box mt={1}>
              <Button variant="outlined" color="primary" onClick={() => handleEdit(experience)} sx={{ mr: 1 }}>
                Edit
              </Button>
              <Button variant="outlined" color="error" onClick={() => handleDelete(experience.id)}>
                Delete
              </Button>
            </Box>
          </Box>
        ))}
        <Button variant="contained" color="primary" onClick={handleAddNewExperience} sx={{ mt: 2 }}>
          Add New Experience
        </Button>

        <ExperienceModal
          open={isExperienceModalOpen}
          handleClose={handleClose}
          experience={editingExperience}
          setExperience={setEditingExperience}
          handleSave={handleSave}
          errors={errors}
        />
      </Box>
    </Modal>
  );
}

export default ExperienceEdit;
