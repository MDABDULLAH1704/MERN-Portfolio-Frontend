import React, { useEffect } from 'react'
import './Component2.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Component2 = (props) => {
    // For AOS Animation
    useEffect(() => {
        AOS.init({
            duration: 500,
            delay: 100
        });
    }, []);

    return (
        <div className='component2' >
            <div className="component2Left" data-aos='slide-up'>
                <img src={props.image} alt='Image' />
            </div>

            <div className="component2Right" data-aos='fade'>
                <p className='component1Right-title'>{props.title}</p>
                <p>{props.detailOne}</p>
                <p>{props.detailTwo}</p>
                <p>{props.detailThree}</p>
            </div>
        </div>
    )
}

export default Component2
