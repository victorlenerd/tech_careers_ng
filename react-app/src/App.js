import React, { Component } from 'react';
<<<<<<< HEAD
import PostJob from './components/PostJob';
=======
import { BrowserRouter, Switch, Route } from 'react-router-dom';
>>>>>>> 27d49bc4996b470a1f5332ddf570fc0cccedcab0
import Home from './pages/home';
import About from './pages/about';
import Apply from './pages/apply';
import Jobs from './pages/jobs';
import Post from './pages/post';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
<<<<<<< HEAD
      <div>
      {/* <Home /> */}
      <PostJob />
      </div>
=======
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/jobs" component={Jobs} />
          <Route path="/about" component={About} />
          <Route path="/post" component={Post} />
        </Switch>
      </BrowserRouter>
>>>>>>> 27d49bc4996b470a1f5332ddf570fc0cccedcab0
    );
  }
}

export default App;
