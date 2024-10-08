import React, { useState, useEffect } from 'react';
import './AboutPage.css';
import AboutImg from '../../assets/aboutImg.png';
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

    // preventRightClick function
    const preventRightClick = (e) => {
        e.preventDefault();
    };

    return (
        <>
            <section className='aboutPageSection'>
                <div style={{ position: 'relative' }}>
                    <img
                        src={AboutImg}
                        alt='Image'
                        onContextMenu={preventRightClick} // Prevent right-click
                        style={{ display: 'block' }}
                    />
                    <div
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            backgroundColor: 'rgba(255, 255, 255, 0)', // Transparent overlay
                        }}
                    />
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
