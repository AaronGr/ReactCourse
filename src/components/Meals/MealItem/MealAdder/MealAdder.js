import React, { useState } from 'react';

import styles from './MealAdder.module.css';

const MealAdder = (props) => { 
    const [amount, setAmount] = useState('1');

    const amountChangeHandler = (event) => {
        setAmount(event.target.value);
    };

    return (
        <form>
            <div className={styles.controls}>
                <label htmlFor='item-amount'>Amount</label>
                <input 
                    type='number' 
                    min='1'
                    step='1' 
                    id='item-amount' 
                    value={amount}
                    onChange={amountChangeHandler}
                    required 
                />
            </div>
            <div className={styles.action}>
                <button type='submit'>+Add</button>
            </div>
        </form>
    )
}

export default MealAdder;