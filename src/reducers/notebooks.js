import { 
    RECEIVE_NOTEBOOKS, 
    ADD_NOTEBOOK,
    REMOVE_NOTEBOOK, 
    UPDATE_NOTEBOOK_NAME} from '../actions/notebooks';
import { REMOVE_NOTE, ADD_NOTE } from '../actions/notes';

export default function (state=null, action){
    switch (action.type){
        case RECEIVE_NOTEBOOKS:
            return {
                ...state,
                ...action.notebooks,
            }           
        case ADD_NOTEBOOK: {
            const id = action.notebook.id;
            return {
                ...state,
                [id]:action.notebook,
            }
        }
        case REMOVE_NOTEBOOK: {
            const newState = {...state};
            delete newState[action.id];

            return newState;
        }
        case REMOVE_NOTE: {
            // remove specific note id from notebook
            const newState = JSON.parse(JSON.stringify(state)); 
        
            Object.keys(newState).forEach((key)=>{
                if (newState[key].notes.includes(action.id)){
                    newState[key].notes = 
                        newState[key].notes.filter((noteId)=>
                            noteId !== action.id
                        );
                }
            });
         
            return newState;
        }      
        case ADD_NOTE:{
            const notebook = state[action.note.notebookId];

            return {
                ...state,
                [notebook.id]:{
                    ...notebook,
                    notes:notebook.notes.concat([action.note.id])
                }              
            }
        }
        case UPDATE_NOTEBOOK_NAME:
            const notebook = state[action.id]
            return {
                ...state,
                [notebook.id]:{
                    ...notebook,
                    name:action.name,
                }
            };
        default:
            return state;
    }
}