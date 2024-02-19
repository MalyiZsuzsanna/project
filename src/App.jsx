import './App.css'
import React,{ useEffect } from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import {Home} from './pages/Home'
import { Calculator } from './pages/Calculator'
import { PwReset } from './pages/PwReset'
import { NotFound } from './pages/NotFound'
import Profile from './pages/Profile'
import { NavBar } from './componens/NavBar'
import { Note } from './pages/Note'
import { Budget } from './pages/Budget'
import { SignInUp } from './pages/SignInUp'
import { AddEditPost } from './pages/AddEditPost'
import {Details} from './pages/Details'
import { UserProvider } from './context/UserContext'

function App() {
  
  
  return (
    <BrowserRouter>
    <UserProvider>
      <div>
        <NavBar/>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="calculator" element={<Calculator />}/>
            <Route path="pwreset" element={<PwReset />}/>
            <Route path="*" element={<NotFound />}/>
            <Route path="profile" element={<Profile />}/>
            <Route path="note" element={<Note />}/>
            <Route path="budget" element={<Budget />}/>
            <Route path="signInUp/:type" element={<SignInUp />}/>
            <Route path="create" element={<AddEditPost />}/>
            <Route path="details/:id" element={<Details/>}/>
        </Routes>
      </div>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App
