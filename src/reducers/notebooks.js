import {RECEIVE_NOTEBOOKS} from '../actions/notebooks';

export default function (state={}, action){
    switch (action.type){
        case RECEIVE_NOTEBOOKS:
            return {
                ...state,
                notebooks: action.notebooks
            }
        default:
            return state;
    }
}