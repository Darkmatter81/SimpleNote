import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleAddNote } from '../../actions/notes';

class AddNote extends Component {
    state = {  }

    onNoteAdd = (e) =>{
        e.preventDefault();
        this.props.dispatch(handleAddNote(this.state.note));
        this.returnToNotebook();
    }

    componentDidMount(){
        const { notebookId } = this.props;
        if ( notebookId ){
            this.setState({
                note: {
                    title: '',
                    body: '',
                    notebookId: this.props.notebookId,
                }
            });
        }
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

    returnToNotebook = () =>{
        this.props.history.push(`/notebook/${this.state.note.notebookId}`);
    }

    render() {
        const { note } = this.state;

        if (!note){
            return <p>Cannot create note in invalid notebook</p>
        }
       
        return (
            <div>
                <form onSubmit = {this.onNoteAdd}>
                    <div>
                        <input 
                            onChange = {this.onTitleChange}
                            value = {note.title}
                            autoFocus={true}
                        />
                    </div>

                    <div>
                        <textarea
                            onChange = {this.onBodyChange}
                            value = {note.body}
                        />
                    </div>
                    
                    <button type='submit'>Add</button>
                    <button
                        onClick={()=>this.returnToNotebook()}>
                        Cancel
                    </button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = ({ notebooks }, { location }) =>{
    if (!location.params) return { notebookId: null };

    const id = location.params.notebookId;
    const notebook = notebooks[id];

    return {
        notebookId: notebook ? notebook.id : null
    };
}

export default connect(mapStateToProps)(AddNote);