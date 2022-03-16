import React from "react";
import { NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
            <div>
                <div>
                    <h1>logo</h1>
                </div>
                <nav>
                    <ul>
                        <li><a href="/api/home">Home</a></li>
                        <li><a href="/api/series">Series</a></li>
                        <li><a href="/api/inventory">Inventory</a></li>
                    </ul>
                </nav>
                <div>
                    <h1>login</h1>
                </div>
            </div>
    )
}