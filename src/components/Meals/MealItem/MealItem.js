import React from 'react';
import MealAdder from './MealAdder/MealAdder';
import MealDescription from './MealDescription/MealDescription';

import styles from './MealItem.module.css'

const MealItem = props => {
    return (
        <li>
            <div className={styles['meal-item']}>
                <MealDescription
                    name={props.name}
                    description={props.description}
                    price={props.price}
                />
                <MealAdder />
            </div>
            <hr />
        </li>
    )
};

export default MealItem;