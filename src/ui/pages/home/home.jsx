import React, {useState} from 'react'
import {StoreModal} from "../../component/store-modal/store-modal.component";
import {Header} from "../../component/header/header.component";
import {ButtonFastMenu} from "../../component/button-fast-menu/button-fast-menu.component";
import Poison from '../../assets/images/character/poison.PNG'
import Justice from '../../assets/images/character/justice.PNG'
import Knowledge from '../../assets/images/character/knowledge.PNG'
import Death from '../../assets/images/character/death.PNG'
import Mcgonagall from '../../assets/images/character/mcgonagall.png'
import './home.style.css'
import {SquareFrame} from "../../component/square-frame-button/square-frame-button.component";

export const HomePage = () => {
    const [isOpen, setIsOpen] = useState(true)

    const openModal = () => {
        setIsOpen(true)
    }

    return (
        <div className='home-page'>
            <Header/>
            <div className='home-container'>
                <div className='fast-menu'>
                    <ButtonFastMenu onClick={openModal}>GEMS SHOP</ButtonFastMenu>
                    <ButtonFastMenu>POWER SHOP</ButtonFastMenu>
                </div>
                <img src={Mcgonagall} className='character'/>
                <div className='options-characters'>
                    <SquareFrame image={Poison} />
                    <SquareFrame image={Knowledge} />
                    <SquareFrame image={Justice} />
                    <SquareFrame image={Death} />
                </div>
            </div>

            {isOpen ? <StoreModal setIsOpen={setIsOpen}/> : null}
        </div>
    )
}