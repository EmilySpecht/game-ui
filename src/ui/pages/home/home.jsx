import React from 'react'
import {StoreModal} from "../../component/store-modal/store-modal.component";

import './home.style.css'
import {Header} from "../../component/header/header.component";

export const HomePage = () => {
    return (
        <div className='home-page'>
            <Header />
            <StoreModal />
        </div>
    )
}