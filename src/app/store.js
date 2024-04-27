import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {persistReducer} from 'reduxjs-toolkit-persist';
import storage from 'reduxjs-toolkit-persist/lib/storage'
import cartSlice from '../features/cartSlice'


const persistConfig = {
    key: 'root',
    storage: storage,
};

const reducers= combineReducers({
    cart: cartSlice,
});

const _persistedReducer = persistReducer(persistConfig, reducers);


const store = configureStore({
    reducer: _persistedReducer,
});


export default store



