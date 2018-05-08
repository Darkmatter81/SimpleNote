import React, { Component } from 'react';
import LoadingBar from 'react-redux-loading';
import { connect } from 'react-redux';
import '../App.css';
import { handleInitialData } from '../actions/shared';
import NotebooksList from './NotebooksList';

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
        <NotebooksList />
      </div>
    );
  }
}


export default connect()(App);