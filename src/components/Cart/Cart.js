import React from 'react';
import ReactDOM from 'react-dom';

import Card from '../UI/Card/Card';
import Total from './Total/Total';

import styles from './Cart.module.css';
import CartItem from './CartItem/CartItem';

const Cart = (props) => { 
    const DUMMY_CART_DATA = [
        {
            id: 'm1',
            name: 'Sushi',
            price: 22.99
        },
        {
            id: 'm3',
            name: 'Schnitzel',
            price: 16.50
        }
    ]

    const meals = DUMMY_CART_DATA.map(item => {
        return <CartItem key={item.id} meal={item} />
    });

    return (
        <>
            <div className={styles.backdrop} />
            <Card className={styles.cart}>
                {meals}
                <Total totalPrice='0.00' />
            </Card>
        </>
    );
};

const CartModal = (props) => {
    return (
        <>
            {ReactDOM.createPortal(<Cart />, document.getElementById('cart-modal-root'))}
        </>
    )
};


export default CartModal;