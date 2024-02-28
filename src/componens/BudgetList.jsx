import * as React from 'react';

import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

import { toggleDone } from '../utils';

export const BudgetList=({id,timestamp,amount,descr,done})=> {
 
    const handleToggle=()=>{
        console.log(done)
        toggleDone(id,done)
    }
        return (
          <ListItem
          sx={{flexWrap:'wrap', justifyContent:'center'}}
       
            secondaryAction={
              <IconButton edge="end" aria-label="comments">
                <DeleteIcon sx={{color:'red'}}/>
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton role={undefined} onClick={()=>handleToggle(id,!done)} dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={done}
                  tabIndex={-1}
                  disableRipple
                 
                />
              </ListItemIcon>
              <ListItemText primary={descr} />
            <div>{amount}</div>
            </ListItemButton>
          </ListItem>
        );
      }
    
 