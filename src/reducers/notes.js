import { RECEIVE_NOTES } from '../actions/notes';
import { REMOVE_NOTEBOOK } from '../actions/notebooks'; 

export default function (state={}, action){
    switch (action.type){
        case RECEIVE_NOTES:
            return {
                ...state,
                ...action.notes,
            };
        case REMOVE_NOTEBOOK:
            const newState = {...state}
            Object.keys(newState).forEach((key)=>{
                if (newState[key].notebookId === action.id){
                    delete newState[key];
                }
            });
            return newState;
        default:
            return state;
    }
}