import React from "react"
import '../styles/main.scss'
import {NavLink} from "react-router-dom"

function Navbar(){
    return(
        <div className="navbar">
            <div className="container">
                <nav>
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/Contact-me">Contact</NavLink></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navbar