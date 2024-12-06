import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../src/Redux/Reducers'; // Votre réducteur combiné  

const store = configureStore({
    reducer: rootReducer,
});

export default store;