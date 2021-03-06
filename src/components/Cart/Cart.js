import React from 'react';


const Cart = (props) => {
    const cart = props.cart;
    // const total = cart.reduce((total, prd) => total + prd.price,0);
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price * product.quantity;
    }
    let shipping =0;
    if(total>35){
        shipping =5;
    }
    else if(total>0){
        shipping =12;
    }

    const tax = Math.round(total / 10);
    const grandTotal = (total + shipping + tax).toFixed(2);
    return (
        <div>
            <h4>Order cart</h4>
            <p>Items Ordered: {cart.length}</p>
            <p>Product Price: {total}</p>
            <p>Shipping Cost: {shipping}</p>
            <p>Tax + vAT: {tax}</p>
            <p>Total Price: {grandTotal}</p>
            <br/>
            {
                props.children
            }
            
        </div>
    );
};

export default Cart;