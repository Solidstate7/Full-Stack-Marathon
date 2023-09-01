class Event {
  observers = {}
  constructor() {}

  on(eventName, callback) {
    const obj = {key:eventName, value:callback,}
    this.observers.push(obj)
    console.log(obj);
  }

  emit(eventName) {
    // let observer
    // for (let i of observers) {
    //   if (this.observers[i].key === eventName) {
    //     observer = this.observers[i]
    //   }
    // }
    // this.observers.find(v => {
    //   return v.key === eventName
    // })

    const observer = this.observers.find((v) => v.key === eventName)
    observer.value(obj)
  }
}

const ev = new Event()

ev.on("click", () => {})

console.log(ev.observers);