import React, { Component } from 'react';
import LoadingBar from 'react-redux-loading';
import { connect } from 'react-redux';
import './App.css';
import { handleInitialData } from './actions/shared';

class App extends Component {
  state = {

  };

  componentDidMount(){
      this.props.dispatch(handleInitialData());
  }
  
  render() {
    return (
      <div>
        <LoadingBar />
        Simple Notes App
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
  return {
    
  }
}

export default connect(mapStateToProps)(App);