import React, {useContext, useEffect, useState} from 'react';
import ReactDOM from 'react-dom';

import Card from '../UI/Card/Card';
import Total from './Total/Total';

import styles from './Cart.module.css';
import CartItem from './CartItem/CartItem';
import CartContext from '../../store/CartContext';

const Cart = (props) => { 

    const [totalPrice, setTotalPrice] = useState(0.0.toFixed(2));

    const cartCtx = useContext(CartContext);

    const cartToggleHandler = () => {
        cartCtx.toggleCart();
    };
    

    const meals = cartCtx.cart.map(item => {
        return <CartItem key={item.id} meal={item} />
    });

    return (
        <>
            <div 
                className={styles.backdrop}
                onClick={cartToggleHandler} />
            <Card className={styles.cart}>
                {meals}
                <Total totalPrice={totalPrice} />
            </Card>
        </>
    );
};

const CartModal = (props) => {
    return (
        <>
            {ReactDOM.createPortal(<Cart />, document.getElementById('cart-modal-root'))}
        </>
    )
};


export default CartModal;