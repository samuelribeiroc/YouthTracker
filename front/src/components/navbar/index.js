import React from "react";
import { NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav>
            <div>
                Logo
            </div>
            <ul>
                <li><NavLink to="/api/">Home</NavLink></li>
                <li><NavLink to="/api/series">Series</NavLink></li>
                <li><NavLink to="/api/inventory">Inventory</NavLink></li>
            </ul>
            <div>
                Usuario
            </div>
        </nav>
    )
}