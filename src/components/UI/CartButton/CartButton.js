import React from 'react';
import CartIcon from '../CartIcon/CartIcon';

import styles from './CartButton.module.css';

const CartButton = props => {
    return (
        <button className={styles['cart-btn']} type='button'>
            <h4>Your Cart</h4>
        </button>
    )
};

export default CartButton;