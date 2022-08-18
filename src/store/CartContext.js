import React, { useState } from 'react';

const CartContext = React.createContext({
    isCartOpen: false,
    cartAmount: 0,
    changeCartAmount: (amount) => {},
    toggleCart: () => {}
});

export const CartContextProvider = props => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartAmount, setCartAmount] = useState(0);

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
                changeCartAmount: changeCartAmountHandler,
                toggleCart: toggleCartHandler
            }}
        >
            {props.children}
        </CartContext.Provider>
    );

};

export default CartContext;