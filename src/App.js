import React, { Component } from 'react';
import { Router, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import Home from './component/Home';
import Dashboard from './component/Dashboard';
///import configureStore from './configure';
import createHistory from 'history/createBrowserHistory';

export const history = createHistory();
/************ store configration *********/
//const store = configureStore();

class App extends Component {
  render() {
    return (
      
	  <Router history={history}>
	  <Switch>
        <Route exact={true} path="/" component={Home} />
		<Route exact path="/dashboard" component={Dashboard} />
   	 </Switch>
	  </Router>
	  
    );
  }
}

export default App;
