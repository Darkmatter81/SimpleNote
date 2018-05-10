import { 
    RECEIVE_NOTES,
    REMOVE_NOTE
 } from '../actions/notes';

import { REMOVE_NOTEBOOK } from '../actions/notebooks'; 

export default function (state = null, action){
    switch (action.type){
        case RECEIVE_NOTES:
            return {
                ...state,
                ...action.notes,
            };
        case REMOVE_NOTEBOOK: { 
            // Removing notebook removes associated notes
            const newState = {...state};
            Object.keys(newState).forEach((key)=>{
                if (newState[key].notebookId === action.id){
                    delete newState[key];
                }
            });
            return newState;
        }
        case REMOVE_NOTE:{
            const newState = {...state};
            Object.keys(newState).forEach((key)=>{
                if (newState[key].id === action.id){
                    delete newState[key];
                }
            });
            return newState;
        }
        default:
            return state;
    }
}