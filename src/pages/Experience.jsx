import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Heading from '../components/heading/Heading'
import HelloWorld from '../components/helloWorld/HelloWorld'
import ExperiencePage from '../components/experienceComponent/experiencePage/ExperiencePage'

const Experience = () => {
    return (
        <div>
            <Navbar />
            <Heading heading='EXPERIENCES' btn='View Experiences' />
            <ExperiencePage />
            <HelloWorld padding='80px 10px 120px 10px' />
        </div>
    )
}

export default Experience
