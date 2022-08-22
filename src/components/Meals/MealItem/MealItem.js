import React from 'react';
import MealAdder from './MealAdder/MealAdder';
import MealDescription from './MealDescription/MealDescription';

import styles from './MealItem.module.css'

const MealItem = props => {
    return (
        <li>
            <div className={styles['meal-item']}>
                <MealDescription
                    name={props.meal.name}
                    description={props.meal.description}
                    price={props.meal.price.toFixed(2)}
                />
                <MealAdder meal={props.meal} />
            </div>
            <hr />
        </li>
    )
};

export default MealItem;