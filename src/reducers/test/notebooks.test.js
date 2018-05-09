import * as actions from '../../actions/notebooks';
import reducer from '../notebooks'; 

describe ('Notebook reducer', ()=>{
    it('Should return default empty state', ()=>{
        expect(reducer(undefined, {})).toEqual({})
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
});
 
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
            notes: ['3456', '7890', '0123']
        },
        '6744':
        {
            id: '5678',
            createdDate: '149824673833',
            name: 'Blog Ideas',
            notes: ['4564', '2390', '3353']
        }
    };
}