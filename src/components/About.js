import React from "react"
import "../styles/main.scss"
import image2 from "../images/PicsArt_06-04-12.45.23.jpg"
import image3 from "../images/PicsArt_06-03-11.42.22.jpg"

function About(){
    return(
        <div className="about-section">
            <div className="container">
                <div className="left-col">
                    <p>Let me introduce myself</p>
                    <div className="hero-img"><img src = {image2}/></div>
                    <img src={image3}/>
                    <h1>About Me</h1>
                    <p className="para">I am a final year Computer Engineering Student from Pune, Maharashtra.I am a Full Stack Web Developer.I have a passion for what I do and
                        always try to kepp improving myself at it.
                    </p>
                    <button>Read More</button>
                </div>
            </div>
        </div>
    )
}

export default About