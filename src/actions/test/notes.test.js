import * as notesActions from '../notes';

describe('Notes actions', ()=>{
    it('Should create a receiveNotes action', ()=>{
        const expected = {
            type: notesActions.RECEIVE_NOTES,
            notes: getNotes()
        };

        expect(notesActions.receiveNotes(getNotes()))
            .toEqual(expected);
    });

    it ('Should create a remove note action', ()=>{
        const expected = {
            type: notesActions.REMOVE_NOTE,
            id: 1000,
        };

        expect(notesActions.removeNote(1000))
            .toEqual(expected);
    })

    it ('Should create an update note action', ()=>{
        const expected = {
            type: notesActions.UPDATE_NOTE,
            note: getNote()
        }

        expect(notesActions.updateNote(getNote()))
            .toEqual(expected);
    });

});

const getNote = () => {
    return {
        '123':
        {
            id: '123',
            dateCreated: '149824673833',
            lastUpdated: '149824673833',
            notebookId: '1000',
            title: 'Trip to Rome',
            body:'The best trip in the world',
        }
    };
}

const getNotes = () =>{
    return {
       '123':
        {
            id: '123',
            dateCreated: '149824673833',
            lastUpdated: '149824673833',
            notebookId: '1000',
            title: 'Trip to Rome',
            body:'The best trip in the world',
        },
        '456': 
        {
            id: '456',
            dateCreated: '149824673823',
            lastUpdated: '149824373833',
            notebookId: '3451',
            title: 'Why yoga is important',
            body:'The many benefits of yoga etc etc',
        },
        '768':
        {
            id: '768',
            dateCreated: '149824673823',
            lastUpdated: '149824373833',
            notebookId: '1000',
            title: 'Why yoga is important',
            body:'The many benefits of yoga etc etc',
        }
    };
}


