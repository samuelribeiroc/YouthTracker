import React from "react";
import { Route, BrowserRouter, Routes } from 'react-router-dom';

import Home from "./pages/home";
import Inventory from "./pages/inventory";
import Series from "./pages/series";

export default function AppRoutes() {
    return (
            <Routes>
                <Route exact path="/" component={Home}/>
                <Route path="/inventory" component={Inventory}/>
                <Route path="/series" component={Series}/>
            </Routes>
    )
}