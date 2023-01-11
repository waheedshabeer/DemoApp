import { action, makeObservable, observable } from "mobx"

class CounterStore {
  count = 0
  constructor() {
    makeObservable(
      this,
      {
        increment: action,
        decrement: action,
        count: observable,
      },
      { autoBind: true },
    )
  }

  increment() {
    this.count += 1
  }

  decrement() {
    this.count -= 1
  }
}

export default CounterStore
