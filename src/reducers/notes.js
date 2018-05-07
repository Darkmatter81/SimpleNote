import {RECEIVE_NOTES} from '../actions/notes';

export default function (state={}, action){
    switch (action.type){
        case RECEIVE_NOTES:
            return {
                ...state,
                notes: action.notes
            };
        default:
            return state;
    }
}