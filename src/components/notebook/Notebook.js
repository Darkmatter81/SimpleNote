import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';

import '../styles/notebook.css';
import { updateNotebookName, handleUpdateNotebookName } from '../../actions/notebooks';

class Notebook extends Component {
    state = { editingName: false, notebookName:'' }

    static propTypes = {
        notebook: PropTypes.object.isRequired,
        onDelete: PropTypes.func.isRequired,
    };

    componentDidMount(){
        this.setState({notebookName: this.props.notebook.name});
    }

    onNotebookClick = (e)=>{
        if (this.state.editingName !== true){ 
            if (!this.optionsBar.contains(e.target)){
                this.props.history.push(`/notebook/${this.props.notebook.id}`);
            }
        } 
    }

    onEditNameClick = (e) =>{
        this.setState({editingName:true, notebookName: this.props.notebook.name});
    }

    onChangeNameKeyDown = (e) =>{
        if (e.keyCode === 13){
            this.updateNotebookName();
        }
    } 

    onNotebookNameChange = (e) => {
        const value = e.target.value;
        this.setState(()=>({notebookName:value}));
    }

    updateNotebookName = () =>{
        if (this.state.notebookName !== ''){
            this.props.dispatch(handleUpdateNotebookName(this.props.notebook.id, this.state.notebookName));
        }
        this.setState({editingName: false});
    }

    render() {
        const { notebook } = this.props;

        return (
            <div className='notebook-item note-panel' 
                 style={{cursor:'pointer'}}
                 onClick={this.onNotebookClick}>
             
                {this.state.editingName !== true &&
                    <Fragment>
                        <div className='heading'>
                            <span className='notebook-name'>{notebook.name}</span>
                            <span>({notebook.notes.length})</span>
                        </div>
                    </Fragment>
                }
                
                {/* Notebook name editing input */}
                {this.state.editingName === true &&
                    <input 
                        id='name-edit-field'
                        placeholder={'Change notebook name...'}
                        value={this.state.notebookName}
                        onChange={this.onNotebookNameChange}
                        onKeyDown={this.onChangeNameKeyDown} 
                        autoFocus/>
                }

                <div className='options'
                    ref={(node)=>this.optionsBar = node}>
                    {this.state.editingName === false &&
                        <Fragment>
                            <i className="fas fa-pencil-alt"
                                onClick={this.onEditNameClick}
                                />
                            <i className="far fa-trash-alt"
                                onClick={()=>this.props.onDelete(notebook.id)}
                                title='Delete notebook'
                                />
                        </Fragment>
                    }
                    
                    {this.state.editingName === true &&
                        <i className="fas fa-check"
                            onClick={this.updateNotebookName}
                            title='Change notebook name'
                        />
                    }
                </div>
            </div>
        );
    }
}

const notebook = withRouter(Notebook);
 
export default connect()(notebook);