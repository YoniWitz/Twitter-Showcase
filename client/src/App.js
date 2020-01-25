import React from 'react';
import './App.css';
import MyNavbar from './components/MyNavbar';
import Home from './components/Home';
import User from './components/User';
import Random from './components/Random';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Router>
        <MyNavbar />
        <Container>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/user" exact component={User} />
            <Route path="/random" exact component={Random} />
          </Switch>
        </Container>
      </Router>
    </div>
  );
}

export default App;
