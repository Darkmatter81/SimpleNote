import React, { Component } from 'react';
import { connect } from 'react-redux';

import { handleUpdateNote } from '../actions/notes';

class EditNote extends Component {
    state = {  }

    onNoteUpdate = (e) =>{
        e.preventDefault();
        this.props.dispatch(handleUpdateNote(this.state.note));
        this.props.history.push(`/notebook/${this.state.note.notebookId}`);
    }

    componentDidMount(){
        const { note } = this.props;
        this.setState({
            note: note !== null ? { ...note } : null
        });
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
        const { note } = this.state;

        if (!note){
            return <p>Note not found</p>
        }

        return (
            <div>
                <form onSubmit = {this.onNoteUpdate}>
                    <div>
                        <input 
                            onChange = {this.onTitleChange}
                            value = {note.title}
                        />
                    </div>

                    <div>
                        <textarea
                            onChange = {this.onBodyChange}
                            value = {note.body} 
                        />
                    </div>
                    
                    <button>Update</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = ({notes}, {match}) =>{
    const note = notes[match.params.id];

    return {
        note: note !== undefined ? note : null
    };
}

export default connect(mapStateToProps)(EditNote);