import React from "react";
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <>
            <div>
                <div>
                    <h1>logo</h1>
                </div>
                <nav>
                    <ul>
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/series">Series</Link></li>
                        <li><Link to="/inventory">Inventory</Link></li>
                    </ul>
                </nav>
                <div>
                    <h1>login</h1>
                </div>
            </div>
        </>
    )
}