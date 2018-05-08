import { generateID } from './helper';

const notebooks = {
    '97bdc08d-ac4e-4d52-b31a-03ab8de3d52d':
    {
        id: '​​​​​97bdc08d-ac4e-4d52-b31a-03ab8de3d52d​​​​​',
        createdDate: '1497767969205',
        name: 'Holiday Prep',
        notes: ['df20f1fd-274c-457e-932e-397df638fd68', '8c5ad87a-53a1-481b-a5bf-04c6bbfb28c3'],
    },
    '​​​​​011700b1-b097-4761-b86f-4ab934887d61​​​​​':
    {
        id: '​​​​​011700b1-b097-4761-b86f-4ab934887d61​​​​​',
        createdDate: '1507307575745',
        name: 'Recipes',
        notes: ['20b45471-edf3-44db-9963-24c47b45c733', 'b3fca8e6-3854-4c3c-ab8c-14970c2604f6'],
    },
    '​​​​​33cd9bee-1c93-4b70-9fd1-88dbe5d13e2a​​​​​':
    {
        id: '​​​​​33cd9bee-1c93-4b70-9fd1-88dbe5d13e2a​​​​​',
        createdDate: '1512509745903',
        name: 'Blog Posts',
        notes: ['e678908d-3ecd-465c-a9b6-ce0e05b7519e', '795843ef-36f7-4db7-9268-291e96d11bfd'],
    }
};

const notes = {
    'df20f1fd-274c-457e-932e-397df638fd68':
    {
        id: 'df20f1fd-274c-457e-932e-397df638fd68',
        notebookId:'97bdc08d-ac4e-4d52-b31a-03ab8de3d52d',
        dateCreated:'1498234603002',
        lastUpdated:'1545555953002',
        title:'Things to do in Rome',
        body:'* Visit the Colosseum\n, * Visit The Vatican ',
    },
    '8c5ad87a-53a1-481b-a5bf-04c6bbfb28c3':
    {
        id: '8c5ad87a-53a1-481b-a5bf-04c6bbfb28c3',
        notebookId:'97bdc08d-ac4e-4d52-b31a-03ab8de3d52d',
        dateCreated:'1498234604747',
        lastUpdated:null,
        title:'Preparation',
        body:'Stuff I need to remove for this amazing trip',
    },
    '20b45471-edf3-44db-9963-24c47b45c733':
    {
        id: '20b45471-edf3-44db-9963-24c47b45c733',
        notebookId:'011700b1-b097-4761-b86f-4ab934887d61',
        dateCreated:'1498234373485',
        lastUpdated:null,
        title:'Pasta Sauce',
        body:'A delicious home made pasta sauce for all seasons.',
    },
    'b3fca8e6-3854-4c3c-ab8c-14970c2604f6':
    {
        id: 'b3fca8e6-3854-4c3c-ab8c-14970c2604f6',
        notebookId:'011700b1-b097-4761-b86f-4ab934887d61',
        dateCreated:'149824673833',
        lastUpdated:'159824673833',
        title:'Beef stew',
        body:'A classic beef recipe the family will enjoy',
    },
    'e678908d-3ecd-465c-a9b6-ce0e05b7519e':
    {
        id: 'e678908d-3ecd-465c-a9b6-ce0e05b7519e',
        notebookId:'33cd9bee-1c93-4b70-9fd1-88dbe5d13e2a',
        dateCreated:'169824673833',
        lastUpdated:null,
        title:'How to improve the quality of your sleep',
        body:`We spend a third of our lives sleeping, but it's sadily something we don't do right`,
    },
    '795843ef-36f7-4db7-9268-291e96d11bfd':
    {
        id: '795843ef-36f7-4db7-9268-291e96d11bfd',
        notebookId:'33cd9bee-1c93-4b70-9fd1-88dbe5d13e2a',
        dateCreated:'1498243373833',
        lastUpdated:'1498246738332',
        title:'Why body builders should try yoga',
        body:`Yoga strengthens the body in different ways that weight training alone can't`,
    }
}

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

export function _addNotebook(name){
    const notebook = {
        id: generateID(),
        createdDate: Date.now(),
        name,
        notes: [],
    }   
    
    return new Promise((resolve, reject)=>{
        setTimeout(()=>resolve(notebook), 1000);
    })
}