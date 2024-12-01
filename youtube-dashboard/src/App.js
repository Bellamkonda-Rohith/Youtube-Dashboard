import logo from './logo.svg';
import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Chanel_Dashoard from './Components/Chanel_Dashoard/Chanel_Dashoard';
import Signup from './Components/Signup/Signup';
import Main_Dashboard from './Components/Main_Dashboard/Main_Dashboard';

function App() {
  return (
    <Router>

      <Routes>
        <Route path='/' element={< Signup />} />
        <Route path='/Main_Dashboard/*' element={<Main_Dashboard />} />
      </Routes>
    </Router>



  );
}

export default App;
