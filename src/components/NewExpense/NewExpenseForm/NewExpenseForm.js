import React, { useState } from "react";

import './NewExpenseForm.css';

const NewExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [chosenDate, setChosenDate] = useState('');
    const [formDisplayed, setFormDisplayed] = useState(false);

    const titleChangeHandler = (e) => {
        setEnteredTitle(e.target.value);
        console.log(e.target.value);
    };

    const amountChangeHandler = (e) => {
        setEnteredAmount(e.target.value);
        console.log(e.target.value);
    };

    const dateChangeHandler = (e) => {
        setChosenDate(e.target.value);
        console.log(e.target.value);
    };

    const submitHandler = (e) => {
        e.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(chosenDate)
        }

        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setChosenDate('');
        setFormDisplayed(false);
    };

    const hideFormHandler = (e) => {
        setFormDisplayed(!formDisplayed);
    };

    const addExpenseButton = <button type='button' onClick={hideFormHandler}>Add Expense</button>;   
    let formContent =  addExpenseButton;

    if (formDisplayed) {
        formContent = (
            <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input 
                        type="text" 
                        value={enteredTitle}
                        onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input 
                        type="number" 
                        min="0.01" 
                        step="0.01" 
                        value={enteredAmount}
                        onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input 
                        type="date" 
                        min="2019-01-01" 
                        max="2022-12-31" 
                        value={chosenDate}
                        onChange={dateChangeHandler} />
                </div>
            </div>
                <div className="new-expense__actions">
                    <button type='submit'>Add Expense</button>
                    <button type="button" onClick={hideFormHandler}>Cancel</button>
                </div>
        </form>
        ) 
    } else {
        formContent = addExpenseButton;
    }

    return (
        <div>
            {formContent}
        </div>
    )
};

export default NewExpenseForm;