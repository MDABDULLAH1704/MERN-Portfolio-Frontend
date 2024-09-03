import React from 'react'
import Navbar from '../components/navbar/Navbar'
import RespNavbar from '../components/respNavbar/RespNavbar'
import Heading from '../components/heading/Heading'
import SubHeading from '../components/subHeading/SubHeading'
import ServicePage from '../components/servicePage/ServicePage'
import HelloWorld from '../components/helloWorld/HelloWorld'

const Services = () => {
    return (
        <div>
            <Navbar />
            <RespNavbar />
            <Heading heading='SERVICES' btn='View Services' />
            <SubHeading subHeading='Freelance Pack' />
            <ServicePage />
            <HelloWorld padding='80px 10px 120px 10px' />
        </div>
    )
}

export default Services
