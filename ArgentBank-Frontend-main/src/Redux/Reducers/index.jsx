// reducers/index.js  
import { combineReducers } from 'redux';
import profileReducer from './profileReducer'; // Assurez-vous d'importer vos reducers correctement  

const rootReducer = combineReducers({
    profile: profileReducer,
    // Ajoutez d'autres reducers au besoin  
});

export default rootReducer;