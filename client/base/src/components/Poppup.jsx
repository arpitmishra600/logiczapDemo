import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { useMyContext } from '../context/Context';
import handleClick from '../payments';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Poppup({plan}) {
    const {poppup,setPoppup}=useMyContext()

    

  const handleClose = () => {
    setPoppup(false);
  };

  return (
    <React.Fragment>
      <Dialog
        open={poppup}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{plan[0]}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, dolorem placeat! Ex doloremque quasi exercitationem eveniet unde in sunt vero esse illo. Exercitationem unde numquam similique praesentium aliquid quidem laboriosam quis tempora. Magnam, aliquid? Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe deserunt repellat nobis quo quod, ducimus et earum? Animi aliquid possimus totam veritatis dignissimos neque sed nostrum tempore aliquam, a cumque.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>{handleClose();handleClick(plan[1],plan[0])}}>Buy @ rs{plan[1]} </Button>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
