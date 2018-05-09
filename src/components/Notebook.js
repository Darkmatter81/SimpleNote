import React, { Component } from 'react';

class Notebook extends Component {
    state = {  }
    render() {
        const { notebook } = this.props;

        return (
            <div>
                {notebook.name}
                <button onClick={()=> this.props.onDelete(notebook.id)}>
                    X
                </button>
            </div>
        );
    }
}

export default Notebook;