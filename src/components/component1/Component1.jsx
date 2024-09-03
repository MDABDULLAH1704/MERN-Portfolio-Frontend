import React, { useEffect } from 'react'
import './Component1.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Component1 = (props) => {
    // For AOS Animation
    useEffect(() => {
        AOS.init({
            duration: 500,
            delay: 100
        });
    }, []);

    // openInNewTab function
    const openInNewTab = (url) => {
        const win = window.open(url, '_blank');
        win.focus();
    };

    return (
        <div className='component1' >
            <div className="component1Left" data-aos='slide-up'>
                <img src={props.image} alt='Image' />
            </div>

            <div className="component1Right" data-aos='fade'>
                <p className='component1Right-title'>{props.title}</p>
                <p>{props.detailOne}</p>
                <p>{props.detailTwo}</p>
                <p>{props.detailThree}</p>
                <p onClick={() => openInNewTab(props.link)} style={{ cursor: 'pointer', color: 'white' }}> <b>{props.linkText}</b> </p>
            </div>
        </div>
    )
}

export default Component1
