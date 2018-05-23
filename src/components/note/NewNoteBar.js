import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import NoteEditor from './NoteEditor';
import PropTypes from 'prop-types';

import './NewNoteBar.css';
import { handleAddNote } from '../../actions/notes';
import BasicNoteOptions from './BasicNoteOptions';

class NewNoteBar extends Component {
    state = { editorOpen: false, 
              note: {title:'', body:''}  
            };

    static propTypes = {
        notebookId: PropTypes.string.isRequired,
    };

    componentDidMount(){
        document.addEventListener('mousedown', this.handleMouseDown);
    }

    componentWillUnmount(){
        document.removeEventListener('mousedown', this.handleMouseDown);
    }

    handleMouseDown = (e) =>{
        // Close this panel if user clicks outside and create new note 
        // If they have typed something
        if (this.state.editorOpen){
            if (!this.newNoteBar.contains(e.target)){
                this.onAddNote();
            }
        }
    }

    expandEditor = (e) =>{ 
        // crearte new note before opening editor
        this.setState({
            note: {
                title:'',
                body:'',
                notebookId: this.props.notebookId,
            }
        }, ()=>this.setState({editorOpen: true})); 
    }

    onUpdateNote = (note) =>{
        this.setState ({
            note: { ...note }
        });
    }

    onAddNote = () =>{
        const { note } = this.state;
        if (note.title !=='' || note.body !== ''){
            this.props.dispatch(handleAddNote(note));
        }

        this.setState({editorOpen: false });
    }
   
    render() {
        return (
            <div className='note-panel new-note-bar'
                 ref={(element)=>this.newNoteBar = element} >
                {this.state.editorOpen !== true &&
                    <p style={{color:'#757575', cursor:'text'}} onClick={this.expandEditor}>
                         Take a note...
                    </p>
                }
                
                {this.state.editorOpen === true &&
                    <Fragment>
                        <NoteEditor note={this.state.note}
                            editable={true}
                            onUpdateNote={this.onUpdateNote}
                        />
                        <BasicNoteOptions 
                            onUpdateNoteClick={this.onAddNote}/>
                    </Fragment>
                }
                
            </div>
        );
    }
}



export default connect()(NewNoteBar);