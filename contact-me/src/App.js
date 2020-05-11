import React, {Component} from 'react';
import './App.css';
import {Router, Route, Switch } from 'react-router-dom';
import {Contact} from './pages/contact'
import {Error} from './pages/error'
import {ThankYou} from './pages/thankyou'
import history from './history'
import {Footer} from './component/footer'
class App extends Component {
  render () {
    return (
      <div className="App">
        <Router history={history}>
          <Switch>
            <Route path="/" component={Contact} exact />   
            <Route path="/thankyou" component={ThankYou}/>        
            <Route component={Error} />
          </Switch>
        </Router>
        
        
      </div>
    );   

  }
 
}

export default App;
