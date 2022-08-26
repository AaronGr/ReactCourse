import React, { useContext } from 'react';
import CartContext from '../../../store/CartContext';
import CheckoutForm from '../Checkout/CheckoutForm';

import styles from './Total.module.css';

const Total = (props) => {
    const cartCtx = useContext(CartContext);

    const cartCancelHandler = () => {
        cartCtx.toggleCart();
    };

    return (
        <div className={styles.total}>
            <div className={styles['total-amount']}>
                <h2>Total Amount</h2>
                <h2>${Math.abs(props.totalPrice).toFixed(2)}</h2>
            </div>
            {cartCtx.cart.length !== 0 && <CheckoutForm />}
            <div className={styles['total-btns']}>
            {
                cartCtx.cart.length !== 0 
                    &&
                <button 
                    type='button' 
                    id={styles['order-btn']}
                    onClick={cartCtx.orderMeals}>
                    Order
                </button>
            }
                <button 
                    type='button' 
                    id={styles['cancel-btn']}
                    onClick={cartCancelHandler}>
                    Cancel
                </button>
            </div>
        </div>
    )
};

export default Total;