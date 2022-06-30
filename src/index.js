import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './components/login';
import Dashboard from './components/dashboard';
import CadastroCliente from './components/cadastroCliente';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Router>
      <Routes>
        <Route path='*' element={<Login />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/cadastroCliente' element={<CadastroCliente />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);