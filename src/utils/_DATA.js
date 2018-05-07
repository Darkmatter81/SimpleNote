const notebooks = [
    {
        id: '​​​​​97bdc08d-ac4e-4d52-b31a-03ab8de3d52d​​​​​',
        createdDate: '2017-06-18T06:39:29.205Z',
        name: 'Holiday Prep',
        notes: ['df20f1fd-274c-457e-932e-397df638fd68', '8c5ad87a-53a1-481b-a5bf-04c6bbfb28c3'],
    },
    {
        id: '​​​​​011700b1-b097-4761-b86f-4ab934887d61​​​​​',
        createdDate: '2017-10-06T16:32:55.745Z',
        name: 'Recipes',
        notes: ['20b45471-edf3-44db-9963-24c47b45c733', 'b3fca8e6-3854-4c3c-ab8c-14970c2604f6'],
    },
    {
        id: '​​​​​33cd9bee-1c93-4b70-9fd1-88dbe5d13e2a​​​​​',
        createdDate: '2017-12-05T21:35:45.903Z',
        name: 'Blog Posts',
        notes: ['e678908d-3ecd-465c-a9b6-ce0e05b7519e', '795843ef-36f7-4db7-9268-291e96d11bfd'],
    },
];

const notes = [
    {
        id: 'df20f1fd-274c-457e-932e-397df638fd68',
        notebookId:'97bdc08d-ac4e-4d52-b31a-03ab8de3d52d',
        dateCreated:'2017-06-23T16:16:43.002Z',
        lastUpdated:'2017-06-24T17:19:11.002Z',
        title:'Things to do in Rome',
        body:'* Visit the Colosseum\n, * Visit The Vatican ',
    },
    {
        id: '8c5ad87a-53a1-481b-a5bf-04c6bbfb28c3',
        notebookId:'97bdc08d-ac4e-4d52-b31a-03ab8de3d52d',
        dateCreated:'2017-06-27T23:19:36.150Z',
        lastUpdated:null,
        title:'Preparation',
        body:'Stuff I need to remove for this amazing trip',
    },
    {
        id: '20b45471-edf3-44db-9963-24c47b45c733',
        notebookId:'011700b1-b097-4761-b86f-4ab934887d61',
        dateCreated:'2017-10-06T16:33:55.745Z',
        lastUpdated:null,
        title:'Pasta Sauce',
        body:'A delicious home made pasta sauce for all seasons.',
    },
    {
        id: 'b3fca8e6-3854-4c3c-ab8c-14970c2604f6',
        notebookId:'011700b1-b097-4761-b86f-4ab934887d61',
        dateCreated:'2017-10-09T10:15:55.745Z',
        lastUpdated:'2017-10-10T14:45:55.745Z',
        title:'Beef stew',
        body:'A classic beef recipe the family will enjoy',
    },
    {
        id: 'e678908d-3ecd-465c-a9b6-ce0e05b7519e',
        notebookId:'33cd9bee-1c93-4b70-9fd1-88dbe5d13e2a',
        dateCreated:'2017-12-06T20:10:45.903Z',
        lastUpdated:null,
        title:'How to improve the quality of your sleep',
        body:`We spend a third of our lives sleeping, but it's sadily something we don't do right`,
    },
    {
        id: '795843ef-36f7-4db7-9268-291e96d11bfd',
        notebookId:'33cd9bee-1c93-4b70-9fd1-88dbe5d13e2a',
        dateCreated:'2017-12-08T11:00:45.903Z',
        lastUpdated:'2017-12-09T20:35:45.903Z',
        title:'Why body builders should try yoga',
        body:`Yoga strengthens the body in different ways that weight training alone can't`,
    },
]

export function _getNotebooks(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=> resolve(notebooks), 1000);
    })
}

export function _getNotes(){
    return new Promise((resolve, reject) => {
        setTimeout(()=> resolve(notes), 1000);
    })
}
