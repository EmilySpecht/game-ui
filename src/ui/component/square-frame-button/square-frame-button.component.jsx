import React from 'react'

import './square-frame-button.style.css'

export const SquareFrame = ({image}) => {
    return (
        <button className='character-feature-button'>
        <img src={image} alt="" className='character-feature-image'/>
        </button>
        )
}