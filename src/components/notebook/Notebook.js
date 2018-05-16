import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom'

import './notebook.css';

class Notebook extends Component {
    state = {  }

    static propTypes = {
        notebook: PropTypes.object.isRequired,
        onDelete: PropTypes.func.isRequired,
    };

    onNotebookClick = (e)=>{
        if (!this.optionsBar.contains(e.target)){
            this.props.history.push(`/notebook/${this.props.notebook.id}`);
        }
    }

    render() {
        const { notebook } = this.props;

        return (
            <div className='notebook-item note-panel' 
                 style={{cursor:'pointer'}}
                 onClick={this.onNotebookClick}>
                <div className='heading'>
                    <span className='notebook-name'>{notebook.name}</span>
                    <span>({notebook.notes.length})</span>
                </div>
                
                <div className='options'
                    ref={(node)=>this.optionsBar = node}>
                    <i className="fas fa-pencil-alt"/>
                    <i className="far fa-trash-alt"
                        onClick={()=>this.props.onDelete(notebook.id)}
                        title='Delete notebook'
                        />
                </div>
            </div>
        );
    }
}

export default  withRouter(Notebook);