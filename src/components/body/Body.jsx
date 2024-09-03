import React from 'react';
import './Body.css';
import bodyVideo from '../../assets/bodyVideo.mp4'

const Body = () => {
    return (
        <section className='bodySection'>
            <div className='videoWrapper'>
                <video
                    className='backgroundVideo'
                    controls={false}
                    autoPlay
                    loop
                    muted // Ensure video is muted for autoplay
                >
                    <source src={bodyVideo} type="video/mp4" />
                </video>
            </div>
        </section>
    );
}

export default Body
