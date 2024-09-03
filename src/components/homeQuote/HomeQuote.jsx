import React, { useEffect } from 'react'
import './HomeQuote.css'
import QuoteImg1 from '../../assets/quote1.jpeg'
import QuoteImg2 from '../../assets/quote2.jpeg'
import QuoteImg3 from '../../assets/quote3.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

const HomeQuote = () => {
    // For AOS Animation
    useEffect(() => {
        AOS.init({
            duration: 500,
            delay: 100
        });
    }, []);

    return (
        <>
            {/* HomeQuote-1 */}
            <div className='homeQuote1'>
                <div className="homeQuote1-left" data-aos='fade'>
                    <p className='homeQuote1-left-p1'> <i>where</i> <span>CREATIVITY</span> </p>
                    <p className='homeQuote1-left-p2'>MEETS</p>
                    <p className='homeQuote1-left-p3'>ADVANCED</p>
                    <p className='homeQuote1-left-p4'>TECHNOLOGY</p>
                </div>

                <div className="homeQuote1-right" data-aos='slide-up'>
                    <img src={QuoteImg1} alt='Image' />
                </div>
            </div>

            {/* HomeQuote-2 */}
            <div className='homeQuote1 homeQuote2'>
                <div className="homeQuote1-left" data-aos='fade'>
                    <p className='homeQuote1-left-p1'> <i>transforming </i> <span>IDEAS</span> </p>
                    <p className='homeQuote1-left-p2'>INTO</p>
                    <p className='homeQuote1-left-p3'>EXCEPTIONAL</p>
                    <p className='homeQuote1-left-p4'>EXPERIENCES</p>
                </div>

                <div className="homeQuote1-right" data-aos='slide-up'>
                    <img src={QuoteImg2} alt='Image' />
                </div>
            </div>

            {/* HomeQuote-3 */}
            <div className='homeQuote1 homeQuote3'>
                <div className="homeQuote1-left" data-aos='fade'>
                    <p className='homeQuote1-left-p1'> <i>turning</i> <span>VISIONARY</span> </p>
                    <p className='homeQuote1-left-p2'>CONCEPTS</p>
                    <p className='homeQuote1-left-p3'>INTO</p>
                    <p className='homeQuote1-left-p4'>REALITIES</p>
                </div>

                <div className="homeQuote1-right" data-aos='slide-up'>
                    <img src={QuoteImg3} alt='Image' />
                </div>
            </div>
        </>
    )
}

export default HomeQuote
