import React, { Component } from 'react';
import './app.css';
import { Header, Profile, FullPageScroller, Timeline, Projects } from './lib/common.js'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <main>
            <Header />
            <Profile />
            <Timeline />
            <Projects />
        </main>
      </div>

    );
  }
}

export default App;