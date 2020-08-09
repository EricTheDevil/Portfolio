import React, { Component } from 'react';
import './App.css';
import { Header, Profile, FullPageScroller, Timeline } from './lib/common.js'
import { CSSTransition } from "react-transition-group";

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