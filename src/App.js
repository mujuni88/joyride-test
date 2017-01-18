import React, { Component } from 'react';
import './App.css';
import './react-joyride-compiled.css'

import ComponentP from './component/ComponentP'

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <ComponentP /> 
      </div>
    );
  }
}

export default App;
