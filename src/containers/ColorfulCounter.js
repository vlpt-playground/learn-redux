import React, { Component, Fragment } from 'react';
import { observer, inject } from 'mobx-react';
import Counter from '../components/Counter';
import Palette from '../components/Palette';

@inject(stores => {
  return {
    number: stores.counter.number,
    color: stores.counter.color,
    increment: stores.counter.increment,
    decrement: stores.counter.decrement,
    setColor: stores.counter.setColor,
  };
})
@observer
class ColorfulCounter extends Component {
  handleSelectColor = color => {
    this.props.setColor(color);
  };

  handleIncrement = () => {
    this.props.increment();
  };

  handleDecrement = () => {
    this.props.decrement();
  };

  render() {
    const { color, number } = this.props;
    return (
      <Fragment>
        <Palette selected={color} onSelect={this.handleSelectColor} />
        <Counter
          value={number}
          color={color}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
      </Fragment>
    );
  }
}

export default ColorfulCounter;
