import { action, makeObservable, observable } from "mobx"

class CounterStore {
  count = 0
  response = {}
  constructor() {
    makeObservable(
      this,
      {
        increment: action,
        decrement: action,
        apiCall: action,
        count: observable,
        response: observable,
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

  async apiCall() {
    try {
      const baseUrl = "https://alpha-uapi.blueonion.today/api/v1/magic-link/verify"
      await fetch(baseUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: "test@blueonion.today",
          type: "sign-up",
          client_id: "cnpzteCD4m",
          token: "gm5SxXwjdFEz02",
        }),
      })
        .then((res) => {
          console.log("response", res)
          this.response = res
        })
        .catch((err) => {
          console.log("error", err)
        })
    } catch (error) {
      console.log("Error", error)
    }
  }
}

export default new CounterStore()
