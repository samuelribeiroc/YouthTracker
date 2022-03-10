import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import Inventory from './pages/inventory';
import Series from './pages/series';

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/inventory" element={<Inventory />} />
                <Route path="/series" element={<Series />} />
            </Routes>
        </BrowserRouter>
    )
}