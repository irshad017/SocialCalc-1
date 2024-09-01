import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Spreadsheet from './components/Spreadsheet';
import UserRegistration from './components/Auth/Register';
import Login from './components/Auth/Login';
import Dashboard from './components/Dashboard/Dashboard';
import Home from './components/Common/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/spreadsheet/:id" element={<Spreadsheet />} />
        <Route path="/" element={<Home1 />} />
        <Route path="/register" element={<UserRegistration />} />
        <Route path="/login" element={<Login />} /> 
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

function Home1() {
  return (
    <div>
      <Home/>
    </div>
  );
}

export default App;
