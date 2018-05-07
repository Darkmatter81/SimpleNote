import * as notebookActions from '../notebooks';


const notebooks = [
    {
        id: '1234',
        createdDate: '2017-06-18T06:39:29.205Z',
        name: 'Holiday Prep',
        notes: ['df20f1fd-274c-457e-932e-397df638fd68', '8c5ad87a-53a1-481b-a5bf-04c6bbfb28c3'],
    },
    {
        id: '5678',
        createdDate: '2017-10-06T16:32:55.745Z',
        name: 'Recipes',
        notes: ['20b45471-edf3-44db-9963-24c47b45c733', 'b3fca8e6-3854-4c3c-ab8c-14970c2604f6'],
    },
    {
        id: '​​​9123',
        createdDate: '2017-12-05T21:35:45.903Z',
        name: 'Blog Posts',
        notes: ['e678908d-3ecd-465c-a9b6-ce0e05b7519e', '795843ef-36f7-4db7-9268-291e96d11bfd'],
    }
];


describe ('actions', ()=>{
    it ('Should create an action to receive notebooks', ()=>{
        const expectedAction = {
            type: notebookActions.RECEIVE_NOTEBOOKS,
            notebooks
        };

        expect(notebookActions.receiveNotebooks(notebooks)).toEqual(expectedAction);
    });
});
