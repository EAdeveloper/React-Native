import { 
    ADD_PLACE, 
    DELETE_PLACE, 
    SELECT_PLACE, 
    DESELECTE_PLACE} from './actionTypes';


export const addPlace = (placeName)=>{
    return{
        type: ADD_PLACE, 
        placeName: placeName
    };
};


export const deletePlace= ()=>{
    return{
        type: DELETE_PLACE
    };
};

export const selectePlace =(key)=>{
    return{
        type: SELECT_PLACE,
        placeKey: key
    };
};

export const deselectePlace=()=>{
    return{
        type: DESELECTE_PLACE
    };
};