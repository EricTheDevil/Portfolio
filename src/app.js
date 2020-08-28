import React, { Component } from 'react';
import './app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { 
  Header, 
  Profile, 
  Timeline, 
  Projects, 
  Footer 
} from './lib/common.js'

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">

            <Header />
            <Profile />
            <Timeline />
            <Projects />
            <Footer />

      </div>

    );
  }
}

export default App;