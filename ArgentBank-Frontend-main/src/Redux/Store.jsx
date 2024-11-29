import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers'; // Votre réducteur combiné  

const store = configureStore({
    reducer: rootReducer,
});

export default store;