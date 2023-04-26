import React from 'react'

export default function (props) {
    console.warn(props)
    return (
        <div>
            <h1>Home Component</h1>
            <div className='cart-wrapper'>
                <div className='img-wrapper item'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREdKf6rcn1BdCa58BJcqZ1duwRfCHzlDQPYA&usqp=CAU" />
                </div>
                <div className="text-wrapper item">
                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price : $1000.00
                    </span>
                </div>

                <div className='btn-wrapper item'>
                    <button
                        onClick={() => props.addToCartHandler({ price: 1000, name: "i phone 11" })}>

                        Add to Cart
                    </button>
                    <button className='remove-cart-btn'
                        onClick={() => props.removeToCartHandler()}>

                        Remove to Cart
                    </button>

                </div>



            </div>
        </div>
    )
}
