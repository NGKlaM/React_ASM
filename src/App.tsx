import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Home from './layouts/Home';
import Product from './layouts/Product';
import Client from './layouts/client';
import Details from './layouts/Details';


function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path='/' Component={Client}>
      <Route path='' Component={Home}/>
      <Route path='details/:id' Component={Details}/>
      <Route path='product' Component={Product}/>
    </Route>
  </Routes>
  </BrowserRouter>
  );
}

export default App;
