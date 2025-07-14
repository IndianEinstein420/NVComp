import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import './style.css';
import Home from "./views/home";
import NotFound1 from './views/not-found';
import Complaint from './views/form';
import About from './views/About/About';
import FAQ from './views/FAQ/FAQ';
import Map_ from './views/Map_';

const App = () => {
  return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/complaint" component={Complaint} />
          <Route exact path="/not-found" component={NotFound1} />
          <Route exact path="/about" component={About} />
          <Route exact path="/faq" component={FAQ} />
          <Route exact path="/map" component={Map_} />

          <Route component={NotFound1} />
        </Switch>
      </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
