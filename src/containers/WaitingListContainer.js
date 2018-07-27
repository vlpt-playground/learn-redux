import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import WaitingList from '../components/WaitingList';

@observer
class WaitingListContainer extends Component {
  @observable input = '';
  @observable
  list = [
    {
      id: 0,
      name: '홍길동',
      entered: true,
    },
    {
      id: 1,
      name: '콩쥐',
      entered: false,
    },
    {
      id: 2,
      name: '팥쥐',
      entered: false,
    },
  ];
  id = 3;
  // 인풋 변경 이벤트
  handleChange = e => {
    this.input = e.target.value;
  };
  // 등록 이벤트
  handleSubmit = e => {
    e.preventDefault();
    this.list.push({
      id: this.id++,
      name: this.input,
      entered: false,
    });
    this.input = '';
  };
  // 입장
  handleEnter = id => {
    const item = this.list.find(item => item.id === id);
    item.entered = !item.entered;
  };
  // 나가기
  handleLeave = id => {
    const item = this.list.find(item => item.id === id);
    this.list.remove(item); // remove 는 MobX observable 배열의 내장함수
  };
  render() {
    return (
      <WaitingList
        input={this.input}
        waitingList={this.list}
        onChange={this.handleChange}
        onSubmit={this.handleSubmit}
        onEnter={this.handleEnter}
        onLeave={this.handleLeave}
      />
    );
  }
}

export default WaitingListContainer;
