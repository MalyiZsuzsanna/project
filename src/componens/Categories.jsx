import React from 'react'
import { useContext } from 'react';
import { CategContext } from '../context/CategContext';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import { SingleChips } from './SingleChip';

export const Categories = ({selectedCateg,setSelectedCateg}) => {
    const {categories}=useContext(CategContext)
    console.log(categories);

  return (
   
        <Stack direction="row" spacing={1}>
            <Typography>
                Categories
            </Typography>
            {categories && categories.map(obj=>
                <SingleChips key={obj.name} name={obj.name}
                    selectedCateg={selectedCateg}
                    setSelectedCateg={setSelectedCateg}
                />)}
        </Stack>
  
  )
}
