import React from 'react'
import Navbar from '../components/navbar/Navbar'
import RespNavbar from '../components/respNavbar/RespNavbar'
import HelloWorld from '../components/helloWorld/HelloWorld'
import Heading from '../components/heading/Heading'
import ContactPage from '../components/contactPage/ContactPage'
import ContactEmail from '../components/contactEmail/ContactEmail'

const Contact = () => {
    return (
        <div>
            <Navbar />
            <RespNavbar />
            <Heading heading='CONTACT' btn='Contact Me' />
            <ContactPage />
            <ContactEmail />
            <HelloWorld padding='80px 10px 120px 10px' />
        </div>
    )
}

export default Contact
