import React, { useEffect } from 'react'
import './TheResume.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Resume from '../../../assets/Resume.pdf'

const TheResume = () => {
    // For AOS Animation
    useEffect(() => {
        AOS.init({
            duration: 500,
            delay: 100
        });
    }, []);

    // openResume function to handle downloading the resume
    const openResume = () => {
        const link = document.createElement('a');
        link.href = Resume;
        link.download = 'Resume.pdf';
        link.click();
    };

    return (
        <div className='theResume'>
            <p className='theResume-title'> <i> the Resume </i> </p>

            <p className='theResume-detailOne' data-aos='fade'>
                As a passionate developer, I build all kinds of websites to meet different needs. Whether you need a simple or fast-loading website to showcase your business. I use React.js to create interactive and responsive designs that work perfectly on smartphones, tablets, and desktops. For a touch of extra flair, I add animations to make your site engaging and enjoyable to use. I deliver websites that are not only visually stunning but also powerful and easy to navigate. My goal is to build sites that look great, work flawlessly, and help you stand out online.
            </p>

            <p className='theResume-detailTwo'>Check out my portfolio to see how I can bring your ideas to life online.
            </p>

            <p className='theResume-detailThree' onClick={openResume} style={{ cursor: 'pointer', color: 'white' }}>
                <b>Download Resume</b>
            </p>

            <div className='theResume-skill'>
                <p><b>Software skills</b></p>
                <div data-aos='fade'>
                    <p>JavaScript</p>
                    <p>ReactJs</p>
                    <p>NodeJs</p>
                    <p>ExpressJs</p>
                    <p>MongoDB</p>
                    <p>CSS</p>
                    <p>HTML</p>
                </div>
            </div>
        </div>
    )
}

export default TheResume
