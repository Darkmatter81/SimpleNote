import { hideLoading, showLoading } from 'react-redux-loading';
import { getInitialData } from '../utils/api';
import { receiveNotebooks } from './notebooks';
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

