import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
    const location = useLocation();
    const isHome = location.pathname === '/';
    const [isScrolled, setIsScrolled] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > window.innerHeight * 0.6) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (showMenu) {
            const element = document.querySelector('.menuList');
            if (element) {
                element.classList.add('animate');
            }
        }
    }, [showMenu]);

    const handleShowMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <>
            <div className={`navbar ${isHome ? 'navbar-home' : 'navbar-other'} ${isScrolled ? 'navbar-scrolled' : ''}`}>
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

                <div className={`menu ${showMenu ? 'active' : ''}`} onClick={handleShowMenu}>
                    {showMenu ? <FaTimes /> : <FaBars />}
                </div>
            </div>

            {showMenu && (
                <div className='menuList'>
                    <Link to='/' className='menu-link'><p onClick={handleShowMenu}>HOME</p></Link>
                    <Link to='/experience' className='menu-link'><p onClick={handleShowMenu}>EXPERIENCES</p></Link>
                    <Link to='/projects' className='menu-link'><p onClick={handleShowMenu}>PROJECTS</p></Link>
                    <Link to='/services' className='menu-link'><p onClick={handleShowMenu}>SERVICES</p></Link>
                    <Link to='/about' className='menu-link'><p onClick={handleShowMenu}>ABOUT</p></Link>
                    <Link to='/contact' className='menu-link'><p onClick={handleShowMenu}>CONTACT</p></Link>
                </div>
            )}
        </>
    );
};

export default Navbar;
