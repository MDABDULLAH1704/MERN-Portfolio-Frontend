import React, { useState, useEffect } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import { FaTimes } from 'react-icons/fa'
import Menu from '../menu/Menu'

const Navbar = () => {
    const location = useLocation();
    const isHome = location.pathname === '/';
    const [isScrolled, setIsScrolled] = useState(false);
    const [showMenu, setShowMenu] = useState(false);


    // Navbar Scroll logic
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > window.innerHeight * 0.6) {
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

    // HandleShowMenu function
    const HandleShowMenu = () => {
        setShowMenu(!showMenu);
    }

    return (
        <>
            <div className={`navbar ${isHome ? 'navbar-home' : 'navbar-other'} ${isScrolled ? 'navbar-scrolled' : ''}`} >
                <div className='navbarLeft'>
                    <Link to='/' className='navbarLeft-link'>Md Abdullah</Link>
                </div>

                <div className='navbarRight'>
                    <Link to='/experience' className='navbarRight-link'><p>Experiences</p></Link>
                    <Link to='/projects' className='navbarRight-link'><p>Projects</p></Link>
                    <Link to='/services' className='navbarRight-link'><p>Services</p></Link>
                    <Link to='/about' className='navbarRight-link'><p>About</p></Link>
                    <Link to='/contact' className='navbarRight-link'><p>Contact</p></Link>
                </div>

                <div className={`menu ${showMenu && 'active'}`} onClick={HandleShowMenu}>
                    {showMenu ? <FaTimes /> : <FaBars />}
                </div>
            </div >

            {showMenu && <Menu />}
        </>
    )
}

export default Navbar
