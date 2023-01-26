import {configureStore} from '@reduxjs/toolkit';
import { customReducer } from './../Reducers/Reducers';

const store = configureStore({
    reducer: {
        myCustomReducer: customReducer,
    }
});

export default store;