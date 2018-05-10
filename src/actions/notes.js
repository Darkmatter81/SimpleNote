import { deleteNote } from '../utils/api';
import { showLoading, hideLoading } from 'react-redux-loading';

export const RECEIVE_NOTES = 'RECEIVE_NOTES';
export const REMOVE_NOTE = 'REMOVE_NOTE';


export const receiveNotes = (notes) =>{
    return {
        type: RECEIVE_NOTES,
        notes,
    }
}

export const removeNote = (id) =>{
    return {
        type: REMOVE_NOTE,
        id
    };
}

export const handleRemoveNote = (id) =>{
    return (dispatch) => {
        dispatch(showLoading());
        return deleteNote(id)
            .then(()=>{
                dispatch(removeNote(id));
                dispatch(hideLoading());
            })
    }
}