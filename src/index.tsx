import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login';

const appRoutes=
<BrowserRouter>
  <Routes>
      <Route path='/' element={<Login />}/>
  </Routes>
</BrowserRouter>

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render( appRoutes);
