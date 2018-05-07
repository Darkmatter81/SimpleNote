import { getInitialData } from '../utils/api';
import { receiveNotes } from './notes';
import { receiveNotebooks } from './notebooks';
import { showLoading, hideLoading } from 'react-redux-loading';

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