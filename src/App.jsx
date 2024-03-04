import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import React,{ useEffect } from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import {Home} from './pages/Home'
import { Calculator } from './pages/Calculator'
import { PwReset } from './pages/PwReset'
import { NotFound } from './pages/NotFound'
import Profile from './pages/Profile'
import { NavBar } from './componens/NavBar'
import { Budget } from './pages/Budget'
import { SignInUp } from './pages/SignInUp'
import {Details} from './pages/Details'
import { UserProvider } from './context/UserContext'
import { CategProvider } from './context/CategContext'
import { EditPost } from './pages/EditPost'
import { AddPost } from './pages/AddPost'
import { HashRouter } from 'react-router-dom'



function App() {
  
  
  return (
    <HashRouter>
    <UserProvider>
      <CategProvider>
      <div>
        <NavBar/>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="calculator" element={<Calculator />}/>
            <Route path="pwreset" element={<PwReset />}/>
            <Route path="*" element={<NotFound />}/>
            <Route path="profile" element={<Profile />}/>
            <Route path="budget" element={<Budget />}/>
            <Route path="signInUp/:type" element={<SignInUp />}/>
            <Route path="create" element={<AddPost />}/>
            <Route path="details/:id" element={<Details/>}/>
            <Route path="update/:id" element={<EditPost/>}/>
            
        </Routes>
      </div>
        </CategProvider>
      </UserProvider>
    </HashRouter>
  );
}

export default App
