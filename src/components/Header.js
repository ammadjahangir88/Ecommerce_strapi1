import React from 'react'

export default function (props) {
    console.warn(props.cardData )
    return (
        <div>

            <div className='add-to-cart'>
                <span className='cart-count'>{props.cardData.length}</span>
                <img src='https://indyme.com/wp-content/uploads/2020/11/shopping-cart-icon.png' />

            </div>
  
        </div>
    )
}
