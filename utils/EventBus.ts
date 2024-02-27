export default class EventBus {
  static _events: Map<string, ((...payload: any[]) => any)[]> = new Map()

  static on (name: string, event: (...payload: any[]) => any) {
    if (name && typeof event === 'function') {
      const tmp = this._events.get(name)
      if (tmp) {
        tmp.push(event)
      } else {
        this._events.set(name, [event])
      }
    }
  }

  static off (name: string, event?: (...payload: any[]) => any) {
    const tmp = this._events.get(name)
    if (tmp) {
      if (typeof event === 'function') {
        for (let i = tmp.length - 1; i >= 0; i--) {
          if (event === tmp[i]) {
            tmp.splice(i, 1)
          }
        }
        if (tmp.length === 0) {
          this._events.delete(name)
        }
      } else {
        this._events.delete(name)
      }
    }
  }

  static emit (name: string, ...payload: any[]) {
    const tmp = this._events.get(name)
    if (tmp) {
      for (const fn of tmp) {
        fn(...payload)
      }
    }
  }
}
