import React, {useState} from 'react'
import {StoreModal} from "../../component/store-modal/store-modal.component";
import {Header} from "../../component/header/header.component";
import {ButtonFastMenu} from "../../component/button-fast-menu/button-fast-menu.component";
import Poison from '../../assets/images/character/poison.PNG'
import Justice from '../../assets/images/character/justice.PNG'
import Knowledge from '../../assets/images/character/knowledge.PNG'
import Death from '../../assets/images/character/death.PNG'
import Mcgonagall from '../../assets/images/character/mcgonagall.png'
import Dumbledore from '../../assets/images/character/dumbledore.png'
import Snape from '../../assets/images/character/snape.png'
import Deatheater from '../../assets/images/character/deatheater.png'
import Goblin from '../../assets/images/character/goblin.png'

import {SquareFrame} from "../../component/square-frame-button/square-frame-button.component";
import './home.style.css'

export const HomePage = () => {
    const [isOpen, setIsOpen] = useState(true)
    const [selectedImage, setSelectedImage] = useState(Snape)

    return (
        <div className='home-page'>
            <Header/>
            <div className='home-container'>
                <div className='fast-menu'>
                    <ButtonFastMenu onclick={() => setIsOpen(true)} classname='button-fast'>GEMS SHOP</ButtonFastMenu>
                    <ButtonFastMenu className='button-fast-menu'>POWER SHOP</ButtonFastMenu>
                </div>
                <div className='light-character'>
                    <img src={selectedImage} className='character'/>
                </div>
                <div className='options-characters'>
                    <SquareFrame image={Poison} onclick={() => setSelectedImage(Snape)}/>
                    <SquareFrame image={Knowledge} onclick={() => setSelectedImage(Mcgonagall)}/>
                    <SquareFrame image={Justice} onclick={() => setSelectedImage(Dumbledore)}/>
                    <SquareFrame image={Death} onclick={() => setSelectedImage(Goblin)}/>
                </div>
                <ButtonFastMenu classname='advance-button'>ADVANCE</ButtonFastMenu>
            </div>
            {isOpen ? <StoreModal setIsOpen={setIsOpen}/> : null}
        </div>
    )
}