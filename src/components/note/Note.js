import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BasicNoteOptions from './BasicNoteOptions';

import './Note.css'

class Note extends Component {
    state = {  };

    static propTypes = {
        note: PropTypes.object.isRequired,
        onDeleteNote:PropTypes.func.isRequired,
    };

    render() {
        const { note, onDeleteNote } = this.props;

        return (
            <div className='note-panel note-item'>
               <p className='title'>{note.title}</p>
               <p>{note.body}</p>

               <BasicNoteOptions onDelete = { ()=>onDeleteNote(note.id) }/>        
            </div>        
        );
    }
}

export default Note;