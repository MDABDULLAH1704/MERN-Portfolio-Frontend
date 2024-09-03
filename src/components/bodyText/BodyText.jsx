import React, { useState, useEffect } from 'react'
import './BodyText.css'

const BodyText = () => {
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

    // Code for animation
    useEffect(() => {
        // Trigger CSS animations when component mounts
        const element = document.querySelector('.respNavbarList');
        if (element) {
            element.classList.add('animate');
        }
    }, []);

    return (
        <div className={`bodyText ${scrolled ? 'hidden' : ''}`}>
            <div className='bodyText-1'>
                <p><i>I'm a </i> <span>MERN-STACK</span> </p>
            </div>

            <div className="bodyText-2">
                <p><span>DEVELOPER </span> <i>&</i> </p>
            </div>

            <div className="bodyText-3">
                <p>SOFTWARE</p>
            </div>

            <div className="bodyText-4">
                <p>ENGINEER</p>
            </div>
        </div>
    )
}

export default BodyText
