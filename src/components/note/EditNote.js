import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/EditNote.css';
import NoteEditor from './NoteEditor';
import { handleUpdateNote } from '../../actions/notes';

class EditNote extends Component {
    state = {updateTimeOut: 0, note: null};

    componentDidMount(){
        this.setState({note: this.props.note});

        document.addEventListener('mousedown', this.handleMouseDown);
    }

    componentWillUnmount(){
        document.removeEventListener('mousedown', this.handleMouseDown);
        clearTimeout(this.state.updateTimeOut);
    }

    handleMouseDown = (e)=>{
        if (!this.editorPanel.contains(e.target)){
            this.closeNote();
        }
    }

    onNoteUpdate = (note) =>{
        if (this.state.updateTimeOut !==0 ){
            clearTimeout(this.state.updateTimeOut);
        }

        const timeOut = setTimeout(this.updateNote, 2000);
        this.setState({updateTimeOut: timeOut, note});
    }

    updateNote = () => {
        this.props.dispatch(handleUpdateNote(this.state.note));
        this.setState({updateTimeOut: 0 });
    }

    closeNote = () => {
        // clear update timer and dispatch pending note to be saved
        if (this.state.updateTimeOut !== 0){
            clearTimeout(this.state.updateTimeOut);
            this.updateNote();
        }

        this.props.onClose();
    }

    render() {
        const { note } = this.state;

        if (note === null){
            return null;
        }

        return (
            <div className='backdrop'>
               <div className='note-panel edit-note' ref={(element)=>this.editorPanel = element}>
                    <NoteEditor 
                        note = {note}
                        onUpdateNote = {this.onNoteUpdate}
                        editorFocus = {this.props.editorFocus}
                    />
               </div>
            </div>
        );
    }
}

export default connect()(EditNote);