import {createStore, combineReducers, compose} from 'redux';

import placesReducer from './reducers/places';


const rootReducer = combineReducers({
    places: placesReducer
});


// https://github.com/jhen0409/react-native-debugger/blob/master/docs/redux-devtools-integration.md
let composeEnhancers = compose;
if (__DEV__) {
    composeEnhancers == window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}


const configStore =()=>{
    return createStore(rootReducer, composeEnhancers());
}

export default configStore;