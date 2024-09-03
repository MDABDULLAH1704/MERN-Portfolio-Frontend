import React from 'react'
import './Heading.css'
import RotatedArrow from '../rotatedArrow/RotatedArrow'

const Heading = (props) => {
    const handleScroll = () => {
        // Calculate the scroll position
        const scrollPosition = window.innerHeight * 0.43;

        // Scroll to that position
        window.scrollTo({
            top: scrollPosition,
            behavior: 'smooth', // Optional: adds smooth scrolling animation
        });
    };

    return (
        <>
            <div className='heading'>
                <div className='headingLeft'>{props.heading}</div>

                <div className='headingRight' onClick={handleScroll}>{props.btn}
                    <RotatedArrow transform='rotate(90deg)' fontSize='18px' color='white' />
                </div>
            </div>
        </>
    )
}

export default Heading
