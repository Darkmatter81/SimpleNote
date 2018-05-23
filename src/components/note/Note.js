import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BasicNoteOptions from './BasicNoteOptions';

import './Note.css'
import NoteEditor from './NoteEditor';

class Note extends Component {
    state = { editorOpen: false };

    static propTypes = {
        note: PropTypes.object.isRequired,
        onDeleteNote:PropTypes.func.isRequired,
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

    onClickEditor = (e) =>{
        console.log('clicking editor');
        if (!this.state.editorOpen){
            this.setState({editorOpen: true});
        }
    }

    render() {
        const { onDeleteNote } = this.props;
        const { note } = this.state;

        if (!note){
            return null;
        }

        let classNames = ['note-panel', 'note-item'];
        if (this.state.editorOpen){
            classNames.push('editing');
        }

        return (
            <div 
                className={classNames.join(' ')} 
                ref={(element)=>this.noteItem = element}>
                
                <NoteEditor 
                    ref={(element) => this.editor = element}
                    note={note}
                    onGetFocus = {this.onClickEditor}
                    editorFocus={this.state.editorFocus} 
                    onUpdateNote={this.onUpdateNote }  
                />
            
               <BasicNoteOptions onDeleteNoteClick = { ()=>onDeleteNote(note.id) }/>        
            </div>        
        );
    }
}

export default Note;