import React, { useState } from 'react';
import { 
  Dialog, DialogTitle, DialogContent, DialogActions, 
  Button, TextField, Checkbox, FormControlLabel, Typography, Box, IconButton 
} from '@mui/material';
import { useMyContext } from '../../../context/Context';

const skillsData = [
  { name: 'JavaScript', level: 'Intermediate' },
  { name: 'Python', level: 'Advanced' },
  { name: 'CSS', level: 'Basic' },
];

const SkillEdit = () => {
  const { editSkills, setEditSkills } = useMyContext();
  const [skills, setSkills] = useState(skillsData);
  const [newSkill, setNewSkill] = useState('');
  const [error, setError] = useState('');
  const [levels] = useState(['Basic', 'Intermediate', 'Advanced']);

  const handleCheckboxChange = (index, level) => {
    setSkills((prevSkills) =>
      prevSkills.map((skill, i) =>
        i === index ? { ...skill, level } : skill
      )
    );
  };

  const handleAddSkill = () => {
    if (!newSkill.trim()) {
      setError('Skill name cannot be empty.');
      return;
    }
    if (skills.some((skill) => skill.name.toLowerCase() === newSkill.trim().toLowerCase())) {
      setError('Skill already exists.');
      return;
    }
    setSkills([...skills, { name: newSkill.trim(), level: 'Basic' }]);
    setNewSkill('');
    setError('');
  };

  const handleDeleteSkill = (index) => {
    if (window.confirm('Are you sure you want to delete this skill?')) {
      setSkills(skills.filter((_, i) => i !== index));
    }
  };

  const handleSave = () => {
    // Save logic (e.g., updating the context or sending to the server)
    setEditSkills(false);
  };

  return (
    <Dialog open={editSkills} onClose={() => setEditSkills(false)}>
      <DialogTitle>Update Skills</DialogTitle>
      <DialogContent>
        {skills.map((skill, index) => (
          <Box key={index} sx={{ marginBottom: 2, display: 'flex', alignItems: 'center' }}>
            <Box sx={{ flexGrow: 1 }}>
              <Typography>{skill.name}</Typography>
              {levels.map((level) => (
                <FormControlLabel
                  key={level}
                  control={
                    <Checkbox
                      checked={skill.level === level}
                      onChange={() => handleCheckboxChange(index, level)}
                    />
                  }
                  label={level}
                />
              ))}
            </Box>
            <IconButton color="error" onClick={() => handleDeleteSkill(index)}>
              x
            </IconButton>
          </Box>
        ))}
        <Box mt={2}>
          <TextField
            fullWidth
            label="New Skill"
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            error={!!error}
            helperText={error}
          />
          <Button onClick={handleAddSkill} sx={{ mt: 1 }}>Add Skill</Button>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setEditSkills(false)}>Cancel</Button>
        <Button onClick={handleSave} variant="contained">Save</Button>
      </DialogActions>
    </Dialog>
  );
};

export default SkillEdit;
