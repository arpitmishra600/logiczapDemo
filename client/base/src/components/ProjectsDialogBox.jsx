import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { styled } from '@mui/material/styles';
import { Box, TextField } from '@mui/material';
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

export default function ProjectsDialogBox() {
  const [open, setOpen] = React.useState(true);
  const [selectedImage, setSelectedImage] = React.useState(null);
  const {proDialog,setProDialog}=useMyContext()
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl); // Save the image URL to display
    }
  };


  const handleClose = () => {
    setProDialog(false);
  };

  return (
    <React.Fragment>
     
      <Dialog
        open={proDialog}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <StyledDialogTitle>{"Add Projects"}</StyledDialogTitle>
        <DialogContent className='py-3 flex flex-col gap-2'>
        <TextField id="name" sx={{mt:2}} label="Project Name" variant="outlined" size='small'/>
        <textarea id='about' rows={8} className="text-xs font-[inter] p-2 outline-none bg-[#F4F2EE] border-[1px] px-3 border-[#C4C4C4] rounded-md" placeholder="Description"></textarea>
        
        </DialogContent>
        
        <Box display="flex" flexDirection="column" alignItems="center" className="w-[100%]" justifyContent="center" gap={2}>
      {/* Upload button */}
      <Button
        variant="contained"
        component="label"
        color="primary"
        autoCapitalize="none"
        size='small'
      >
        Upload Image
        {/* Hidden input field to trigger file selection */}
        <input
          type="file"
          accept="image/*"
          hidden
          onChange={handleImageChange}
        />
      </Button>
      {/* Display uploaded image */}
      {selectedImage && (
        <Box>
          <img
            src={selectedImage}
            alt="Uploaded Preview"
            style={{ width: '200px', height: 'auto', borderRadius: '8px' }}
          />
        </Box>
      )}
    </Box>
    <div className='flex justify-center'><button className="text-ourBlue underline cursor-pointer text-[inter] p-2 font-bold" onClick={{}}>save changes</button></div>
        
      </Dialog>
    </React.Fragment>
  );
}
