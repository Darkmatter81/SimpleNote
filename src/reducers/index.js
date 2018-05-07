import { combineReducers } from 'redux';
import notebooks from './notebooks';
import notes from './notes';
import { loadingBarReducer } from 'react-redux-loading';

export default combineReducers ({
    notebooks, 
    notes, 
    loadingBar: loadingBarReducer
});


