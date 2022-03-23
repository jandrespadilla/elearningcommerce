import './Cart.css'
import ItemCount from '../ItemCount/ItemCount';
import React   from 'react';
import {  useCartContext } from '../../context/cartContext';

function Cart() {
    const {cartList} = useCartContext()
    console.log(cartList);
    return (
       
            <div style={{backgroundColor:'white',width: '50%'}}>
                    cart
            </div>        
       
    
    )  
}

export default Cart