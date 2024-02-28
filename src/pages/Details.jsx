import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { readPost } from '../crudUtility'
import parse from 'html-react-parser';
export const Details = () => {
  const [post,setPost]=useState(null)
  const param=useParams()
  console.log(param.id);

useEffect(()=>{
  readPost(param.id,setPost)
},[])

  return (
    <div className='container'> 
    <div style={{display:"flex", justifyContent:"center"}}>
      {post && <img src={post?.photoUrl} alt={post?.title} className='postImg' />}
    </div>
      <div sx={{display:'flex', flexWrap:'wrap', padding:'1rem', justifyContent:'center'}}>
        {post && parse(post.description)}
      </div>

    </div>
  )
}
