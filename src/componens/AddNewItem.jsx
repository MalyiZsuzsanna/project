import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import AddBoxIcon from '@mui/icons-material/AddBox';
import { addNewBudget } from '../utils';
import { useState } from 'react';

export const AddNewItem=()=> {
    const [newItem,setNewItem]=useState('')
    const [newAmount,setNewAmount]=useState(0)
    
    console.log(newItem);
    const handleAdd=()=>{
      addNewBudget(newItem,newAmount)
        setNewItem('')
        setNewAmount(0)
    }
  return (
    <div className='addNewItem'>
    <Box
      component="form"
      sx={{'& > :not(style)': { m: 1, width: '15ch', }, }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic"
       label="Add new item"
         variant="outlined" 
         value={newItem}
         onChange={(event)=>setNewItem(event.target.value)}/>
      
      <TextField id="outlined-basic"
       label="Add new amount"
         variant="outlined" 
         value={newAmount}
         onChange={(event)=>setNewAmount(event.target.value)}/>
      
    </Box>
    <AddBoxIcon sx={{color:'green', cursor:'pointer', fontSize:'2rem'}}
        onClick={handleAdd}
    
    />;
    </div>
  );
}