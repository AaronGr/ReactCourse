import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        totalPrice: 0,
        items: [],
        amount: 0
    },
    reducers: {
        addItem(state, action) {
            const foundIndex = state.items.findIndex((item) => item.title === action.payload.title);
            if (foundIndex >= 0) {
                ++state.items[foundIndex].quantity;
                state.items[foundIndex].total = state.items[foundIndex].quantity * state.items[foundIndex].price;
            } else {
                state.items.push(action.payload);
            }
            state.totalPrice += action.payload.price;
            ++state.amount;
        },
        removeItem(state, action) {
            const foundIndex = state.items.findIndex((item) => item.title === action.payload);
            if (state.items[foundIndex].quantity > 1) {
                --state.items[foundIndex].quantity;
                state.items[foundIndex].total = state.items[foundIndex].quantity * state.items[foundIndex].price;
            } else {
                state.items.splice(foundIndex, 1);
            }
            state.totalPrice -= action.payload.price;
            --state.amount;
        }
    }
});

export const cartActions = cartSlice.actions;

export default cartSlice;

