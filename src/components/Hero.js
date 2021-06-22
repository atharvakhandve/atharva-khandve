import React from "react"
import "../styles/main.scss"
import image from "../images/PicsArt_06-03-11.36.35.jpg"

function Hero(){
    return(
        <div className="hero-section">
            <div className="container">
                <p>Hello, This is</p>
                <h1>Atharva Khandve</h1>
                <img src={image}/>
                <p className="small-para">I am a 21 year old Full Stack Web developer.I love to design and make new web experiences for the people</p>
                <button>See My Works</button>
            </div>
        </div>
    )
}

export default Hero