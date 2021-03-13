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
                    <ButtonFastMenu onclick={() => setIsOpen(true)}>GEMS SHOP</ButtonFastMenu>
                    <ButtonFastMenu>POWER SHOP</ButtonFastMenu>
                </div>
                <img src={selectedImage} className='character'/>
                <div className='options-characters'>
                    <SquareFrame image={Poison} onclick={() => setSelectedImage(Snape)}/>
                    <SquareFrame image={Knowledge} onclick={() => setSelectedImage(Mcgonagall)}/>
                    <SquareFrame image={Justice} onclick={() => setSelectedImage(Dumbledore)}/>
                    <SquareFrame image={Death} onclick={() => setSelectedImage(Deatheater)}/>
                </div>
                <ButtonFastMenu className='advance-button'>ADVANCE</ButtonFastMenu>
            </div>
            {isOpen ? <StoreModal setIsOpen={setIsOpen}/> : null}
        </div>
    )
}