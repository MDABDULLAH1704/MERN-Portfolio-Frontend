import React, { useState, useEffect } from 'react'
import './AboutPage.css'
import AboutImg from '../../assets/AboutImg.png'
import TheResume from '../theResume/TheResume';

const AboutPage = () => {
    const [scrolled, setScrolled] = useState(false);

    // Code for scroll
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > window.innerHeight * 0.2) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup on component unmount
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <section className='aboutPageSection'>
                <div>
                    <img src={AboutImg} alt='Image' />
                </div>
            </section>

            <div className={`aboutPageText ${scrolled ? 'hidden' : ''}`}>
                <div className='aboutPageText-1'>
                    <p> <i>hi there, I'm</i> </p>
                </div>
                <div className="aboutPageText-2">
                    <p>Md Abdullah</p>
                </div>
            </div>

            <TheResume />
        </>
    )
}

export default AboutPage
