export default class SimplePromiseQueue {
  _queue = []
  _flushing = false

  enqueue(promise) {
    this._queue.push(promise)
    if (!this._flushing) { return this._flushQueue() }
    return Promise.resolve()
  }

  _flushQueue() {
    this._flushing = true

    const chain = () => {
      const nextTask = this._queue.shift()
      if (nextTask) {
        return nextTask.then(chain)
      }
      else {
        this._flushing = false
      }
    }

    return Promise.resolve(chain())
  }
}
