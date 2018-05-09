import { showLoading, hideLoading } from 'react-redux-loading';
import { addNewNotebook, deleteNotebook } from '../utils/api';


export const RECEIVE_NOTEBOOKS = 'RECEIVE_NOTEBOOKS';
export const ADD_NOTEBOOK = 'ADD_NOTEBOOK';
export const REMOVE_NOTEBOOK = 'REMOVE_NOTEBOOK';

export const receiveNotebooks = (notebooks) => {
    return {
        type: RECEIVE_NOTEBOOKS,
        notebooks,
    };
}

export const addNotebook = (notebook) =>{
    return {
        type: ADD_NOTEBOOK,
        notebook,
    };
}

export const removeNotebook = (id) =>{
    return {
        type: REMOVE_NOTEBOOK,
        id,
    };
}

export const handleAddNotebook = (name) =>{
    return (dispatch)=>{
        dispatch(showLoading());
        return addNewNotebook(name)
            .then((newNotebook)=>{
                dispatch(addNotebook(newNotebook));
                dispatch(hideLoading());
            })
    }
}

export const handleRemoveNotebook = (id) => {
    return (dispatch) =>{
        dispatch(showLoading());
        return deleteNotebook(id)
            .then(()=>{
                dispatch(removeNotebook(id));
                dispatch(hideLoading());
            })
    }
}