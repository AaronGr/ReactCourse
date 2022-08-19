import React, {useContext, useEffect, useState} from 'react';
import ReactDOM from 'react-dom';

import Card from '../UI/Card/Card';
import Total from './Total/Total';

import styles from './Cart.module.css';
import CartItem from './CartItem/CartItem';
import CartContext from '../../store/CartContext';

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

    const [totalPrice, setTotalPrice] = useState(0.0.toFixed(2));

    const cartCtx = useContext(CartContext);

    const cartToggleHandler = () => {
        cartCtx.toggleCart();
    };

    useEffect(() => {
        let priceCount = 0;
        let count = 0;
        DUMMY_CART_DATA.forEach(item => {
            priceCount += item.price;
            count++;
        });
        setTotalPrice(priceCount.toFixed(2));
        cartCtx.changeCartAmount(count);
    }, [DUMMY_CART_DATA])
    

    const meals = DUMMY_CART_DATA.map(item => {
        return <CartItem key={item.id} meal={item} />
    });

    return (
        <>
            <div 
                className={styles.backdrop}
                onClick={cartToggleHandler} />
            <Card className={styles.cart}>
                {meals}
                <Total totalPrice={totalPrice} />
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