import React from "react"
import img from "../images/icons8-development-64.png"
import img2 from "../images/airplay.svg"
import img3 from "../images/smartphone.svg"

function Services(){
    return(
        <div className="services-section">
            <div className="container">
                <p>What I can do for you</p>
                <h1>Services</h1>
                <ul>
                    <li>
                        <img src={img} />
                        <blockquote>A.I</blockquote>
                        <p>I can create Highly accurate A.I models, chatbots and other projects.</p>
                    </li>
                    <li>
                        <img src={img2} />
                        <blockquote>Web Dev</blockquote>
                        <p>I can develop high performing websites with blazing fast speeds.</p>
                    </li>
                    <li>
                        <img src={img3} />
                        <blockquote>App Dev</blockquote>
                        <p>I can develop smooth mobile applications with eye catching UI.</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Services