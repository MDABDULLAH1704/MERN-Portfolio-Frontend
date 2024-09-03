import React, { useEffect } from 'react'
import './RespNavbarList.css'
import { Link } from 'react-router-dom'
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

const RespNavbarList = () => {
    // Code for animation
    useEffect(() => {
        // Trigger CSS animations when component mounts
        const element = document.querySelector('.respNavbarList');
        if (element) {
            element.classList.add('animate');
        }
    }, []);

    return (
        <div className='respNavbarList'>
            <Link to='/' className='navbarRight-link'><p>HOME</p></Link>
            <Link to='/projects' className='navbarRight-link'><p>PROJECTS</p></Link>
            <Link to='/services' className='navbarRight-link'><p>SERVICES</p></Link>
            <Link to='/about' className='navbarRight-link'><p>ABOUT</p></Link>
            <Link to='/contact' className='navbarRight-link'><p>CONTACT</p></Link>
        </div>
    )
}

export default RespNavbarList
