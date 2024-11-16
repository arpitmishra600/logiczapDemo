import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Box,
  Typography,
  Chip,
} from '@mui/material';

import { useMyContext } from '../../../context/Context';

const AdditionalEdit = () => {
  const { editAdditional, setEditAdditional } = useMyContext();
  const [languageKnown, setLanguageKnown] = useState(['English', 'Hindi']);
  const [preferredLocation, setPreferredLocation] = useState(['New York', 'San Francisco']);
  const [newLanguage, setNewLanguage] = useState('');
  const [newLocation, setNewLocation] = useState('');
  const [githubLink, setGithubLink] = useState('');
  const [linkedinLink, setLinkedinLink] = useState('');
  const [portfolioLink, setPortfolioLink] = useState('');

  const handleAddLanguage = () => {
    if (newLanguage && !languageKnown.includes(newLanguage)) {
      setLanguageKnown([...languageKnown, newLanguage]);
      setNewLanguage('');
    }
  };

  const handleRemoveLanguage = (index) => {
    setLanguageKnown(languageKnown.filter((_, i) => i !== index));
  };

  const handleAddLocation = () => {
    if (newLocation && !preferredLocation.includes(newLocation)) {
      setPreferredLocation([...preferredLocation, newLocation]);
      setNewLocation('');
    }
  };

  const handleRemoveLocation = (index) => {
    setPreferredLocation(preferredLocation.filter((_, i) => i !== index));
  };

  const handleSave = () => {
    const additionalDetails = {
      languageKnown,
      preferredLocation,
      githubLink,
      linkedinLink,
      portfolioLink,
    };
    console.log(additionalDetails); // Save to context or API
    setEditAdditional(false);
  };

  return (
    <Dialog
      open={editAdditional}
      onClose={() => setEditAdditional(false)}
      aria-labelledby="additional-edit-dialog-title"
    >
      <DialogTitle id="additional-edit-dialog-title">Edit Additional Details</DialogTitle>
      <DialogContent>
        {/* Languages Known Section */}
        <Box mb={3}>
          <Typography variant="h6">Languages Known</Typography>
          <Box display="flex" flexWrap="wrap" gap={1} mt={1}>
            {languageKnown.map((language, index) => (
              <Chip
                key={index}
                label={language}
                onDelete={() => handleRemoveLanguage(index)}
                color="primary"
              />
            ))}
          </Box>
          <TextField
            fullWidth
            label="Add Language"
            value={newLanguage}
            onChange={(e) => setNewLanguage(e.target.value)}
            sx={{ mt: 2 }}
          />
          <Button onClick={handleAddLanguage} variant="outlined" sx={{ mt: 1 }}>
            Add
          </Button>
        </Box>

        {/* Preferred Location Section */}
        <Box mb={3}>
          <Typography variant="h6">Preferred Locations</Typography>
          <Box display="flex" flexWrap="wrap" gap={1} mt={1}>
            {preferredLocation.map((location, index) => (
              <Chip
                key={index}
                label={location}
                onDelete={() => handleRemoveLocation(index)}
                color="secondary"
              />
            ))}
          </Box>
          <TextField
            fullWidth
            label="Add Location"
            value={newLocation}
            onChange={(e) => setNewLocation(e.target.value)}
            sx={{ mt: 2 }}
          />
          <Button onClick={handleAddLocation} variant="outlined" sx={{ mt: 1 }}>
            Add
          </Button>
        </Box>

        {/* Additional Links Section */}
        <Box mb={3}>
          <Typography variant="h6">Additional Links</Typography>
          <TextField
            fullWidth
            label="GitHub Link"
            value={githubLink}
            onChange={(e) => setGithubLink(e.target.value)}
            sx={{ mt: 2 }}
          />
          <TextField
            fullWidth
            label="LinkedIn Link"
            value={linkedinLink}
            onChange={(e) => setLinkedinLink(e.target.value)}
            sx={{ mt: 2 }}
          />
          <TextField
            fullWidth
            label="Portfolio Link"
            value={portfolioLink}
            onChange={(e) => setPortfolioLink(e.target.value)}
            sx={{ mt: 2 }}
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setEditAdditional(false)}>Cancel</Button>
        <Button onClick={handleSave} variant="contained">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AdditionalEdit;
