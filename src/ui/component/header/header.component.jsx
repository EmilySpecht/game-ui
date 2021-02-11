import React from 'react'
import gold from '../../assets/images/gold.png'
import gem from '../../assets/images/gem.png'
import level from '../../assets/images/level.png'
import protection from '../../assets/images/protection.png'

import './header.style.css'

const character = {
    level: 22,
    protect: 125,
    gems: 32,
    gold: 541
}

export const Header = () => {

    return (
        <header className='header'>
            <div className='info-character'>
                <img src={level} className='item-header'/>
                <span className='info-text'>lvl {character.level}</span>
            </div>
            <div className='info-character'>
                <img src={protection} className='item-header'/>
                <span className='info-text'>{character.protect}</span>
            </div>
            <div className='info-character'>
                <img src={gem} className='item-header'/>
                <span className='info-text'>{character.gems}</span>

            </div>
            <div className='info-character'>
                <img src={gold} className='item-header'/>
                <span className='info-text'>{character.gold}k</span>

            </div>
        </header>
    )
}