import React, { Component } from 'react';
import { connect } from 'react-redux';

import { handleUpdateNote } from '../../actions/notes';

import '../styles/EditNote.css'
import NoteEditor from './NoteEditor';

class EditNote extends Component {
    state = {  }

    onNoteUpdate = (e) =>{
        e.preventDefault();
        this.props.dispatch(handleUpdateNote(this.state.note));
        this.props.history.push(`/notebook/${this.state.note.notebookId}`);
    }

    componentDidMount(){
     
    }

    onTitleChange = (e) =>{
        const value = e.target.value;
        this.setState({ note: {
                ...this.state.note,
                title: value
            }
        });
    }

    onBodyChange = (e) =>{
        const value = e.target.value;
        this.setState({note : {
                ...this.state.note,
                body: value
            }
        });
    }

    render() {
        const { note } = this.props;

        if (!note){
            return <p>Note not found</p>
        }

        return (
            <div className='backdrop'>
               <div className='edit-note note-panel'>
                    <NoteEditor note = {note} />
               </div>
            </div>
        );
    }
}

const mapStateToProps = ({notes}, {match}) =>{
}

export default connect(mapStateToProps)(EditNote);