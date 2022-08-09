import React, { useState } from "react";
import Card from "../UI/Card/Card";
import ExpensesFilter from "./ExpenseFilter/ExpenseFilter";
import ExpenseItem from "./ExpenseItem/ExpenseItem";
import ExpensesList from "./ExpensesList/ExpensesList";

import './Expenses.css'
import ExpensesChart from "./ExpensesChart/ExpensesChart";

const Expenses = (props) => {
    const [filterYear, setFilterYear] = useState('2022');

    const onFilterYearChange = (year) => {
        setFilterYear(year);
    };

    const filteredExpenses  = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filterYear;
    });

    let expensesContent = <p>No expenses found.</p>;

    if (filteredExpenses.length > 0) {
        expensesContent = filteredExpenses.map((expense) => (
            <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />
         ));
    }

    return (
         <Card className="expenses">
            <ExpensesFilter filterYear={filterYear} onYearChange={onFilterYearChange} />
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList items={filteredExpenses} />
        </Card>
    )
}

export default Expenses;