import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { handleInitialData } from '../actions/shared';
import AddNote from './note/AddNote';
import EditNote from './note/EditNote';
import NotesList from './note/NotesList';
import NotebooksList from './notebook/NotebooksList';
import './styles/App.css';

class App extends Component {
  componentDidMount(){
      this.props.dispatch(handleInitialData());
  }
  
  render() {
    return (
      <div className=''>
        <LoadingBar />   
        <Router>
        	<div className='container app-container'>
                {this.props.loading === true
                    ? null
                    : <Switch>
                        <Route path='/' exact component={NotebooksList}/>
                        <Route path='/notebook/:id' component={NotesList}/>
                        <Route path='/note/:id' component={EditNote}/>
                        <Route path='/add/' component={AddNote}/>
                        <Route render={()=><h3>No such page</h3>}/>
                     </Switch>
                }
            </div>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = ({ notebooks, notes }) =>{
	return {
		loading: notebooks === null || notes === null
	}
}

export default connect(mapStateToProps)(App);