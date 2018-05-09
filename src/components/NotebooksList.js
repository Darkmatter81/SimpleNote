import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleAddNotebook, handleRemoveNotebook } from '../actions/notebooks';
import Notebook from './Notebook';

class NotebooksList extends Component {
    state = { newNoteBook: '' };

    onAddNotebookSubmit = (e) =>{
        e.preventDefault();
        this.props.dispatch(handleAddNotebook(this.state.newNoteBook));
        this.setState({newNoteBook: ''});
    }

    onInputChange = (e)=> {
        const value = e.target.value;
        this.setState({newNoteBook : value });
    }

    onDeleteNoteBook = (id) => {
        this.props.dispatch(handleRemoveNotebook(id));
    }

    render() {
        const { notebooks } = this.props;

        return (
            <div>
                <h2>Notebooks</h2>
                <ul>
                    {Object.keys(notebooks).map((book)=>(
                          <li key={book}>
                              <Notebook 
                                notebook={notebooks[book]}
                                onDelete={()=>this.onDeleteNoteBook(notebooks[book].id)}
                                />
                          </li>
                        )
                    )}
                </ul>

                <form onSubmit={this.onAddNotebookSubmit}>
                    <input 
                        onChange={this.onInputChange} 
                        value={this.state.newNoteBook} 
                        />
                    <button 
                        type='' 
                        onClick={this.onAddNotebookClick}
                        disabled={this.state.newNoteBook === ''}>Add Notebook</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = ({notebooks}) =>{
    return { notebooks };
}

export default connect(mapStateToProps)(NotebooksList);