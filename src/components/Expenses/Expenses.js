import React, { useState } from "react";
import Card from "../UI/Card/Card";
import ExpensesFilter from "./ExpenseFilter/ExpenseFilter";
import ExpenseItem from "./ExpenseItem/ExpenseItem";

import './Expenses.css'

const Expenses = (props) => {
    const expenses = props.expenses;
    const [filterYear, setFilterYear] = useState('2022');

    const onFilterYearChange = (year) => {
        setFilterYear(year);
    };

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter filterYear={filterYear} onYearChange={onFilterYearChange} />
                <ExpenseItem
                    title={expenses[0].title}
                    amount={expenses[0].amount}
                    date={expenses[0].date}
                />
                <ExpenseItem
                    title={expenses[1].title}
                    amount={expenses[1].amount}
                    date={expenses[1].date}
                />
                <ExpenseItem
                    title={expenses[2].title}
                    amount={expenses[2].amount}
                    date={expenses[2].date}
                />
            </Card>
        </div>
    )
}

export default Expenses;