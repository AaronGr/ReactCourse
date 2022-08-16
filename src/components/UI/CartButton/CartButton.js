import React from 'react';
import CartIcon from '../CartIcon/CartIcon';

import styles from './CartButton.module.css';

const CartButton = props => {
    return (
        <button className={styles['cart-btn']} type='button'>
            <span className={styles['cart-icon']}>
                <CartIcon  />
            </span>
            <span>
                Your Cart
            </span>
            <span className={styles['cart-counter']}>
                3
            </span>
        </button>
    )
};

export default CartButton;