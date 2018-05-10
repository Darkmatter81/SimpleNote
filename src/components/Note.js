import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Note extends Component {
    state = {  };

    render() {
        const { note } = this.props;

        return (
            <div>
                <Link to={`/note/${note.id}`}>
                    { note.title }
                </Link>

                <button
                    onClick={()=>this.props.onRemoveClick(note.id)}> 
                    X
                </button>
            </div>        
        );
    }
}
;

export default Note;