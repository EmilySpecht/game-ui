import React from 'react'

import './button-fast-menu.style.css'

export const ButtonFastMenu = ({children, onclick, classname}) => {
    return (
        <button className={`button-fast-menu ${classname}`} onClick={onclick}>
            {children}
        </button>
    )
}