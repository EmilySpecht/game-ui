import React from 'react'

import './button-fast-menu.style.css'

export const ButtonFastMenu = ({children}) => {
    return (
        <button className='button-fast-menu'>
            {children}
        </button>
    )
}