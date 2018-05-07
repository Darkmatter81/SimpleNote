export const RECEIVE_NOTES = 'RECEIVE_NOTES';

export const receiveNotes = (notes) =>{
    return {
        type: RECEIVE_NOTES,
        notes,
    }
}