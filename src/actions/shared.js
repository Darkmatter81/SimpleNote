import { hideLoading, showLoading } from 'react-redux-loading';
import { getInitialData, addNewNotebook } from '../utils/api';
import { receiveNotebooks, addNotebook } from './notebooks';
import { receiveNotes } from './notes';


export const handleInitialData = ()=> {
    return (dispatch) => {
        dispatch(showLoading());
        return getInitialData()
            .then(([notebooks, notes]) => {
                dispatch(receiveNotebooks(notebooks));
                dispatch(receiveNotes(notes));
                dispatch(hideLoading());
            })
    }
} 

export const handleAddNotebook = (name)=>{
    return (dispatch)=>{
        dispatch(showLoading());
        return addNewNotebook(name)
            .then((newNotebook)=>{
                dispatch(addNotebook(newNotebook));
                dispatch(hideLoading());
            })
    }
}