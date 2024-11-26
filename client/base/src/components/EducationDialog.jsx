import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { styled } from '@mui/material/styles';
import { Autocomplete, TextField } from '@mui/material';
import dayjs from 'dayjs';
import { useMyContext } from '../context/Context';
import { educationOptions } from '../helpers/education';
import { useState } from 'react';

const StyledDialogContentText = styled(DialogContentText)({
  fontFamily: 'Inter, sans-serif',
});

const StyledDialogTitle = styled(DialogTitle)({
  fontFamily: 'Inter, sans-serif',
});

const StyledDialogActions = styled(DialogActions)({
  fontFamily: 'Inter, sans-serif',
});

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

var initialData = {
  instituteName: '',
  fieldOfStudy: '',
  branch: '',
  startDate: dayjs().format('YYYY-MM-DD'),
  endDate: dayjs().format('YYYY-MM-DD'),
};

export default function EducationDialogBox() {
  const { edudialog, setEdudialog, setFormData, formData } = useMyContext();
  const [data, setData] = useState(initialData);

  const [errors, setErrors] = useState({
    instituteName: '',
    fieldOfStudy: '',
    branch: '',
    dateError: '',
  });

  const handleClose = () => {
    setEdudialog(false);
  };

  const validateForm = () => {
    let formIsValid = true;
    let newErrors = {
      instituteName: '',
      fieldOfStudy: '',
      branch: '',
      dateError: '',
    };

    if (!data.instituteName.trim()) {
      newErrors.instituteName = 'Institute name cannot be empty';
      formIsValid = false;
    }

    if (!data.fieldOfStudy.trim()) {
      newErrors.fieldOfStudy = 'Please select an education level';
      formIsValid = false;
    }

    if (!data.branch.trim()) {
      newErrors.branch = 'Please select a branch';
      formIsValid = false;
    }

    if (dayjs(data.startDate).isAfter(dayjs(data.endDate))) {
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
        education: [...(prevFormData.education || []), data],
      }));
      console.log(formData);
      setData(initialData);
      handleClose();
    }
  };

  // Get the branches based on the selected field of study
  const selectedFieldOfStudy = educationOptions.find(
    (option) => option.value === data.fieldOfStudy
  );
  const branches = selectedFieldOfStudy ? selectedFieldOfStudy.branches : [];

  return (
    <React.Fragment>
      <Dialog
        open={edudialog}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <StyledDialogTitle>{'Add Education'}</StyledDialogTitle>
        <DialogContent className="py-3 flex flex-col gap-3">
          <TextField
            id="name"
            sx={{ mt: 2 }}
            label="Institute Name"
            variant="outlined"
            size="small"
            value={data.instituteName}
            onChange={(e) =>
              setData({ ...data, instituteName: e.target.value })
            }
            error={!!errors.instituteName}
            helperText={errors.instituteName}
          />

          {/* Field of Study */}
          <Autocomplete
            size="small"
            options={educationOptions}
            groupBy={(option) => option.group}
            getOptionLabel={(option) => option.label}
            onChange={(event, newValue) =>
              setData({
                ...data,
                fieldOfStudy: newValue ? newValue.value : '',
                branch: '', // Reset branch when field of study changes
              })
            }
            renderInput={(params) => (
              <TextField
                {...params}
                label="Select Education Level"
                variant="outlined"
                error={!!errors.fieldOfStudy}
                helperText={errors.fieldOfStudy}
              />
            )}
            value={
              educationOptions.find(
                (option) => option.value === data.fieldOfStudy
              ) || null
            }
          />

          {/* Branch Autocomplete */}
          <Autocomplete
            size="small"
            options={branches}
            getOptionLabel={(option) => option}
            onChange={(event, newValue) =>
              setData({ ...data, branch: newValue || '' })
            }
            renderInput={(params) => (
              <TextField
                {...params}
                label="Select Stream"
                variant="outlined"
                error={!!errors.branch}
                helperText={errors.branch}
              />
            )}
            value={data.branch || null}
            disabled={!data.fieldOfStudy} // Disable if no field of study is selected
          />

          <div className="flex gap-2">
            <TextField
              className="flex-1"
              type="date"
              value={data.startDate}
              onChange={(e) =>
                setData({ ...data, startDate: e.target.value })
              }
              error={!!errors.dateError}
              helperText={errors.dateError}
              fullWidth
            />
            <TextField
              className="flex-1"
              type="date"
              value={data.endDate}
              onChange={(e) => setData({ ...data, endDate: e.target.value })}
              error={!!errors.dateError}
              helperText={errors.dateError}
              fullWidth
            />
          </div>
        </DialogContent>

        <div className="flex justify-center">
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
