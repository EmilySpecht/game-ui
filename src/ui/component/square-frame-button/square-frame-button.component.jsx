import React from 'react'

import './square-frame-button.style.css'

export const SquareFrame = ({image, onclick}) => {
    return (
        <button className='character-feature-button' onClick={onclick}>
        <img src={image} alt="" className='character-feature-image'/>
        </button>
        )
}