import PropTypes from 'prop-types';
import React, { Component } from 'react';
import '../styles/NoteEditor.css';

class NoteEditor extends Component {
    state = {note: null};

    static propTypes = {
        note:PropTypes.object.isRequired,
        onUpdateNote:PropTypes.func.isRequired,
        editable:PropTypes.bool,
        onGetFocus:PropTypes.func,
    };

    static defaultProps = {
        editable: true,
        editorFocus: 'body',
    };

    componentDidMount(){
        this.setState({
            note: this.props.note
        }, ()=>this.resizeTextArea(this.textArea));
    }

    onBodyChanged = (e) =>{
        this.resizeTextArea(e.target);

        const value = e.target.value;
        this.setState((prevState)=>({note : {
                ...prevState.note,
                body: value
            }
        }), ()=>this.props.onUpdateNote(this.state.note));
    }

    onTitleChanged = (e) =>{
        this.resizeTextArea(e.target);

        const value = e.target.value;
        this.setState((prevState)=>({ note: {
                ...prevState.note,
                title: value
            }
        }), ()=>this.props.onUpdateNote(this.state.note));
    }

    resizeTextArea = (textArea) =>{
        // Expand/Shrink text area depending on contents
        textArea.style.cssText='height:auto;';
        textArea.style.cssText='height:'+ textArea.scrollHeight+'px';
    }

    onGetFocus = () =>{
        if (this.props.onGetFocus !== undefined){
            this.props.onGetFocus();
        }
    }

    render() {
        const { note } = this.state;
        const { editable } = this.props;

        if (!note){
            return null;
        }

        return (
            <div className='note-editor' 
                ref={(element)=>this.noteEditor = element}
                onClick={()=>this.onGetFocus()}>
                <textarea
                    className='editor-title'
                    value={note.title}
                    placeholder='Title'
                    autoFocus={this.props.editorFocus === 'title'}
                    onChange={this.onTitleChanged}
                />       

                <textarea 
                    id='editor-body'
                    onChange={this.onBodyChanged} 
                    placeholder='Take a note...' 
                    value={note.body}
                    readOnly={!editable}
                    autoFocus={this.props.editorFocus === 'body'}
                    ref={(element)=>this.textArea = element}
                /> 
            </div>
        );
    }
}

export default NoteEditor;