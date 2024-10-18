import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { styled } from '@mui/material/styles';
import { Autocomplete, Checkbox, FormControlLabel, TextField } from '@mui/material';
import dayjs from 'dayjs';
import { useMyContext } from '../context/Context';

// Create a styled component for the DialogContentText
const StyledDialogContentText = styled(DialogContentText)({
  fontFamily: 'Inter, sans-serif',
});

// Create a styled component for the DialogTitle
const StyledDialogTitle = styled(DialogTitle)({
  fontFamily: 'Inter, sans-serif',
});

// Create a styled component for the DialogActions
const StyledDialogActions = styled(DialogActions)({
  fontFamily: 'Inter, sans-serif',
});

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ExperienceDialogBox() {
  const [data, setData] = React.useState({
    companyName: '',
    position: '',
    startDate: dayjs().format('YYYY-MM-DD'),
    endDate: dayjs().format('YYYY-MM-DD'),
    currentlyWorking: false,
  });

  const [errors, setErrors] = React.useState({
    companyName: '',
    position: '',
    dateError: '',
  });

  const { expdialog, setExpdialog, setFormData, formData } = useMyContext();

  const handleClose = () => {
    setExpdialog(false);
  };

  const handleInputChange = (field, value) => {
    setData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const validateForm = () => {
    let formIsValid = true;
    let newErrors = {
      companyName: '',
      position: '',
      dateError: '',
    };

    if (!data.companyName.trim()) {
      newErrors.companyName = 'Company name cannot be empty';
      formIsValid = false;
    }

    if (!data.position.trim()) {
      newErrors.position = 'Position cannot be empty';
      formIsValid = false;
    }

    if (dayjs(data.startDate).isAfter(dayjs(data.endDate)) && !data.currentlyWorking) {
      newErrors.dateError = 'Start date cannot be after end date';
      formIsValid = false;
    }

    setErrors(newErrors);
    return formIsValid;
  };

  const handleSaveChanges = () => {
    if (validateForm()) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        experience: [...(prevFormData.experience || []), data],
      }));
      handleClose();
    }
  };

  return (
    <React.Fragment>
      <Dialog
        open={expdialog}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <StyledDialogTitle>{'Add Experience'}</StyledDialogTitle>
        <DialogContent className='py-3 flex flex-col gap-2'>
          {/* Company Name */}
          <TextField
          sx={{mt:1}}
            id="companyName"
            label="Company Name"
            variant="outlined"
            size="small"
            value={data.companyName}
            onChange={(e) => handleInputChange('companyName', e.target.value)}
            error={!!errors.companyName}
            helperText={errors.companyName}
          />

          {/* Position */}
          <Autocomplete
            options={[{ label: "Software Engineer" }, { label: "Designer" }, { label: "Project Manager" }]}
            size="small"
            renderInput={(params) => (
              <TextField
                {...params}
                label="Position"
                error={!!errors.position}
                helperText={errors.position}
              />
            )}
            onChange={(event, newValue) => handleInputChange('position', newValue ? newValue.label : '')}
            value={data.position || null}
          />

          {/* Date Range */}
          <div className='flex gap-2'>
            <TextField
              type="date"  
              value={data.startDate}
              onChange={(e) => handleInputChange('startDate', e.target.value)}
              error={!!errors.dateError}
              helperText={errors.dateError}
              className='flex-1'
            />
            <TextField
              type="date"     
              value={data.endDate}
              onChange={(e) => handleInputChange('endDate', e.target.value)}
              error={!!errors.dateError}
              helperText={errors.dateError}
              className='flex-1'
              disabled={data.currentlyWorking} // Disable if currently working
            />
          </div>

          {/* Currently Working Checkbox */}
          <FormControlLabel
            control={
              <Checkbox
                checked={data.currentlyWorking}
                onChange={(e) => handleInputChange('currentlyWorking', e.target.checked)}
              />
            }
            label="Currently working"
          />
        </DialogContent>

        <div className='flex justify-center'>
          <button
          className="text-ourBlue underline cursor-pointer text-[inter] p-2 font-bold"
            onClick={handleSaveChanges}
           
          >
            Save Changes
          </button>
        </div>
      </Dialog>
    </React.Fragment>
  );
}
