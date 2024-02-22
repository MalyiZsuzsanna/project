import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'
import { auth } from '../firebaseApp'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


export const UserContext=createContext()


export const UserProvider = ({children}) => {
  const [user,setUser]=useState(null)
  const [msg,setMsg]=useState(null)

    const navigate=useNavigate()
    useEffect(()=>{
        onAuthStateChanged(auth,(currentUser)=>{
          setUser(currentUser)
        })
    },[])
  const signUpUser=async (email,password)=>{
        try{
            await createUserWithEmailAndPassword(auth,email,password)
            alert('sikeres regisztráció!')
            setMsg(null)
        }catch(err){
            /*console.log(err);*/
            setMsg(err.message)
        }
    };
    const signInUser=async (email,password)=>{
        try{
            await signInWithEmailAndPassword(auth,email,password)
            alert('sikeres belépő!')
            setMsg(null)
            navigate('/')
        }catch(err){
            /*console.log(err.message);*/
            setMsg(err.message)
        }
    }

    const logoutUser=async ()=>{
        await signOut(auth)
        navigate('/')
    }
  const resetPassword=async (email)=>{
    try{
        await sendPasswordResetEmail(auth,email)
        alert('jelszómódisítási link elküldve')
        navigate('singinup/in')
    }catch(err){
        console.log(err)
    }
  }
  return (
    <UserContext.Provider value={{user,signUpUser,logoutUser,signInUser,resetPassword,msg,setMsg}}>
        {children}
    </UserContext.Provider>

  )
};

