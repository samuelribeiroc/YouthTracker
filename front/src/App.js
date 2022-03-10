import React, { useState, useEffect } from "react";
import Navbar from './components/navbar';
import AppRoutes from "./routes";
import './styles/global.css';

export default function App () {
  useEffect(() => {
    document.title = "YouthTracker";
  }, [])

  return (
    <>
      <Navbar />
      <AppRoutes />
    </>
  )
}