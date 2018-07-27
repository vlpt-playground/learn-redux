import React, { Component } from 'react';

import './App.css';
import ColorfulCounter from './containers/ColorfulCounter';
import WaitingListContainer from './containers/WaitingListContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ColorfulCounter />
        <WaitingListContainer />
      </div>
    );
  }
}

export default App;
