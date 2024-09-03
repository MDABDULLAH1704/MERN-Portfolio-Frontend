import React from 'react'
import Navbar from '../components/navbar/Navbar'
import RespNavbar from '../components/respNavbar/RespNavbar'
import Heading from '../components/heading/Heading'
import ProjectPage from '../components/projectPage/ProjectPage'
import HelloWorld from '../components/helloWorld/HelloWorld'

const Projects = () => {
    return (
        <div>
            <Navbar />
            <RespNavbar />
            <Heading heading='PROJECTS' btn='View Projects' />
            <ProjectPage />
            <HelloWorld padding='80px 10px 120px 10px' />
        </div>
    )
}

export default Projects
