import React from 'react'
import './ServicePage.css'
import Component1 from '../component1/Component1'
import Component2 from '../component2/Component2'
import service1 from '../../assets/service1.jpeg'
import service2 from '../../assets/service2.jpg'
import service3 from '../../assets/service3.jpeg'

const ServicePage = () => {
    return (
        <div className='servicePage'>
            <Component1
                image={service1}
                title='Custom Website'
                detailOne='Develop web applications tailored to your business needs using MongoDB, Express.js, React.js, and Node.js for efficient performance.'
                detailTwo='Build scalable and high-performance systems that can handle growth and adapt to your specific requirements.'
                detailThree='Ensure a seamless user experience across all devices by implementing responsive designs that adjust to different screen sizes and orientations.'
            />

            <Component2
                image={service2}
                title='Full-Stack Website'
                detailOne='Develop both front-end and back-end solutions, handling everything from user interface design to server-side logic and database management.'
                detailTwo='Integrate APIs and additional functionality to expand features and enhance system capabilities.'
                detailThree='Implement responsive designs that adapt to various screen sizes and devices.'
            />

            <Component1
                image={service3}
                title='Frontend Website (using ReactJs)'
                detailOne='Create dynamic and interactive user interfaces with React.js, leveraging modern hooks and state management solutions.'
                detailTwo='Design intuitive and user-friendly interfaces with a focus on user experience (UX) and user interface (UI) best practices.'
                detailThree='Create designs that look great and work well on any device, whether it is a phone, tablet, or computer.'
            />
        </div>
    )
}

export default ServicePage
