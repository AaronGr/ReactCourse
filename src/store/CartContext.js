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
    const cart = [...state.cart];
    const cartMap = new Map(state.cartMap);
    let totalPrice = 0;

    switch (action.type) {
        case 'ADD_MEAL':
            // Only add meal to cart array and if it doesn't exist
            // If meal exists in the array then it is in the map, so update amount
            
            if (!cart.find(meal => meal.id === action.meal.id)) {
                cart.push(action.meal);
                cartMap.set(action.meal.id, {amount: action.amount, price: action.meal.price} );
            } else {
                cartMap.set(action.meal.id, {amount: action.amount + cartMap.get(action.meal.id).amount, price: action.meal.price});
            }

            

            // Get total price from amount and price
            cartMap.forEach((mealInfo) => {
                console.log(mealInfo);
                totalPrice = (mealInfo.price * mealInfo.amount) + totalPrice;
            });


            return {
                    cart: cart, 
                    cartAmount: state.cartAmount + action.amount,
                    cartMap: new Map(cartMap),
                    totalPrice: totalPrice
                }
        case 'REMOVE_ONE_MEAL': 
            totalPrice = state.totalPrice;
            if (cartMap.has(action.id)) {
                totalPrice -= cartMap.get(action.id).price;
                if (cartMap.get(action.id).amount > 1) {
                    --cartMap.get(action.id).amount;
                } else if (cartMap.get(action.id).amount === 1) {
                    const indexToRemove = cart.find(meal => meal.id === action.id);
                    cart.splice(indexToRemove, 1);
                    cartMap.delete(action.id);
                }
            }

            return {
                ...state,
                cartMap: new Map(cartMap),
                cart: cart,
                totalPrice: totalPrice,
                cartAmount: --state.cartAmount
            }

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

    const removeOneMealHandler = (mealId) => {
        dispatchCart({type: 'REMOVE_ONE_MEAL', id: mealId});
    }

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
                removeMeal: removeOneMealHandler,
                toggleCart: toggleCartHandler
            }}
        >
            {props.children}
        </CartContext.Provider>
    );

};

export default CartContext;