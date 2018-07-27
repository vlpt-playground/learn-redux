import CounterStore from './counter';
import WaitingStore from './waiting';

export default class RootStore {
  constructor() {
    this.counter = new CounterStore(this);
    this.waiting = new WaitingStore(this);
  }
}
