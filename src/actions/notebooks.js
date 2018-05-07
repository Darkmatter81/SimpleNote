export const RECEIVE_NOTEBOOKS = 'RECEIVE_NOTEBOOKS';

export const receiveNotebooks = (notebooks) => {
    return {
        type: RECEIVE_NOTEBOOKS,
        notebooks,
    }
}