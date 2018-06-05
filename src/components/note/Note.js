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

    componentDidMount(){
        this.setState({
            note: {...this.props.note}
        });      

        document.addEventListener('mousedown', this.handleMouseDown);
    }

    componentWillUnmount(){
        document.removeEventListener('mousedown', this.handleMouseDown);
    }

    handleMouseDown = (e)=>{
        if (!this.noteItem.contains(e.target)){
            this.setState({editorOpen : false});
            console.log('no longer editing')
        }
    }

    onUpdateNote = (note) =>{
        this.setState ({
            note: { ...note }
        });
    } 

    onClickNote = (e) =>{
        if (!this.state.editorOpen){
            this.setState({editorOpen: true});
        }
    }

    render() {
        const { onDeleteNote, onOpenNote } = this.props;
        const { note } = this.state;

        if (!note){
            return null;
        }

        return (
            <div 
                className='note-panel note-item'
                ref={(element)=>this.noteItem = element}>
                
                <input id='title' 
                       defaultValue={note.title}
                       onFocus={() => onOpenNote(note.id)}
                />

                <textarea id='body'
                        defaultValue={note.body}
                        onFocus={() => onOpenNote(note)}
                />

               <BasicNoteOptions onDeleteNoteClick = { ()=>onDeleteNote(note.id) }/>        
            </div>        
        );
    }
}

export default Note;