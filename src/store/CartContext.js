import React, { useReducer, useState } from 'react';

const CartContext = React.createContext({
    isCartOpen: false,
    cartAmount: 0,
    cart: [],
    changeCartAmount: (amount) => {},
    addMeal: (meal, amount) => {},
    toggleCart: () => {}
});

const cartReducer = (state, action) => {
    const cart = [...state.cart];
    const foundMeal = cart.find(meal => meal.id === action.meal.id);
    let totalPrice = 0;

    switch (action.type) {
        case 'ADD_MEAL':
            // Only add meal to cart array and if it doesn't exist
            if (!foundMeal) {
                action.meal.amount = action.amount;
                cart.push(action.meal);
            } else {
                foundMeal.amount += action.amount;
            }

            cart.forEach(item => {
                totalPrice += item.amount * item.price;
            }); 

            return {
                cart: cart, 
                cartAmount: state.cartAmount + action.amount,
                totalPrice: totalPrice
            }
        case 'REMOVE_ONE_MEAL': 
            totalPrice = state.totalPrice;

            if (foundMeal) {
                totalPrice -= foundMeal.price;
                if (foundMeal.amount > 1) {
                    --foundMeal.amount;
                } else if (foundMeal.amount === 1) {
                    const indexToRemove = cart.findIndex(meal => meal.id === action.meal.id);
                    cart.splice(indexToRemove, 1);
                }
            }

            return {
                ...state,
                cart: cart,
                totalPrice: totalPrice,
                cartAmount: --state.cartAmount
            }

    }
};

export const CartContextProvider = props => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartState, dispatchCart] = useReducer(cartReducer, {
        cart: [],
        cartAmount: 0,
        totalPrice: 0.00
    });


    const toggleCartHandler = () => {
        setIsCartOpen(!isCartOpen);
    };

    const addMealHandler = (meal, amount) => {
        dispatchCart({type: 'ADD_MEAL', meal: meal, amount: parseInt(amount)});
    };

    const removeOneMealHandler = (meal) => {
        dispatchCart({type: 'REMOVE_ONE_MEAL', meal: meal});
    }

    return (
        <CartContext.Provider 
            value={{
                isCartOpen: isCartOpen,
                cartAmount: cartState.cartAmount,
                cart: cartState.cart,
                totalPrice: cartState.totalPrice.toFixed(2),
                addMeal: addMealHandler,
                removeMeal: removeOneMealHandler,
                toggleCart: toggleCartHandler
            }}
        >
            {props.children}
        </CartContext.Provider>
    );

};

export default CartContext;