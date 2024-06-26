import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Dashboard from './components/dashboard';
import SignIn from './components/auth/SignIn';
import Course from './components/course';
import SignUp from './components/auth/SignUp';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Dashboard />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/courses' element={<Course />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
