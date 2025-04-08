import React from 'react'
import './ProjectPage.css'
import Component1 from '../../component1/Component1'
import Component2 from '../../component2/Component2'
import Project100 from '../../../assets/project100.png'
import Project99 from '../../../assets/project99.png'

const ProjectPage = () => {
    return (
        <div className='projectPage'>
            <Component1
                image={Project99}
                title='Little Basket'
                detailOne={
                    <span>
                        Little Basket is a user-friendly <strong>eCommerce site</strong> for selling vegetables, fruits, and non-vegetables, featuring three main categories and secure signup and login for efficient order management.
                    </span>
                }
                detailTwo={
                    <span>
                        Built with <strong>ReactJs</strong>, <strong>NodeJs</strong>, <strong>ExpressJs</strong>, and <strong>MongoDB</strong>. Fully responsive for desktop and mobile. Hobby project, not yet launched for shopping. Focuses on design and functionality.
                    </span>
                }
                link1='https://littlebasket1.netlify.app'
                linkText1='Visit Little Basket , Link :- https://littlebasket1.netlify.app'
            />

            <Component2
                image={Project100}
                title='Text Generator'
                detailOne='Introducing Text Generator, your go-to tool for crafting playful messages perfect for light-hearted banter! Just type your message, choose how many times you want, and watch creative options appear, ready to share.'
                detailTwo='With a click, you can send your funny creations directly on WhatsApp, and it’s fully responsive for laptops, tablets, and mobile devices. Built with React.js, Node.js, and Express.js, Text Generator makes messaging fun and easy, whether it’s a cheeky poke!'
                link1='https://textgenerator10.netlify.app/'
                linkText1='Visit Text Generator , Link :- https://textgenerator10.netlify.app/'
            />
        </div>
    )
}

export default ProjectPage
