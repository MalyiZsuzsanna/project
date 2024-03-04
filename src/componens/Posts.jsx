import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { readPosts } from '../crudUtility'
import { PostCards } from './PostCards'


export const Posts = ({selectedCateg}) => {
  const [posts,setPosts]=useState([])

  useEffect(()=>{
    readPosts(setPosts,selectedCateg)
  },[selectedCateg])
  console.log(posts);
  return (
    <div style={{display:'flex', flexWrap:'wrap', gap:10, justifyContent:'center'}}>
      {posts.length==0 && <div>Ebben a kategóriában nincs találat...</div>}
      {posts.map(obj=> <PostCards key={obj.id} {...obj}/>)}
      </div>
  )
}

