import { 
    RECEIVE_NOTEBOOKS, 
    ADD_NOTEBOOK,
    REMOVE_NOTEBOOK } from '../actions/notebooks';

export default function (state={}, action){
    switch (action.type){
        case RECEIVE_NOTEBOOKS:
            return {
                ...state,
                ...action.notebooks,
            }           
        case ADD_NOTEBOOK:
            const id = action.notebook.id;
            return {
                ...state,
                [id]:action.notebook,
            }
        case REMOVE_NOTEBOOK:
            const newState = {...state};
            delete newState[action.id];
            return newState;
        default:
            return state;
    }
}