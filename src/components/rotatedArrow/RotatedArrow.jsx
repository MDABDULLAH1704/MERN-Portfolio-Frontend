import React from 'react'
import './RotatedArrow.css'
import { FaArrowRight } from 'react-icons/fa'

const RotatedArrow = ({ transform, fontSize, color }) => {
    const arrowStyle = {
        transform: transform,  
        fontSize: fontSize,
        color: color
    };

    return (
        <div>
            <FaArrowRight style={arrowStyle} />
        </div>
    )
}

export default RotatedArrow
