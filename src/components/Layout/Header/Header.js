import React from 'react';

import styles from './Header.module.css';
import mealImg from '../../assets/meals.jpg'
import CartButton from '../../UI/CartButton/CartButton';

const Header = () => {
    return (
        <>
            <header className={styles.header}>
                <h1>ReactMeals</h1>
                <CartButton />
            </header>
            <div className={styles['main-image']} >
                <img src={mealImg} alt="A delicious line-up of food." />
            </div>
        </>
    )
};

export default Header;