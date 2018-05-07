import * as notesAction from '../../actions/notes';
import reducer from '../notes';

describe('Notes reducer', ()=>{
    it('Should return default empty state', ()=>{
        expect(reducer({},{})).toEqual({});
    });

    it('Should return state with list of notes', ()=>{
        const expected = {
            notes: getNotes()
        }
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
    return [
        {
            id: '123',
            dateCreated: '2017-09-23T19:50:54.427Z',
            lastUpdated: '2017-09-26T19:50:54.427Z',
            notebookId: '3451',
            title: 'Trip to Rome',
            body:'The best trip in the world',
        },
        {
            id: '456',
            dateCreated: '2017-10-23T19:50:54.427Z',
            lastUpdated: '2017-10-26T19:50:54.427Z',
            notebookId: '3451',
            title: 'Why yoga is important',
            body:'The many benefits of yoga etc etc',
        },
    ];
}