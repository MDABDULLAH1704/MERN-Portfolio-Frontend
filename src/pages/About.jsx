import React from 'react'
import Navbar from '../components/navbar/Navbar'
import HelloWorld from '../components/helloWorld/HelloWorld'
import AboutPage from '../components/aboutComponent/aboutPage/AboutPage'

const About = () => {
    return (
        <div>
            <Navbar/>
            <AboutPage />
            <HelloWorld padding='60px 10px 120px 10px' />
        </div>
    )
}

export default About
