import * as notesAction from '../../actions/notes';
import { REMOVE_NOTEBOOK } from '../../actions/notebooks';
import { REMOVE_NOTE } from '../../actions/notes';

import reducer from '../notes';

describe('Notes reducer', ()=>{
    it('Should return default empty state', ()=>{
        expect(reducer(null,{})).toEqual(null);
    });

    it('Should return initial state', ()=>{
        const initialState = getNotes();
        expect(reducer(initialState, {})).toEqual(initialState);
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

    it('Should remove notes associated with deleted notebook',()=>{
        const expected = {'456':
            {
                id: '456',
                dateCreated: '149824673823',
                lastUpdated: '149824373833',
                notebookId: '3451',
                title: 'Why yoga is important',
                body:'The many benefits of yoga etc etc',
            }
        };

        expect (
            reducer(getNotes(), {
                type: REMOVE_NOTEBOOK,
                id: '1000'
            }) 
        ) 
        .toEqual(expected);
    });

    it('Should remove a note from the store', ()=>{
        expect(reducer(getNotes(), {
            type: REMOVE_NOTE,
            id: '123'
        }))
        .not.toMatchObject(getNote());
    });
});

const getNote = () =>{
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
    }
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
