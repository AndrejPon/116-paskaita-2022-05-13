import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Home from './pages/Home';

import Login from './pages/Login';
import Register from './pages/Register';

const links = [
  { title: 'Login', link: '/login' },
  { title: 'Register', link: '/register' },
];

const Router = () => {
  return (
    <BrowserRouter>
      <Navigation links={links} />
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
