import * as notebookActions from '../notebooks';


describe ('Notebook actions', ()=>{
    it ('Should create an action to receive notebooks', ()=>{
        const expectedAction = {
            type: notebookActions.RECEIVE_NOTEBOOKS,
            notebooks: getNotebooks()
        };

        expect(notebookActions.receiveNotebooks(getNotebooks())).toEqual(expectedAction);
    });

    it ('Show create an action to add notebook', ()=>{
        const expected = {
            type: notebookActions.ADD_NOTEBOOK,
            notebook:getNotebook()
        }
        
        expect(notebookActions.addNotebook(getNotebook())).toEqual(expected);
    });

    it('Should create an action to remove notebook by id', ()=>{
        const expected = {
            type: notebookActions.REMOVE_NOTEBOOK,
            id: '1000'
        };

        expect(notebookActions.removeNotebook('1000')).toEqual(expected);
    });
});

const getNotebook = ()=>{
    return {
        'id': '1000',
        'createdDate': '2017-06-18T06:39:29.205Z',
        'name': 'Notebook',
        'notes': [],
    }
}

const getNotebooks = ()=>{
    return {
        '1234':
        {
            id: '1234',
            createdDate: '2017-06-18T06:39:29.205Z',
            name: 'Holiday Prep',
            notes: ['df20f1fd-274c-457e-932e-397df638fd68', '8c5ad87a-53a1-481b-a5bf-04c6bbfb28c3'],
        },
        '5678':
        {
            id: '5678',
            createdDate: '2017-10-06T16:32:55.745Z',
            name: 'Recipes',
            notes: ['20b45471-edf3-44db-9963-24c47b45c733', 'b3fca8e6-3854-4c3c-ab8c-14970c2604f6'],
        }
    }
}