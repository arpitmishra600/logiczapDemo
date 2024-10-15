import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { styled } from '@mui/material/styles';
import { Autocomplete, Box, Checkbox, FormControlLabel, Radio, TextField } from '@mui/material';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
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

export default function EducationDialogBox() {
  const [open, setOpen] = React.useState(true);
  const [selectedImage, setSelectedImage] = React.useState(null);
  const [startDate, setStartDate] = React.useState(new Date());
  const {edudialog,setEdudialog}=useMyContext()
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl); // Save the image URL to display
    }
  };
  const handleClickOpen = () => {
    edudialog(true);
  };

  const handleClose = () => {
    setEdudialog(false);
  };

  return (
    <React.Fragment>
     
      <Dialog
      
        open={edudialog}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <StyledDialogTitle>{"Add Edcation"}</StyledDialogTitle>
        <DialogContent className='py-3 flex flex-col gap-2'>
        <TextField id="name" sx={{mt:2}} label="Institute Name" variant="outlined" size='small'/>
        <Autocomplete

  options={[{label:"1"},{label:"1"},{label:"1"},{label:"1"}]}
  size='small'
  renderInput={(params) => <TextField {...params} label="Field of Study" />}
/>

<div className='flex border w-[80%]'>
      <input type="date" value="2017-01-01" min="2005-01-01" max="2019-01-01" className='flex-1'></input>
      <input type="date" value="2017-01-01" min="2005-01-01" max="2019-01-01" className='flex-1'></input>
      </div>
      <FormControlLabel
      control={
        <Checkbox
          // checked={checked}
          // onChange={handleChange}
          inputProps={{ 'aria-label': 'controlled' }}
        />
      }
      label="Currently working"
    />
        </DialogContent>
        
      
        <div className='flex justify-center'><button className="text-ourBlue underline cursor-pointer text-[inter] p-2 font-bold" onClick={{}}>save changes</button></div>

        
      </Dialog>
    </React.Fragment>
  );
}
