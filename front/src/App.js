import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './components/navbar';
import Modal from "./components/modal";
import Home from "./pages/home";
import Inventory from "./pages/inventory";
import Series from "./pages/series";

import './styles/global.css';

export default function App () {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [seriesNotWatched, setSeriesNotWatched] = useState([]);

  useEffect(() => {
    setSeriesNotWatched([
      { name: "Euphoria", imageLink: "https://i.pinimg.com/originals/6b/df/dd/6bdfdd082f8fb051d56ce18c8c6725fe.jpg" },
      { name: "Skam", imageLink: "https://m.media-amazon.com/images/M/MV5BMzc5NmE5ZDItZGQxZC00ZTdhLThlYzktYjE0NWIyZDM3OGRlXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_FMjpg_UX1000_.jpg"}
    ])
  }, [])
  
  useEffect(() => {
    document.title = "YouthTracker";
  }, [])

  function openModal() {
    setIsModalOpen(true);
  }

  return (
    <>
      <Modal isModalOpen={isModalOpen}/>
      <Routes>
        <Route exact path='/' component={Home} />
        <Route path='/inventory' component={Inventory} />
        <Route path='/series' component={Series} />
      </Routes>
    </>
  )
}