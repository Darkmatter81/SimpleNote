import React from 'react';
import PropTypes from 'prop-types';

import './Modal.css'

class Modal extends React.Component {
    
    static propTypes = {
        onClose: PropTypes.func.isRequired,
        show: PropTypes.bool,
        children: PropTypes.node
      };
    

    render() {
        // Render nothing if the "show" prop is false
        if(!this.props.show) {
            return null;
        }

        // The gray background
        return (
            <div className="backdrop">
                <div className="modal">
                    {this.props.children}

                    <div className="footer">
                        <button onClick={this.props.onClose}>
                        Close
                        </button>
                    </div>
                </div>
            </div>
         );
  }
}


export default Modal;