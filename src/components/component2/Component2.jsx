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

    // openInNewTab function
    const openInNewTab = (url) => {
        const win = window.open(url, '_blank');
        win.focus();
    };

    // openCertificate function to handle opening the certificate image
    const openCertificate = () => {
        const win = window.open(props.certificate, '_blank');
        win.focus();
    };

    return (
        <div className='component2' >
            <div className="component2Left" data-aos='zoom-in'>
                <img src={props.image} alt='Image' />
            </div>

            <div className="component2Right" data-aos='fade'>
                <p className='component1Right-title'>{props.title}</p>
                <p>{props.detailOne}</p>
                <p>{props.detailTwo}</p>
                <p>{props.detailThree}</p>
                <p onClick={openCertificate} style={{ cursor: 'pointer', color: 'white' }}>
                    <b>{props.ViewCertificate}</b>
                </p>
                <p onClick={() => openInNewTab(props.link1)} style={{ cursor: 'pointer', color: 'white' }}> <b>{props.linkText1}</b> </p>
                <p onClick={() => openInNewTab(props.link2)} style={{ cursor: 'pointer', color: 'white' }}> <b>{props.linkText2}</b> </p>
            </div>
        </div>
    )
}

export default Component2
