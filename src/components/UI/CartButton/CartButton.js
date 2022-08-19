import React, { useContext } from 'react';
import CartContext from '../../../store/CartContext';
import CartIcon from '../CartIcon/CartIcon';

import styles from './CartButton.module.css';

const CartButton = () => {
    const cartCtx = useContext(CartContext);

    const toggleCartHandler = () => {
        cartCtx.toggleCart();
    };  

    return (
        <button 
            className={styles['cart-btn']} 
            type='button'
            onClick={toggleCartHandler}
        >
            <span className={styles['cart-icon']}>
                <CartIcon  />
            </span>
            <span>
                Your Cart
            </span>
            <span className={styles['cart-counter']}>
                {cartCtx.cartAmount}
            </span>
        </button>
    )
};

export default CartButton;