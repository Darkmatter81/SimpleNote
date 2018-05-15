import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Note.css'

class Note extends Component {
    state = {  };

    render() {
        const { note } = this.props;
        return (
            <div className='note-item'>
               <p className='title'>{note.title}</p>
               <p>{note.body}</p>

               <BasicOptions />        
    
            </div>        
        );
    }
}


const BasicOptions = (props) =>{
    return (
        <div className='options-bar'>
            <i className="far fa-trash-alt" title='Delete note'/>
        </div>
    );
}

export default Note;

 {/* <Link to={`/note/${note.id}`}>
                    { note.title }
                </Link>

                <button
                    onClick={()=>this.props.onRemoveClick(note.id)}> 
                    X
                </button> */}