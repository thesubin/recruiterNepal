import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Components/Login/Login';
import { Routes, Route, Link } from "react-router-dom";
import SignUp from './Components/SignUp/SignUp';
import Landing from './Components/Landing/Landing';

function App() {
  return (
    <div className='mainContainer font-poppins'> 
         <Routes>
     
            <Route path="/" element={<Landing />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/welcome" element={<SignUp />} />
        
    </Routes>
    </div>
  );
}

export default App;
