import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Apply from './pages/apply';
import Jobs from './pages/jobs';
import Post from './pages/post';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/jobs" component={Jobs} />
          <Route path="/apply" component={Apply} />
          <Route path="/about" component={About} />
          <Route path="/post" component={Post} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
