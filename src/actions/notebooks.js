export const RECEIVE_NOTEBOOKS = 'RECEIVE_NOTEBOOKS';
export const ADD_NOTEBOOK = 'ADD_NOTEBOOK';

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