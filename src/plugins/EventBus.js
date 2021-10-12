const EventBus = {
  /**
   * @type Map<String,Array>
   */
  events: new Map(),
  /**
   * 注册事件
   * @param {String} name 事件名称
   * @param {Function} event 事件内容
   */
  on (name, event) {
    if (name && typeof event === 'function') {
      if (this.events.get(name)) {
        this.events.get(name).push(event)
      } else {
        this.events.set(name, [event])
      }
    }
  },
  /**
   * 注销事件
   * @param {String} name 事件名称
   * @param {Function} [event] 事件内容
   */
  off (name, event) {
    const tmp = this.events.get(name)
    if (tmp) {
      if (typeof event === 'function') {
        for (let i = tmp.length - 1; i >= 0; i--) {
          if (event === tmp[i]) {
            tmp.splice(i, 1)
          }
        }
        if (tmp.length === 0) {
          this.events.delete(name)
        }
      } else {
        this.events.delete(name)
      }
    }
  },
  emit (name, ...payload) {
    const tmp = this.events.get(name)
    if (tmp) {
      for (const fn of tmp) {
        fn(...payload)
      }
    }
  }
}
export default EventBus
