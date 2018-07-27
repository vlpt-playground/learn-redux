import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import WaitingList from '../components/WaitingList';

@inject(stores => {
  return {
    input: stores.waiting.input,
    list: stores.waiting.list,
    setInput: stores.waiting.setInput,
    create: stores.waiting.create,
    enter: stores.waiting.enter,
    leave: stores.waiting.leave,
  };
})
@observer
class WaitingListContainer extends Component {
  // 인풋 변경 이벤트
  handleChange = e => {
    this.props.setInput(e.target.value);
  };
  // 등록 이벤트
  handleSubmit = e => {
    e.preventDefault();
    this.props.create();
  };
  // 입장
  handleEnter = id => {
    this.props.enter(id);
  };
  // 나가기
  handleLeave = id => {
    this.props.leave(id);
  };
  render() {
    const { input, list } = this.props;
    return (
      <WaitingList
        input={input}
        waitingList={list}
        onChange={this.handleChange}
        onSubmit={this.handleSubmit}
        onEnter={this.handleEnter}
        onLeave={this.handleLeave}
      />
    );
  }
}

export default WaitingListContainer;
