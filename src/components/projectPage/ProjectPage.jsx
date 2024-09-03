import React from 'react'
import './ProjectPage.css'
import Component1 from '../component1/Component1'
import Project1 from '../../assets/project1.png'

const ProjectPage = () => {
    return (
        <div className='projectPage'>
            <Component1
                image={Project1}
                title='Little Basket'
                detailOne='Little Basket is an easy-to-use ecommerce website that focuses on selling vegetables, fruits, and non-vegetables. The site is designed to be simple and user-friendly, featuring three main categories: vegetables, fruits, and non-vegetables. You can add items to your basket and proceed to checkout with ease.'
                detailTwo='For convenience, Little Basket includes signup and login functionalities with secure authentication, so you can create an account or sign in to manage your orders and details. The website is fully responsive, meaning it works well on both computers and mobile devices.'
                detailThree='However, it’s important to note that Little Basket is still a hobby project and has not officially launched for shopping yet. The website is a work in progress, and its primary purpose right now is to showcase the design and functionality.'
                link='https://littlebasket1.netlify.app'
                linkText='Visit Little Basket , Link :- https://littlebasket1.netlify.app'
            />
        </div>
    )
}

export default ProjectPage
