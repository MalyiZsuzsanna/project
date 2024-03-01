import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { editLikes, readPost } from '../crudUtility'
import parse from 'html-react-parser';
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit';

export const Details = () => {
  const {user}=useContext(UserContext)
  const [post,setPost]=useState(null)
  const [likes,setLikes]=useState(null)
  const param=useParams()
  console.log(param.id);
  const navigate=useNavigate()


useEffect(()=>{
  readPost(param.id,setPost,setLikes)
},[])

const handleLikes=async ()=>{
  if(user){
    const likesCount=await editLikes(param.id,user.uid)
    setLikes(likesCount)
  }else 
  console.log('nem vagy bejelentkezve')
}
  return (
    <div className='container'> 
    <div style={{display:"flex", justifyContent:"center"}}>
      {post && <img src={post?.photoUrl} alt={post?.title} className='postImg' />}
    </div>
      <div style={{display:'flex', flexWrap:'wrap', padding:'1rem', justifyContent:'center'}}>
        {post && parse(post.description)}
      </div>
    
    {user && <div className='d-flex justify-content-between'>
        <span><ThumbUpOffAltIcon sx={{color:'yellow'}} onClick={handleLikes}/>{likes}</span>
        <span>
          <DeleteIcon sx={{color:'red'}}/>
        <EditIcon/></span>
       </div>}
    <div className='d-flex justify-content -center'>
    <button className="btn btn-primary" onClick={()=>navigate('/')}>Back...</button>

    </div>
    </div>
  )
}
