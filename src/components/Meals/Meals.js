import React, { useEffect, useState } from 'react';
import Card from '../UI/Card/Card';
import MealItem from './MealItem/MealItem';
import useHttp from '../../hooks/use-http';

import styles from './Meals.module.css';
import MealsSummary from './MealsSummary/MealsSummary';

const Meals = props => {
    const [meals, setMeals] = useState([]);

    const { isLoading, error, sendRequest: fetchMeals } = useHttp();

    const mealsTitle = 'Delicious Food, Delivered To You';
    const summary1 = 'Choose your favorite meal from our broad selection of available meals ' +
                     'and enjoy a delicious lunch or dinner at home.';
    const summary2 = 'All our meals are cooked with high-quality ingredients, just-in-time and ' +
                     'of course by experienced chefs!'

    useEffect(() => {
        const transformMeals = (mealsObj) => {
            const loadedMeals = [];

            for (const mealKey in mealsObj) {
                loadedMeals.push({ 
                    id: mealKey, 
                    name: mealsObj[mealKey].name, 
                    description: mealsObj[mealKey].description, 
                    price: mealsObj[mealKey].price
                });
            }

            setMeals(loadedMeals);
        };

        fetchMeals(
            { url: 'https://react-meals-b01d6-default-rtdb.firebaseio.com/meals.json'},
            transformMeals
        );
    }, [fetchMeals]);

    const displayMeals = meals.map((item) => {
        return (
            <MealItem
                key={item.id}
                meal={item}
            />
        )
    });

    return (
        <>
            <MealsSummary 
                title={mealsTitle}
                content1={summary1}
                content2={summary2}
            />
            <Card className={styles.meals}>
                <ul>
                    {error && <p>{error}</p>}
                    {isLoading && !error && <p>Menu is Loading...</p>}
                    {!isLoading && !error && displayMeals}
                </ul>
            </Card>
        </>
    )
};

export default Meals;