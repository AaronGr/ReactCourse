import React from 'react';
import Card from '../UI/Card/Card';
import MealItem from './MealItem/MealItem';

import styles from './Meals.module.css';
import MealsSummary from './MealsSummary/MealsSummary';

const Meals = props => {
    const menu = [
        {
            id: 'm1',
            name: 'Sushi',
            description: 'Finest fish and veggies',
            price:  22.99
        },
        {
            id: 'm2',
            name: 'BBQ Burger',
            description: 'American, raw, meaty',
            price: 12.99
        },
        {
            id: 'm3',
            name: 'Schnitzel',
            description: 'A German specialty!',
            price: 16.50
        },
        {
            id: 'm4',
            name: 'Green Bowl',
            description: 'Healthy... and green...',
            price: 18.99
        }
    ]

    const mealsTitle = 'Delicious Food, Delivered To You';
    const summary1 = 'Choose your favorite meal from our broad selection of available meals ' +
                     'and enjoy a delicious lunch or dinner at home.';
    const summary2 = 'All our meals are cooked with high-quality ingredients, just-in-time and ' +
                     'of course by experienced chefs!'

    return (
        <>
            <MealsSummary 
                title={mealsTitle}
                content1={summary1}
                content2={summary2}
            />
            <Card className={styles.meals}>
                <ul>
                    {menu.map((item) => {
                        return (
                            <MealItem
                                key={item.id}
                                name={item.name}
                                description={item.description}
                                price={item.price}
                            />
                        )
                    })}
                </ul>
            </Card>
        </>
    )
};

export default Meals;