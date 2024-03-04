import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { NotFound } from './NotFound'
import { Box, TextField, useStepperContext } from '@mui/material'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { CategContext } from '../context/CategContext';
import { useState } from 'react'
import { TextEditor } from '../componens/TextEditor'
import { FileInput } from '../componens/FileInput'
import Button from '@mui/material/Button';
import { uploadFile } from '../uploadFile'
import { addPost } from '../crudUtility'
import { Loader } from '../componens/Loader'
import { Alerts } from '../componens/Alerts'

export const AddPost = () => {
  const{user}=useContext(UserContext)
  const {categories}=useContext(CategContext)

  const [categ,setCateg]=useState(0)
  const [title,setTitle]=useState('')
  const [story,setStory]=useState('')
  const [image,setImage]=useState(null)

  const [uploaded,setUploaded]  = useState(false);
  const [loading,setLoading]  = useState(false);


  if(!user) return <NotFound/>
 console.log(categ,title)

 const handleSubmit=async (event)=>{
  event.preventDefault()
  setLoading(true)

  try{
    const photoUrl=await uploadFile(image)
    await addPost({
      title,
      category:categ,
      photoUrl,
      author:user.displayName,
      userId:user.uid,
      description:story,
      likes:[],
      likesCount:0,

    })
    setUploaded(true)

  }catch(err){
    console.log(err)
  }finally{
    setLoading(false)
  }
 }
  return (
    <div style={{maxWidth:'800px', margin:'auto'}}>
      <h3>Create post</h3>

      <Box
          component="form"  onSubmit={handleSubmit} sx={{  '& > :not(style)': { m: 1, width:'100%' },
          }}
          noValidate
          autoComplete="off"
        >
          <div style={{display:'flex', flex:'wrap', gap:3,width:'50%'}}>
          <TextField id="outlined-basic" label="Post Title" autoFocus variant="outlined"
            value={title}
            onChange={(event)=>setTitle(event.target.value)}
          />
          <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={categ}
          label="Category"
          onChange={(event)=>setCateg(event.target.value)}
        >
          <MenuItem value={0}>answer a category...</MenuItem>

          {categories && categories.map(obj=>
           <MenuItem key={obj.name} value={obj.name}>{obj.name}</MenuItem> 
           )}
          
          
        </Select>
      </FormControl>
      </div>
      <FormControl sx={{display:'flex', width:'100%'}}>
        <TextEditor story={story} setStory={setStory}/>
      </FormControl>

            <FileInput setImage={setImage}/>
            <Button type="submit" variant="contained"
            disabled={title.length==0 || categ==0 || story.length==0 || !image}
            >save
            
            </Button>
      </Box>
      {loading && <Loader/>}
      {uploaded && <Alerts msg="Sikeres mentés!" severity="success"/>}
    </div>
  )
}

