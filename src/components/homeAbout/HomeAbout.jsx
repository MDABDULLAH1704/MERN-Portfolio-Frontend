import React, { useEffect } from 'react'
import './HomeAbout.css'
import { Link } from 'react-router-dom'
import RotatedArrow from '../rotatedArrow/RotatedArrow'
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
                <p>As a passionate MERN stack developer,  I create both simple and interactive websites that offer great user experiences. With solid skills in MongoDB, Express.js, React.js, and Node.js, I use these technologies to build flexible, responsive and high-performing web applications.</p>
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
