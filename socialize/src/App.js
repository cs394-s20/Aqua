//React components
import React from 'react';

//Styling
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import ListGroup from 'react-bootstrap/ListGroup';

//Hook setup

import BrowserRouter from 'react-router-dom/BrowserRouter';
import { Route, Switch } from 'react-router-dom';

//Components
import Home from './components/Home'
import Navigation from './components/Navigation';


class App extends React.Component{

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

