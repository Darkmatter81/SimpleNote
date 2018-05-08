import * as notesAction from '../../actions/notes';
import reducer from '../notes';

describe('Notes reducer', ()=>{
    it('Should return default empty state', ()=>{
        expect(reducer({},{})).toEqual({});
    });

    it('Should return state with list of notes', ()=>{
        const expected = getNotes();
        
        expect(
            reducer({}, {
                type: notesAction.RECEIVE_NOTES,
                notes: getNotes()
            })
        )
        .toEqual(expected);
    })
});

const getNotes = () =>{
    return {
       '123':
        {
            id: '123',
            dateCreated: '149824673833',
            lastUpdated: '149824673833',
            notebookId: '3451',
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
        }
    };
}