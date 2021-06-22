import React from "react"

function Footer(){
    return(
        <div className="Footer-section">
            <div className="container">
                <div className="left">
                    <h3>Atharva Khandve</h3>
                    <p>A Fullstack Web Developer from Maharashtra, India. I try to make wbsites with unique design and good performance
                        rates.
                    </p>
                </div>
                <div className="mid">
                    <ul>
                        <li className="head">Contact Info</li>
                        <li><br></br></li>
                        <li>+91 9822955271</li>
                        <li>khandveatharva@gmail.com</li>
                        <li>Plot 16/b, Koregaon Park, Pune, Maharashtra</li>
                    </ul>
                </div>
                <div className="right">
                    <ul>
                        <li className="head">Social Links</li>
                        <li><br></br></li>
                        <li><a href="https://www.facebook.com/">Facebook</a></li>
                        <li><a href="https://www.instagram.com/">Instagram</a></li>
                        <li><a href="https://twitter.com/">Twitter</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer