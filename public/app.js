import React, { Component } from 'react';
import './app.css';
import { Header, Profile, FullPageScroller, Timeline } from './lib/common.js'

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <main>
            <Header />
            <Profile />
            <Timeline />
        </main>
      </div>

    );
  }
}

export default App;