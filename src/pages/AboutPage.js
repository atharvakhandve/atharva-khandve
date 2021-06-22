import React from "react"
import Navbar from "../components/Navbar"
import image from "../images/PicsArt_06-03-11.40.19.jpg"
import HelpCard from "../components/HelpCard"
import Footer from "../components/Footer"

function AboutPage(){
    return(
        <div>
            <Navbar />
            <div className="aboutpage">
                <div className="container">
                    <div>
                        <p>Hi, I am <span>Atharva Khandve</span></p>
                        <h2>A Full Stack Web Developer</h2>
                        <p>I am a web developer from Pune, Maharashtra. A place of beauty and tradition. I am a perfectionist and try to axcel at 
                        whatever I do. I love to create things that are useful to others.<br></br> I started coding since high school. Coding 
                        is also an art for me. I find it really interesting and I enjoyed the process a lot.<br></br> I am also a quick learner 
                        and can learn newer technologies realatively fast. I am also Quite adaptible to change as I believe it is the very soul
                        of not only technologies but also the world around us.
                        </p>
                    </div>
                    <div>
                        <img src={image} />
                    </div>
                </div>
                <div className="education">
                    <h1>Education</h1>
                    <div className="label">
                        <div className="tags">
                            <p>School</p>
                            <p>Jr. College</p>
                            <p>University</p>
                        </div>
                        <div className="value">
                            <p className="items">The Bishop's School Kalyaninagar</p>
                            <p className="items">Nowrosjee Wadia College, Pune</p>
                            <p className="items">Savitribai Phule Pune University</p>
                        </div>
                    </div>  
                    <h1 className="second">My Skills</h1>
                    <div className="label">
                        <div className="tags">
                            <p>Frontend</p>
                            <p>Backend</p>
                            <p>Other Languages</p>
                        </div>
                        <div className="value">
                            <p className="items"><ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>SASS</li>
                                <li>ReactJs</li>
                                </ul></p>
                            <p className="items"><ul>
                                <li>NodeJs</li>
                                <li>ExpressJs</li>
                                <li>Django</li>
                                </ul></p>
                            <p className="items"><ul>
                                <li>Python</li>
                                <li>JavaScript</li>
                                <li>C/C++</li>
                                </ul></p>
                        </div>
                    </div>                      
                </div>
            </div>
            <HelpCard />
            <Footer />
        </div>
    )
}

export default AboutPage