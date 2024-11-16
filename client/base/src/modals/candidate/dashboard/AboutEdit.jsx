import React, { useState } from 'react';
import { Modal, Box, Button, TextField, Typography, IconButton } from '@mui/material';
import { useMyContext } from '../../../context/Context';

function AboutEdit() {
  const { editAbout, setEditAbout } = useMyContext();
  const [aboutMe, setAboutMe] = useState("This is your about me section...");
  
  const handleOpen = () => setEditAbout(true);
  const handleClose = () => setEditAbout(false);
  const handleSave = () => {
    // Perform any saving operation if needed
    setEditAbout(false);
  };

  return (
    <div>
      <Modal
        open={editAbout}
        onClose={handleClose}
        aria-labelledby="edit-about-me-modal-title"
        aria-describedby="edit-about-me-modal-description"
      >
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
            pt: 2,
          }}
        >
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
            <Typography id="edit-about-me-modal-title" variant="h6" component="h2">
              Edit About Me
            </Typography>
          
          </Box>
          <TextField
            id="edit-about-me-textarea"
            label="About Me"
            multiline
            rows={4}
            fullWidth
            margin="normal"
            variant="outlined"
            value={aboutMe}
            onChange={(e) => setAboutMe(e.target.value)}
          />
          <Box mt={2} display="flex" justifyContent="flex-end">
            <Button onClick={handleClose} sx={{ mr: 1 }}>
              Cancel
            </Button>
            <Button onClick={handleSave} variant="contained" color="primary">
              Save
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}

export default AboutEdit;
