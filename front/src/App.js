import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './components/navbar';
import Modal from "./components/modal";
import Home from "./pages/home";
import Inventory from "./pages/inventory";
import Series from "./pages/series";

import './styles/global.css';

export default function App () {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [seriesNotWatched, setSeriesNotWatched] = useState([]);

  useEffect(() => {
    setSeriesNotWatched([
      { name: "Euphoria", imageLink: "https://i.pinimg.com/originals/6b/df/dd/6bdfdd082f8fb051d56ce18c8c6725fe.jpg" },
      { name: "Skam", imageLink: "https://m.media-amazon.com/images/M/MV5BMzc5NmE5ZDItZGQxZC00ZTdhLThlYzktYjE0NWIyZDM3OGRlXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_FMjpg_UX1000_.jpg"}
    ])
  }, [])

  function openModal() {
    setIsModalOpen(true);
  }

  return (
    <>
      <BrowserRouter>
        <Modal isModalOpen={isModalOpen}/>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/inventory" element={<Inventory />} />
          <Route exact path="/series" element={<Series />} />
        </Routes>
        <Home />
      </BrowserRouter>
    </>
  )
}