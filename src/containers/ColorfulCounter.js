import React, { Component, Fragment } from 'react';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import Counter from '../components/Counter';
import Palette from '../components/Palette';

@observer
class ColorfulCounter extends Component {
  @observable number = 0;
  @observable color = 'red';

  handleSelectColor = color => {
    this.color = color;
  };

  handleIncrement = () => {
    this.number++;
  };

  handleDecrement = () => {
    this.number--;
  };

  render() {
    return (
      <Fragment>
        <Palette selected={this.color} onSelect={this.handleSelectColor} />
        <Counter
          value={this.number}
          color={this.color}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
      </Fragment>
    );
  }
}

export default ColorfulCounter;
