import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Body from '../../src/components/homeComponent/body/Body'
import BodyText from '../../src/components/homeComponent/bodyText/BodyText'
import HomeAbout from '../../src/components/homeComponent/homeAbout/HomeAbout'
import HomeQuote from '../../src/components/homeComponent/homeQuote/HomeQuote'
import HelloWorld from '../components/helloWorld/HelloWorld'

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Body />
            <BodyText />
            <HomeAbout />
            <HomeQuote />
            <HelloWorld padding='80px 10px 120px 10px' />
        </div>
    )
}

export default Home
