import React, { useState } from 'react';

const CartContext = React.createContext({
    isCartOpen: false,
    cartAmount: 0,
    cart: [],
    changeCartAmount: (amount) => {},
    toggleCart: () => {}
});

export const CartContextProvider = props => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartAmount, setCartAmount] = useState(0);
    const [cart, setCart] = useState([]);


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

    const changeCartAmountHandler = amount => {
        setCartAmount(amount);
    };

    const toggleCartHandler = () => {
        setIsCartOpen(!isCartOpen);
    };

    return (
        <CartContext.Provider 
            value={{
                isCartOpen: isCartOpen,
                cartAmount: cartAmount,
                cart: DUMMY_CART_DATA,
                changeCartAmount: changeCartAmountHandler,
                toggleCart: toggleCartHandler
            }}
        >
            {props.children}
        </CartContext.Provider>
    );

};

export default CartContext;