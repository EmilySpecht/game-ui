import React from "react";

import './store-modal.style.css'

const itensShop = [
    {
        price: 1.99,
        gems: 100,
        image: 'https://i.pinimg.com/564x/cc/d2/b6/ccd2b680faa9d5855232ecd54b40fa4b.jpg'
    },
    {
        price: 4.99,
        gems: 275,
        image: 'https://i.pinimg.com/564x/95/33/e8/9533e88eacbcc8011d3e5ea66d523809.jpg'
    },
    {
        price: 19.99,
        gems: 1250,
        image: 'https://i.pinimg.com/564x/ef/f9/8b/eff98b50ed4e805912a11c7a2fd3be3b.jpg'
    },
    {
        price: 49.99,
        gems: 3250,
        image: 'https://i.pinimg.com/564x/86/9e/ec/869eec0cc4f5ad17a9fb14bb7907d273.jpg'
    }
]

export const StoreModal = () => {

    const itemsModal = itensShop.map((item) => {
        return (
            <div className='item'>
                <div className='item-image'>
                    <img src={item.image} className='image-gem'/>
                </div>
                <div className='profit'>
                    <span>{item.gems} </span>
                    <span>GEMS</span>
                </div>
            </div>
        )
    })

    return (
        <section className='store-modal'>
            <div className='banner'>
                <span>SHOP</span>
                <button className='close-button'>
                    X
                </button>
            </div>
            <div className='content'>
                <h1 className='title'>DRAGON BUNDLE</h1>
                <div className='image-dragon'>
                </div>
                <h1 className='title'>GEMS</h1>
                <div className='items-list'>
                    {itemsModal}
                </div>
            </div>
            <div className='bottom-border'>
            </div>
        </section>
    )
}