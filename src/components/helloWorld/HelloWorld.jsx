import React, { useEffect } from 'react'
import './HelloWorld.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

const HelloWorld = ({ padding }) => {
    // For AOS Animation
    useEffect(() => {
        AOS.init({
            duration: 500,
            delay: 100
        });
    }, []);

    return (
        <div className="helloWorld carousel-container" style={{ padding }} >
            <div className="carousel-inner" data-aos='fade'>
                <div className="carousel-item">HELLO WORLD! </div>
                <div className="carousel-item">HELLO WORLD! </div>
                <div className="carousel-item">HELLO WORLD! </div>
                <div className="carousel-item">HELLO WORLD! </div>
            </div>
        </div>
    )
}

export default HelloWorld
