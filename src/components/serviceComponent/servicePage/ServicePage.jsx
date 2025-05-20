import React from 'react'
import './ServicePage.css'
import Component1 from '../../component1/Component1'
import Component2 from '../../component2/Component2'
import service1 from '../../../assets/service1.jpeg'
import service2 from '../../../assets/service2.jpg'
import service3 from '../../../assets/service3.jpg'

const ServicePage = () => {
    return (
        <div className='servicePage'>
            <Component1
                image={service1}
                title='Basic Tier'
                detailOne='👉 Best for individuals, personal branding, and simple online presence.'
                detailTwo='👉 Like Static Website, Personal Portfolio/Resume Website, Landing Page, Digital CV.'
                detailThree={
                    <ul>
                        <li>Lightweight, static design for quick loading and clear messaging.</li>
                        <li>Showcase your skills and projects with a sleek, responsive layout.</li>
                        <li>Engaging design with CTAs ideal for products, events, or offers.</li>
                        <li>Clickable, downloadable, and styled for professional impact.</li>
                        <li>Optimized for search engines and seamless on all devices.</li>
                    </ul>
                }
            />

            <Component2
                image={service2}
                title='Standard Tier'
                detailOne='👉 Great for businesses, organizations, and content-heavy sites.'
                detailTwo='👉 Like Photography/Art Portfolio, Event/Wedding Website, Multi-Page Company Website, Educational/Coaching Site, Blog/News Site.'
                detailThree={
                    <ul>
                        <li>Structured layouts including About, Services, Contact, FAQs and optional blog sections, tailored to your business needs.</li>
                        <li>Mobile-friendly interfaces with cross-device compatibility.</li>
                        <li>Embedded contact forms and internal navigation.</li>
                        <li>Flexible structures designed to support businesses.</li>
                        <li>Ideal for establishing an online presence for your business.</li>
                    </ul>
                }
            />

            <Component1
                image={service3}
                title='Premium Tier'
                detailOne='👉 Advanced features, scalability, and high-performance custom builds.'
                detailTwo='👉 Like Restaurant or Cafe Website (with menu/gallery), Product Showcase Website.'
                detailThree={
                    <ul>
                        <li>Built to enhance online visibility, promote digital or physical products, and support brand launches.</li>
                        <li>Interactive menus, curated photo galleries, and immersive presentation of offerings and ambiance.</li>
                        <li>Clear pricing, category-based navigation, and integrated testimonials to build trust and drive action.</li>
                        <li>Strategic CTAs, adaptive layouts, and mobile-first optimization to boost engagement across all devices.</li>
                    </ul>
                }
            />
        </div>
    )
}

export default ServicePage
