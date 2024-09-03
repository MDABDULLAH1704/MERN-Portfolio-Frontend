import React from 'react'
import Body from '../components/body/Body'
import BodyText from '../components/bodyText/BodyText'
import Navbar from '../components/navbar/Navbar'
import RespNavbar from '../components/respNavbar/RespNavbar'
import HomeAbout from '../components/homeAbout/HomeAbout'
import HomeQuote from '../components/homeQuote/HomeQuote'
import HelloWorld from '../components/helloWorld/HelloWorld'

const Home = () => {
    return (
        <div>
            <Body />
            <BodyText />
            <Navbar />
            <RespNavbar />
            <HomeAbout />
            <HomeQuote />
            <HelloWorld padding='80px 10px 120px 10px' />
        </div>
    )
}

export default Home
