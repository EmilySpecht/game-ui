import React from 'react'

import './layout-modal.style.css'

export const LayoutModal = ({title, children, setIsOpen}) => {
    return (
        <section className='store-modal'>
            <div className='banner'>
                <span>{title}</span>
                <button className='close-button' onClick={() => setIsOpen(false)}>
                    X
                </button>
            </div>
            <div className='content'>
                {children}
            </div>
            <div className='bottom-border'>
            </div>
        </section>
    )
}