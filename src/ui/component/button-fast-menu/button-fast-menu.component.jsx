import React from 'react'

import './button-fast-menu.style.css'

export const ButtonFastMenu = ({children, onclick, className}) => {
    return (
        <button className={`button-fast-menu ${className}`} onClick={onclick}>
            {children}
        </button>
    )
}