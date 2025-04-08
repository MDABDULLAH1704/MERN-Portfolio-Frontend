import React, { useEffect } from 'react'
import './Menu.css'
import { Link } from 'react-router-dom'

const Menu = () => {
    // Code for animation
    useEffect(() => {
        // Trigger CSS animations when component mounts
        const element = document.querySelector('.menuList');
        if (element) {
            element.classList.add('animate');
        }
    }, []);

    return (
        <div className='menuList'>
            <Link to='/' className='menu-link'><p>HOME</p></Link>
            <Link to='/experience' className='menu-link'><p>EXPERIENCES</p></Link>
            <Link to='/projects' className='menu-link'><p>PROJECTS</p></Link>
            <Link to='/services' className='menu-link'><p>SERVICES</p></Link>
            <Link to='/about' className='menu-link'><p>ABOUT</p></Link>
            <Link to='/contact' className='menu-link'><p>CONTACT</p></Link>
        </div>
    )
}

export default Menu
