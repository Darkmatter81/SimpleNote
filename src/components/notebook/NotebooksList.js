import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleAddNotebook, handleRemoveNotebook } from '../../actions/notebooks';
import Notebook from './Notebook';

import '../styles/NotebooksList.css';

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
                <div className='row'>
                    <div className='col-md-12 text-center'>
                        <h2>Notebooks</h2>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-12 col-sm-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2'>
                        <form id='add-notebook-panel' className='note-panel' onSubmit={this.onAddNotebookSubmit}>
                            <input
                                id='notebook-input'
                                placeholder='Add new notebook...'
                                onChange={this.onInputChange} 
                                value={this.state.newNoteBook} 
                                />
                            <button 
                                className='add-notebook-btn'
                                disabled={this.state.newNoteBook === ''}
                                title='Add new notebook'>
                                    <i className="fas fa-plus"></i>
                            </button>
                        </form>
                    </div>
                </div>

                <div className ='row'>
                    <div className='col-12 col-sm-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2'>
                        <ul className='notebook-list'>
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
                    </div>
                </div>              
            </div>
        );
    }
}

const mapStateToProps = ({notebooks}) =>{
    return { notebooks };
}

export default connect(mapStateToProps)(NotebooksList);