import { observable, action } from 'mobx';

export default class WaitingStore {
  constructor(root) {
    this.root = root;
  }
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

  @action
  setInput = input => {
    this.input = input;
  };

  @action
  create = () => {
    this.list.push({
      id: this.id++,
      name: this.input,
      entered: false,
    });
    this.input = '';
  };

  @action
  enter = id => {
    const item = this.list.find(item => item.id === id);
    item.entered = !item.entered;
  };

  @action
  leave = id => {
    const item = this.list.find(item => item.id === id);
    this.list.remove(item); // remove 는 MobX observable 배열의 내장함수
  };
}
