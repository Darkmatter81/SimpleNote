import React, { Component } from 'react';
import { connect } from 'react-redux';
import Note from './Note';
import { handleRemoveNote } from '../../actions/notes';
import NewNoteBar from './NewNoteBar';

import '../styles/NotesList.css';

class NotesList extends Component {
    state = {  };

    onRemoveNoteClick = (id) =>{
        this.props.dispatch( handleRemoveNote(id) );
    }

    onAddNoteClick = ()=>{
        this.props.history.replace({pathname:'/add', params: {notebookId: this.props.notebook.id}});
    }

    render() {
        const { notebook, notes } = this.props;

        if (!notebook){
            return (<p>Notebook not found</p>);
        }

        return (
            <div>
                <div className='row'>
                    <div className='col-12 text-center'>
                        <h2>{notebook.name}</h2>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-12'>
                        <NewNoteBar notebookId = {notebook.id}/>
                    </div>
                </div>

                <ul className=''>
                    {notes.map((note)=>(
                        <li className='' key={note.id}>
                          <Note 
                            note={note}
                            onDeleteNote = {()=>this.onRemoveNoteClick(note.id)}
                            />
                       </li>
                   ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = ({ notebooks, notes }, { match })=>{
    const { id } = match.params;
    const notebook = notebooks[id];

    // Check valid notebook
    if (!notebook){
        return {
            notebook: null
        }
    }

    // extract notes from notebook
    const notesList = notebooks[id].notes.map((noteId)=>{
        return notes[noteId];
    });
    
    return {
        notebook,
        notes: notesList
    };
}

export default connect(mapStateToProps)(NotesList)