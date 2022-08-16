import React from 'react';
import Card from '../UI/Card/Card';
import MealItem from './MealItem/MealItem';

import styles from './Meals.module.css';

const Meals = props => {
    const menu = [
        {
            name: 'Sushi',
            description: 'Finest fish and veggies',
            price:  22.99
        },
        {
            name: 'BBQ Burger',
            description: 'American, raw, meaty',
            price: 12.99
        },
        {
            name: 'Schnitzel',
            description: 'A German specialty!',
            price: 16.50
        },
        {
            name: 'Green Bowl',
            description: 'Healthy... and green...',
            price: 18.99
        }
    ]

    return (
        <Card className={styles.meals}>
            <ul>
                {menu.map((item) => {
                    return (
                        <MealItem
                            name={item.name}
                            description={item.description}
                            price={item.price}
                        />
                    )
                })}
            </ul>
        </Card>
    )
};

export default Meals;