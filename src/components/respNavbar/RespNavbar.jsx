import React, { useState, useEffect } from 'react'
import './RespNavbar.css'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import { FaTimes } from 'react-icons/fa'
import RespNavbarList from '../respNavbarList/RespNavbarList'
import { useLocation } from 'react-router-dom'

const RespNavbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const location = useLocation();
    const isHome = location.pathname === '/';

    // handleMenuToggle function
    const handleMenuToggle = () => {
        setShowMenu(!showMenu);
    }

    // RespNavbar Scroll logic
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > window.innerHeight) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
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
        <>
            <div className={`respNavbar ${isHome ? 'respNavbar-home' : 'respNavbar-other'} ${isScrolled ? 'navbar-scrolled' : ''}`}>
                <div className='respNavbarLeft'>
                    <Link to='/' className='respNavbarLeft-link'>Md Abdullah</Link>
                </div>

                <div
                    className={`respNavbarRight ${showMenu ? 'active' : 'faded'}`}
                    onClick={handleMenuToggle}>
                    {showMenu ? <FaTimes /> : <FaBars />}
                </div>
            </div>

            {showMenu && <RespNavbarList />}
        </>
    )
}

export default RespNavbar
