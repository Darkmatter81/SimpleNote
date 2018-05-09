import { _getNotebooks, 
         _getNotes, 
         _addNotebook,
        _removeNotebook } from './_DATA';

export function getInitialData(){
    return Promise.all([
            _getNotebooks(),
            _getNotes()
        ]);
}

export function addNewNotebook(name){
    return _addNotebook(name);
}

export function deleteNotebook(id){
    return _removeNotebook(id);
}