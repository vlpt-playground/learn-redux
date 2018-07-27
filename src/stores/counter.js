import { observable, action } from 'mobx';

export default class CounterStore {
  constructor(root) {
    this.root = root;
  }
  @observable number = 0;
  @observable color = 'red';

  @action
  increment = () => {
    this.number++;
  };

  @action
  decrement = () => {
    this.number--;
  };

  @action
  setColor = color => {
    this.color = color;
  };
}
