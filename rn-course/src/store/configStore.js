import {createStore, combineReducers} from 'redux';

import placesReducer from './reducers/places';


const rootReducer = combineReducers({
    places: placesReducer
});


const configStore =()=>{
    return createStore(rootReducer);
}


export default configStore;