import * as actions from '../../actions/notebooks';
import { REMOVE_NOTE, ADD_NOTE } from '../../actions/notes';
import reducer from '../notebooks'; 

describe ('Notebook reducer', ()=>{
    it('Should return default empty state', ()=>{
        expect(reducer(null, {})).toEqual(null);
    });

    it('Should return the initial state', ()=>{
        const initialState = getNotebooks();
        expect(reducer(initialState, {type: 'foobar'})).toEqual(initialState);
    })
 
    it('State receives a list of notebooks', ()=>{
        const expected = getNotebooks();
        
        expect(
            reducer({}, { 
                type: actions.RECEIVE_NOTEBOOKS,
                notebooks: getNotebooks(),
            })
        )
        .toEqual(expected);
    });

    it ('Should add a new notebook to state', ()=>{
        const initialState = getNotebooks();
        const notebook = getNotebook();

        const result = reducer(initialState,
            {
                type: actions.ADD_NOTEBOOK,
                notebook,
            }
        );

        expect(result).toHaveProperty(notebook.id);
        expect(result).toMatchObject({'1000': notebook});  
    });

    it('Should remove a note notebook from the state', ()=>{
        const initialState = getNotebooks();
        const notebookToRemove = 
            {'1234':
                {
                    id: '1234',
                    createdDate: '149824673833',
                    name: 'My notebook',
                    notes: ['3456', '7890', '0123']
                }
            }
        
        expect(
            reducer(initialState, {
                type:actions.REMOVE_NOTEBOOK,
                id: '1234'
            })
        )
        .not.toMatchObject(notebookToRemove);
    });

    it('Should remove a note that is associated with a notebook', ()=>{
        const result = reducer(getNotebooks(), {
            type: REMOVE_NOTE,
            id: '3456',
        });
        
        expect(result['1234'].notes)
            .not.toContain('3456');
    });

    it('Should associate a new note to an existing notebook', ()=>{
        const note = getNote();
        const initialState = getNotebooks();

        const result = reducer(initialState, {
            type:ADD_NOTE,
            note,
        });

        expect(result['1234'].notes)
            .toContain(note.id);
    });
});
 
const  getNote = () =>{
    return {
        id: '1000',
        dateCreated: '149824673833',
        lastUpdated: '149824673833',
        notebookId: '1234',
        title: 'My new note',
        body:'This is a new note',
    }
}

const getNotebook = ()=>{
    return {
        id: '1000',
        createdDate:'149824673833',
        name: 'Notebook',
        notes:[], 
    }
}

const getNotebooks = () => {
    return {
        '1234':
        {
            id: '1234',
            createdDate: '149824673833',
            name: 'My notebook',
            notes: ['3456', '7890', '0123', '3332', '3566']
        },
        '6744':
        {
            id: '6744',
            createdDate: '149824673833',
            name: 'Blog Ideas',
            notes: ['4564', '2390', '3353']
        }
    };
}