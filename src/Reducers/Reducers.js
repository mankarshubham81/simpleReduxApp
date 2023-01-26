import { createReducer } from '@reduxjs/toolkit';

const initialState = {
    myValue: 8 
}

export const customReducer = createReducer(initialState,{

    increment: (state, action) => {
        state.myValue += 1;
    },
    incrementByInput:(state, action) =>{
        state.myValue += parseInt(action.payload);
        // use this above statement's "action.payload" if you want to take value from user
    },
    decrement: (state, action) => {
        state.myValue -= 1;
    }
});