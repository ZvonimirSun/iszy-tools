export default class SimplePromiseQueue {
  _queue: (() => Promise<any>)[] = []
  _flushing = false

  enqueue(promise: () => Promise<void>): Promise<void> {
    this._queue.push(promise)
    if (!this._flushing) {
      return this._flushQueue()
    }
    return Promise.resolve()
  }

  _flushQueue() {
    this._flushing = true

    const chain = async (): Promise<any> => {
      const nextTask = this._queue.shift()
      if (nextTask) {
        return nextTask().then(chain)
      }
      else {
        this._flushing = false
        return Promise.resolve()
      }
    }

    return Promise.resolve(chain())
  }
}
