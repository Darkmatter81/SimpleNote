import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Notebook extends Component {
    state = {  }
    render() {
        const { notebook } = this.props;

        return (
            <div>
                <Link to={`/notes/${notebook.id}`}>
                    {notebook.name}
                </Link>
                <button onClick={()=> this.props.onDelete(notebook.id)}>
                    X
                </button>
            </div>
        );
    }
}

export default Notebook;