import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './components/navbar';
import Home from "./pages/home";
import Inventory from "./pages/inventory";
import Series from "./pages/series";

import './styles/global.css';

export default function App () {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/inventory" element={<Inventory />} />
          <Route exact path="/series" element={<Series />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}