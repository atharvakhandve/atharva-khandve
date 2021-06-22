import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import phoneimg from "../images/phone.svg"
import mailimg from "../images/mail.svg"
import locimg from "../images/map-marker-2.svg"

function Contact(){
    return(
        <div className="contact-section">
            <div className="container">
                <Navbar />
                <div className="contact-head">
                    <p>Get in Touch</p>
                    <h1>CONTACT</h1>
                    <div className="contact-form">
                        <div className="contact-left">
                            <div>
                                <img src={phoneimg} />
                                <br></br>
                                <img src={mailimg} />
                                <img src={locimg} />
                            </div>
                            <div>
                                <p>+91 9822955271</p>
                                <p>khandveatharva@gmail.com</p>
                                <p className="lst">Pune, Maharashtra</p>
                            </div>
                        </div>
                        <div className="contact-right">
                            <form>
                                <label>Your Name</label>
                                <input></input>
                                <label>Your Email</label>
                                <input></input>
                                <label>Your Message</label>
                                <textarea></textarea>
                                <input type="submit" class="send-message-cta" value="Send message"/>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15131.334293060447!2d73.88871460425521!3d18.536421432116075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c04e382a1275%3A0x1ec8ee3be12dcff2!2sKoregaon%20Park%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1623163127389!5m2!1sen!2sin"></iframe>
                </div>
                <div className="card">
                    <h2>Here is me!</h2>
                    <p>Plot No.16/b, Koregaon Park, Pune</p>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Contact