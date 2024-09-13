
import React,{createContext,useState, useEffect} from 'react';
import './App.css';
import { NavLink, Routes ,Route} from "react-router-dom";
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Contact from'./Contact'
import Login  from './Login';

import Nav from './Nav'
function App(){
    return(
       <>
       
       <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path='/Home' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Nav' element={<Nav/>}/>
       </Routes>

       </>
    )
}


export default App;

