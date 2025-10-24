//import reactLogo from './assets/react.svg'
import { useState } from 'react'
import React from 'react';
import Navbar from "./components/Navbar"; 
import { Outlet } from "react-router-dom";
import './App.css'

function App(){
    return (
    <>
      <Navbar />
      {/* This is where your page content (e.g., Page1, SignUp, etc.) will appear */}
      <main>
        <Outlet />
      </main>
    </>
    )
}

export default App;