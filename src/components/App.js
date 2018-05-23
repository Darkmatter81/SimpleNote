import React, { Component, Fragment } from 'react';
import LoadingBar from 'react-redux-loading';
import { connect } from 'react-redux';
import { BrowserRouter as  Router, Route, Switch } from 'react-router-dom';

import { handleInitialData } from '../actions/shared';
import NotebooksList from './notebook/NotebooksList';
import NotesList from './note/NotesList';
import EditNote from './note/EditNote';
import AddNote from './note/AddNote';

import '../App.css';

class App extends Component {
  state = {

  };

  componentDidMount(){
      this.props.dispatch(handleInitialData());
  }
  
  render() {
    return (
      <div className='container'>
        <Router>
        	<Fragment>
                <LoadingBar />   
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
            </Fragment>
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