import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Dashboard from './components/dashboard';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Course from './components/course';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Dashboard />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/courses' element={<Course />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
