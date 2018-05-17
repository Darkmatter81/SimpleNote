import React, { Component, Fragment } from 'react';
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
        this.resizeTextArea();
    }

    resizeTextArea = ()=>{
        this.textArea.style.cssText='height:auto;';
        this.textArea.style.cssText='height:'+ this.textArea.scrollHeight+'px';
    }

    onClickNote = (e)=>{
        let editorFocus;

        if (e.target.tagName.toLowerCase() === 'p'){
            editorFocus = 'title';
        }
        else{
            editorFocus = 'body';
        }

        this.setState({
            editorOpen: true,
            editorFocus,
        })
    }

    onUpdateNote = (note) =>{

    } 

    render() {
        const { note, onDeleteNote } = this.props;

        return (
            <div className='note-panel note-item'>
               {this.state.editorOpen === false &&
                    <Fragment>
                        <p className='title'
                           onClick={this.onClickNote}>
                           {note.title}</p>
                        <textarea 
                                ref={(element)=>this.textArea = element}
                                onClick={this.onClickNote}
                                value={note.body}
                                readOnly>
                        </textarea>
                    </Fragment>
               }

               {this.state.editorOpen &&
                    <NoteEditor 
                        note={note}
                        editorFocus={this.state.editorFocus} 
                        onUpdateNote={this.onUpdateNote}  
                    />
               }

               <BasicNoteOptions onDeleteNoteClick = { ()=>onDeleteNote(note.id) }/>        
            </div>        
        );
    }
}

export default Note;