import React from "react";
import { NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav>
            <div>
                Logo
            </div>
            <ul>
                <li><NavLink to="/">Início</NavLink></li>
                <li><NavLink to="/series">Séries</NavLink></li>
                <li><NavLink to="/inventory">Inventário</NavLink></li>
            </ul>
            <div>
                Usuario
            </div>
        </nav>
    )
}