import React, { Component } from 'react';

import Home from './pages/home';
import About from './pages/about';
import Apply from './pages/apply';
import Jobs from './pages/jobs';
import Post from './pages/post';

class App extends Component {
  render() {
    return (
      <div>
        <Post />
      </div>
    );
  }
}

export default App;
