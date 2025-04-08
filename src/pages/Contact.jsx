import React from 'react'
import Navbar from '../components/navbar/Navbar'
import HelloWorld from '../components/helloWorld/HelloWorld'
import Heading from '../components/heading/Heading'
import ContactEmail from '../components/contactComponent/contactEmail/ContactEmail'
import ContactPage from '../components/contactComponent/contactPage/ContactPage'

const Contact = () => {
    return (
        <div>
            <Navbar />
            <Heading heading='CONTACT' btn='Contact Me' />
            <ContactEmail />
            <ContactPage />
            <HelloWorld padding='80px 10px 120px 10px' />
        </div>
    )
}

export default Contact
