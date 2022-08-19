import React, {useContext} from 'react';
import ReactDOM from 'react-dom';

import Card from '../UI/Card/Card';
import Total from './Total/Total';

import styles from './Cart.module.css';
import CartItem from './CartItem/CartItem';
import CartContext from '../../store/CartContext';

const Cart = (props) => {
    const cartCtx = useContext(CartContext);

    const meals = cartCtx.cart.map(item => {
        return <CartItem 
                    key={item.id} 
                    meal={item} 
                    count={cartCtx.cartMap.get(item.id).amount}
                    addOneMeal={() => cartCtx.addMeal(item, '1')}
                />
    });

    return (
        <>
            <div 
                className={styles.backdrop}
                onClick={cartCtx.toggleCart} />
            <Card className={styles.cart}>
                {meals}
                <Total totalPrice={cartCtx.totalPrice} />
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