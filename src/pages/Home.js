import React from "react"
import '../styles/main.scss'
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import About from "../components/About"
import Services from "../components/Services"
import Carousel from "../components/Carousel"
import HelpCard from "../components/HelpCard"
import Footer from "../components/Footer"

function Home(){
    return(
        <div>
            <Navbar />
            <Hero />
            <About />
            <Services />
            <Carousel />
            <HelpCard />
            <Footer />
        </div>
    )
}

export default Home