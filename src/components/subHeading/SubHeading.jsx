import React from 'react'
import './SubHeading.css'

const SubHeading = (props) => {
    return (
        <div className="subHeading">
            {props.subHeading}
        </div>
    )
}

export default SubHeading
