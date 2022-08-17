import React from 'react';

import styles from './Total.module.css';

const Total = (props) => { 
    return (
        <div className={styles.total}>
            <div className={styles['total-amount']}>
                <h2>Total Amount</h2>
                <h2>${props.totalPrice}</h2>
            </div>
            <div className={styles['total-btns']}>
                <button type='button' id={styles['order-btn']}>Order</button>
                <button type='button' id={styles['cancel-btn']}>Cancel</button>
            </div>
        </div>
    )
};

export default Total;