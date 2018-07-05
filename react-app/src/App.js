import React, { Component } from 'react';
import PostJob from './components/PostJob';
import Home from './pages/home';

class App extends Component {
  render() {
    return (
      <div>
      {/* <Home /> */}
      <PostJob />
      </div>
    );
  }
}

export default App;
