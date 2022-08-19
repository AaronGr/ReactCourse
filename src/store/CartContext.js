import React, { useReducer, useState } from 'react';

const CartContext = React.createContext({
    isCartOpen: false,
    cartAmount: 0,
    cart: [],
    cartMap: new Map(),
    changeCartAmount: (amount) => {},
    addMeal: (meal, amount) => {},
    toggleCart: () => {}
});

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_MEAL':
            // Only add meal to cart array and if it doesn't exist
            // If meal exists in the array then it is in the map, so update amount
            const cart = [...state.cart];
            const cartMap = new Map(state.cartMap);
            let totalPrice = state.totalPrice;
            if (!cart.find(meal => meal.id === action.meal.id)) {
                cart.push(action.meal);
                cartMap.set(action.meal.id, {amount: action.amount, price: action.meal.price} );
            } else {
                cartMap.set(action.meal.id, {amount: action.amount + cartMap.get(action.meal.id).amount, price: action.meal.price});
            }

            // Get total price from amount and price
            cartMap.forEach((mealInfo) => {
                totalPrice += mealInfo.price * mealInfo.amount;
            });

            return {
                    cart: cart, 
                    cartAmount: state.cartAmount + action.amount,
                    cartMap: new Map(cartMap),
                    totalPrice: totalPrice
                }
            break;
    }
};

export const CartContextProvider = props => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    // const [cartAmount, setCartAmount] = useState(0);
    // const [cart, setCart] = useState([]);
    // const [cartMap, ]

    const [cartState, dispatchCart] = useReducer(cartReducer, {
        cart: [],
        cartMap: new Map(),
        cartAmount: 0,
        totalPrice: 0.00
    });


    // const DUMMY_CART_DATA = [
    //     {
    //         id: 'm1',
    //         name: 'Sushi',
    //         price: 22.99
    //     },
    //     {
    //         id: 'm3',
    //         name: 'Schnitzel',
    //         price: 16.50
    //     }
    // ]

    const changeCartAmountHandler = amount => {
        // setCartAmount(amount);
    };

    const toggleCartHandler = () => {
        setIsCartOpen(!isCartOpen);
    };

    const addMealHandler = (meal, amount) => {
        dispatchCart({type: 'ADD_MEAL', meal: meal, amount: parseInt(amount)});
    };

    return (
        <CartContext.Provider 
            value={{
                isCartOpen: isCartOpen,
                cartAmount: cartState.cartAmount,
                cart: cartState.cart,
                cartMap: cartState.cartMap,
                totalPrice: cartState.totalPrice.toFixed(2),
                changeCartAmount: changeCartAmountHandler,
                addMeal: addMealHandler,
                toggleCart: toggleCartHandler
            }}
        >
            {props.children}
        </CartContext.Provider>
    );

};

export default CartContext;