import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './notebook.css';

class Notebook extends Component {
    state = {  }

    static propTypes = {
        notebook: PropTypes.object.isRequired,
        onDelete: PropTypes.func.isRequired,
    };

    render() {
        const { notebook } = this.props;

        return (
            <div className='notebook-item'>
                <div className='heading'>
                    <span className='notebook-name'>{notebook.name}</span>
                    <span>({notebook.notes.length})</span>
                </div>
                
                <div className='options'>
                    <i className="fas fa-pencil-alt"></i>
                    <i className="far fa-trash-alt"
                        onClick={()=>this.props.onDelete(notebook.id)}
                        title='Delete notebook'
                        />
                </div>
            </div>
        );
    }
}

export default Notebook;