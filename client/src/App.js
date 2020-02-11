import React from 'react';
import './App.css';
import TwitterNavbar from './components/TwitterNavbar';
import Home from './pages/Home';
import User from './pages/User';
import Random from './pages/Random';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Router>
        <TwitterNavbar />
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
