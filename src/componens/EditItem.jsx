import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import { updateBudget } from '../utils';

export const EditItem=({open,setOpen,id,descr,amount})=> {
  
const [input,setInput]=useState(descr)
const [inputValue,setInputValue]=useState(amount) 
  

  const handleClose = () => {
    setOpen(false);
  };
  const handleSave=()=>{
    console.log(input,inputValue);
    
//backend fg.
updateBudget(id,input,inputValue)

    handleClose()
  }

  return (
    <React.Fragment>

      <Dialog  open={open}   onClose={handleClose} >
        <DialogTitle>Amendment</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            required
            margin="dense"
           
            multiline
            maxRows={6}
            type="text"
            fullWidth
            variant="standard"
            value={input}
            onChange={(e)=>setInput(e.target.value)}
          />
           <TextField
            autoFocus
            required
            margin="dense"
        
            multiline
            maxRows={6}
            type="number"
            fullWidth
            variant="standard"
           value={inputValue}
            onChange={(e)=>setInputValue(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}