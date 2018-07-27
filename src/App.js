import React, { Component } from 'react';

import './App.css';
import WaitingList from './components/WaitingList';
import PaletteContainer from './containers/PaletteContainer';
import CounterContainer from './containers/CounterContainer'; // **** (1) 불러오기

class App extends Component {
  render() {
    return (
      <div className="App">
        <PaletteContainer />
        <CounterContainer /> {/* ****(2) 대체하기 */}
        <WaitingList />
      </div>
    );
  }
}

export default App;
