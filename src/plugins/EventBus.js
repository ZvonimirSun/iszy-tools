const EventBus = {
  events: {},
  on (name, event) {
    if (name && typeof event === 'function') {
      if (this.events[name]) {
        this.events[name].push(event)
      } else {
        this.events[name] = [event]
      }
    }
  },
  off (name, event) {
    if (name && this.events[name]) {
      if (typeof event === 'function') {
        for (let i = this.events[name].length - 1; i >= 0; i--) {
          if (event === this.events[name][i]) {
            this.events[name].splice(i, 1)
          }
        }
        if (this.events[name].length === 0) {
          delete this.events[name]
        }
      } else {
        delete this.events[name]
      }
    }
  },
  emit (name, data, callback = () => {}) {
    if (name && this.events[name]) {
      for (const fun of this.events[name]) {
        // eslint-disable-next-line node/no-callback-literal
        callback(fun(data))
      }
    } else {
      callback()
    }
  }
}
export default EventBus
