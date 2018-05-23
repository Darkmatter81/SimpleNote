import React from 'react';
import PropTypes from 'prop-types';

const BasicNoteOptions = (props) =>{
    return (
        <div className='options-bar'>
            { props.onDeleteNoteClick !== undefined &&
                <i 
                    onClick={()=>props.onDeleteNoteClick()}
                    className="far fa-trash-alt" 
                    title='Delete note'
                />
            }

            { props.onUpdateNoteClick !== undefined &&
                <i className="fas fa-check"
                    onClick = {()=>props.onUpdateNoteClick()}
                    title='Update note'
                />
            }
        </div>
    );
}

BasicNoteOptions.propTypes = {
    onDeleteNoteClick:PropTypes.func,
    onUpdateNoteClick: PropTypes.func,
};

export default BasicNoteOptions;