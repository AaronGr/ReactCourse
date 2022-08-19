import React, { useContext, useState } from 'react';
import CartContext from '../../../../store/CartContext';

import styles from './MealAdder.module.css';

const MealAdder = (props) => { 
    const cartCtx = useContext(CartContext);
    const [amount, setAmount] = useState('1');

    const amountChangeHandler = (event) => {
        setAmount(event.target.value);
    };

    const addMealHandler = (event) => {
        event.preventDefault();
        cartCtx.addMeal(props.meal, amount);
    };

    return (
        <form onSubmit={addMealHandler}>
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
                <button type='submit' >+Add</button>
            </div>
        </form>
    )
}

export default MealAdder;