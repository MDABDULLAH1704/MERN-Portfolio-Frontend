import React, { useEffect } from 'react'
import './HomeAbout.css'
import { Link } from 'react-router-dom'
import RotatedArrow from '../../rotatedArrow/RotatedArrow'
import AOS from 'aos'
import 'aos/dist/aos.css'

const HomeAbout = () => {
    // For AOS Animation
    useEffect(() => {
        AOS.init({
            duration: 500,
            delay: 100
        });
    }, []);

    return (
        <div className='homeAbout'>
            <div className="homeAbout-left">
                <p>As a developer, I create simple, innovative and scalable web applications that offer great user experiences. I have strong expertise in building flexible, responsive, and high-performance web applications using modern web development technologies.</p>
            </div>

            <div className="homeAbout-right">
                <Link to='/about' className='homeAbout-right-link'>
                    <div className='homeAbout-right-one' >
                        <div data-aos='fade'>Know More</div>
                        <div data-aos='slide-left'><RotatedArrow transform='rotate(-50deg)' fontSize='20px' color='black' /></div>
                    </div>
                </Link>
                <Link to='/contact' className='homeAbout-right-link'>
                    <div className='homeAbout-right-two' >
                        <div data-aos='fade'>Contact Me</div>
                        <div data-aos='slide-left'><RotatedArrow transform='rotate(-50deg)' fontSize='20px' color='white' /></div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default HomeAbout
