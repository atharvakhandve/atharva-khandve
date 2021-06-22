import React from "react"
import {Swiper, SwiperSlide} from "swiper/react"
import SwiperCore, {Navigation} from 'swiper'
import "swiper/swiper.scss"
import "../styles/main.scss"
import 'swiper/components/navigation/navigation.scss';
import projects from "../data/projects"
SwiperCore.use([Navigation])

function Carousel(){
    return(
        <div className="projects-section">
        <p>Some of my recent works</p>
        <h1>PROJECTS</h1>
        <Swiper
        spaceBetween={20}
        slidesPerView={3}
        navigation
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}>
        {projects.map(project => (
            <div className="slider">
            <SwiperSlide key={project.id}>
                <div>
                    <div className="slider">
                        <img src={project.img} className="project-image" />
                        <div className="desc">
                            <h5>{project.name}</h5>
                            <p>{project.desc}</p>
                        </div>
                    </div>

                </div>
            </SwiperSlide>
            </div>
        ))}
        </Swiper>
        </div>
    )
}

export default Carousel