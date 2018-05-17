import { generateID, getLatency } from './helper';

const notebooks = {
    '64a0dfa3-f733-4181-b076-e151ac5444e1':
    {
        id: '64a0dfa3-f733-4181-b076-e151ac5444e1',
        createdDate: 1497767969205,
        name: 'Backpacking trip of a life time to Thailand',
        notes: ['df20f1fd-274c-457e-932e-397df638fd68', '8c5ad87a-53a1-481b-a5bf-04c6bbfb28c3'],
    },
    '4174e999-8f03-4da7-b8f3-28ed0cf0304a':
    {
        id: '4174e999-8f03-4da7-b8f3-28ed0cf0304a',
        createdDate: 1507307575745,
        name: 'Recipes',
        notes: ['20b45471-edf3-44db-9963-24c47b45c733', 'b3fca8e6-3854-4c3c-ab8c-14970c2604f6'],
    },
    '26824f1d-65eb-4c70-a288-dc85533dde08':
    {
        id: '26824f1d-65eb-4c70-a288-dc85533dde08',
        createdDate: 1512509745903,
        name: 'Blog Posts',
        notes: ['e678908d-3ecd-465c-a9b6-ce0e05b7519e', '795843ef-36f7-4db7-9268-291e96d11bfd'],
    }
};

const notes = {
    'df20f1fd-274c-457e-932e-397df638fd68':
    {
        id: 'df20f1fd-274c-457e-932e-397df638fd68',
        notebookId:'64a0dfa3-f733-4181-b076-e151ac5444e1',
        dateCreated:1498234603002,
        lastUpdated:1545555953002,
        title:'Things to do in Rome',
        body:'* Visit the Colosseum\n, * Visit The Vatican ',
    },
    '8c5ad87a-53a1-481b-a5bf-04c6bbfb28c3':
    {
        id: '8c5ad87a-53a1-481b-a5bf-04c6bbfb28c3',
        notebookId:'64a0dfa3-f733-4181-b076-e151ac5444e1',
        dateCreated:1498234604747,
        lastUpdated:null,
        title:'Preparation',
        body:'Stuff I need to remove for this amazing trip. I need to do more research on what to do and see when I get to Thailand\r Stuff I need to remove for this amazing trip. I need to do more research on what to do and see when I get to Thailand\nStuff I need to remove for this amazing trip. I need to do more research on what to do and see when I get to Thailand',
    },
    '20b45471-edf3-44db-9963-24c47b45c733':
    {
        id: '20b45471-edf3-44db-9963-24c47b45c733',
        notebookId:'4174e999-8f03-4da7-b8f3-28ed0cf0304a',
        dateCreated:1498234373485,
        lastUpdated:null,
        title:'Pasta Sauce',
        body:'A delicious home made pasta sauce for all seasons.',
    },
    'b3fca8e6-3854-4c3c-ab8c-14970c2604f6':
    {
        id: 'b3fca8e6-3854-4c3c-ab8c-14970c2604f6',
        notebookId:'4174e999-8f03-4da7-b8f3-28ed0cf0304a',
        dateCreated:149824673833,
        lastUpdated:159824673833,
        title:'Beef stew',
        body:'A classic beef recipe the family will enjoy',
    }, 
    'e678908d-3ecd-465c-a9b6-ce0e05b7519e':
    {
        id: 'e678908d-3ecd-465c-a9b6-ce0e05b7519e',
        notebookId:'26824f1d-65eb-4c70-a288-dc85533dde08',
        dateCreated:169824673833,
        lastUpdated:null,
        title:'How to improve the quality of your sleep',
        body:`We spend a third of our lives sleeping, but it's sadly something we don't do right`,
    },
    '795843ef-36f7-4db7-9268-291e96d11bfd':
    {
        id: '795843ef-36f7-4db7-9268-291e96d11bfd',
        notebookId:'26824f1d-65eb-4c70-a288-dc85533dde08',
        dateCreated:1498243373833,
        lastUpdated:1498246738332,
        title:'Why body builders should try yoga',
        body:`Yoga strengthens the body in different ways that weight training alone can't`,
    }
}

export function _getNotebooks(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=> resolve(notebooks), getLatency());
    })
}

export function _getNotes(){
    return new Promise((resolve, reject) => {
        setTimeout(()=> resolve(notes), getLatency());
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
        setTimeout(()=>resolve(notebook), getLatency());
    })
}

export function _removeNotebook(id){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>resolve(), getLatency());
    })
}

export function _removeNote(id){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>resolve(), getLatency());
    })
}

export function _updateNote(note){
    note.lastUpdated = Date.now();
    return new Promise((resolve, reject)=>{
        setTimeout(()=>resolve(note), getLatency());
    })
}

export function _addNote(note){
    note.id = generateID();
    note.dateCreated = Date.now();
    note.lastUpdated = null;
    
    return new Promise((resolve, reject) =>{
        setTimeout(()=>resolve(note), getLatency());
    })
}