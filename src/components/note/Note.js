import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BasicNoteOptions from './BasicNoteOptions';

import '../styles/Note.css'

class Note extends Component {
    state = { editorOpen: false };

    static propTypes = {
        note: PropTypes.object.isRequired,
        onDeleteNote:PropTypes.func.isRequired,
        onOpenNote:PropTypes.func.isRequired,
    };

    render() {
        const { onDeleteNote, onOpenNote, note } = this.props;

        if (!note){
            return null;
        }

        return (
            <div 
                className='note-panel note-item'
                ref={(element)=>this.noteItem = element}>
                
                <textarea id='note-title' 
                       value={note.title}
                       onClick={() => onOpenNote(note, 'title')}
                       readOnly={true}
                />

                <textarea id='note-body'
                        value={note.body}
                        onClick={() => onOpenNote(note, 'body')}
                        readOnly={true}
                />

               <BasicNoteOptions onDeleteNoteClick = { ()=>onDeleteNote(note.id) }/>        
            </div>        
        );
    }
}

export default Note;