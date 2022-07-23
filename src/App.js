import "./App.css";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";
import React, { useState } from 'react'



function App() {
  const [mode, setmode] = useState('light');
  const togglemode = ()=>{
    if (mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor = 'grey';
    }else{
      setmode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return ( 
    <>
      <Navbar title="TextUtils" mode={mode} togglemode={togglemode} />
      <div className="container my-3">
        <Textform heading="Enter the text below to analyze"mode={mode} />
      </div>
    </>
  );
}

export default App;
