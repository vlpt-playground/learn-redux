import React, { Component } from 'react';
import { connect } from 'react-redux';
import Palette from '../components/Palette';
import { changeColor } from '../store/modules/counter';

class PaletteContainer extends Component {
  handleSelect = color => {
    const { changeColor } = this.props;
    changeColor(color);
  };

  render() {
    const { color } = this.props;
    return <Palette onSelect={this.handleSelect} selected={color} />;
  }
}

const mapStateToProps = state => ({
  color: state.counter.color,
});

const mapDispatchToProps = dispatch => ({
  changeColor,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PaletteContainer);
