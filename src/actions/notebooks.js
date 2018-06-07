import { showLoading, hideLoading } from 'react-redux-loading';
import { addNewNotebook, deleteNotebook, updateNoteBookName } from '../utils/api';


export const RECEIVE_NOTEBOOKS = 'RECEIVE_NOTEBOOKS';
export const ADD_NOTEBOOK = 'ADD_NOTEBOOK';
export const REMOVE_NOTEBOOK = 'REMOVE_NOTEBOOK';
export const UPDATE_NOTEBOOK_NAME = 'UPDATE_NOTEBOOK_NAME';

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

export const updateNotebookName = (id, name) =>{
    return{
        type: UPDATE_NOTEBOOK_NAME,
        id,
        name, 
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
            });
    }
}

export const handleUpdateNotebookName = (id, name) =>{
    return (dispatch) => {
        dispatch(showLoading());
        return updateNoteBookName(id, name)
            .then(()=>{
                dispatch(updateNotebookName(id, name));
                dispatch(hideLoading());
            });
    }
}