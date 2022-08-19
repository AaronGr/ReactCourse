import React from 'react';

import styles from './CartItem.module.css';

const CartItem = (props) => { 

    return (
        <>
            <div className={styles['cart-item']}>
                <div className={styles['meal']}>
                    <h3>{props.meal.name}</h3>
                    <p>${props.meal.price}</p>
                    <span>x{props.count}</span>
                </div>
                <div className={styles['cart-btns']}>
                    <button type='button'>-</button>
                    <button type='button'>+</button>
                </div>
            </div>
            <hr className={styles.divider}/>
        </>
    )
};

export default CartItem;