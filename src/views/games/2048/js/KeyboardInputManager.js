export default class KeyboardInputManager {
  constructor (vue) {
    this.events = {}
    this.vue = vue

    this.map = {
      ArrowUp: 0, // Up
      ArrowRight: 1, // Right
      ArrowDown: 2, // Down
      ArrowLeft: 3, // Left
      KeyK: 0, // Vim up
      KeyL: 1, // Vim right
      keyJ: 2, // Vim down
      keyH: 3, // Vim left
      KeyW: 0, // W
      KeyD: 1, // D
      KeyS: 2, // S
      KeyA: 3 // A
    }

    if (window.navigator.msPointerEnabled) {
      // Internet Explorer 10 style
      this.eventTouchstart = 'MSPointerDown'
      this.eventTouchmove = 'MSPointerMove'
      this.eventTouchend = 'MSPointerUp'
    } else {
      this.eventTouchstart = 'touchstart'
      this.eventTouchmove = 'touchmove'
      this.eventTouchend = 'touchend'
    }

    this.retryButton = this.vue.$refs.retryButton
    this.restartButton = this.vue.$refs.restartButton
    this.keepPlayingButton = this.vue.$refs.keepPlayingButton
    this.gameContainer = this.vue.$refs.gameContainer

    // Respond to swipe events
    this.touchStartClientX = undefined
    this.touchStartClientY = undefined

    this.listen()
  }

  on (event, callback) {
    if (!this.events[event]) {
      this.events[event] = []
    }
    this.events[event].push(callback)
  }

  emit (event, data) {
    const callbacks = this.events[event]
    if (callbacks) {
      callbacks.forEach(function (callback) {
        callback(data)
      })
    }
  }

  listen () {
    // Respond to direction keys
    document.addEventListener('keydown', this._keyboardEvent.bind(this))

    // Respond to button presses
    this.bindButtonPress(this.retryButton, this.restart)
    this.bindButtonPress(this.restartButton, this.restart)
    this.bindButtonPress(this.keepPlayingButton, this.keepPlaying)

    this.gameContainer.addEventListener(this.eventTouchstart, this._touchStartEvent.bind(this))
    this.gameContainer.addEventListener('mousedown', this._touchStartEvent.bind(this))

    this.gameContainer.addEventListener(this.eventTouchmove, function (event) {
      event.preventDefault()
    })

    this.gameContainer.addEventListener(this.eventTouchend, this._touchEndEvent.bind(this))
    this.gameContainer.addEventListener('mouseup', this._touchEndEvent.bind(this))
  }

  restart (event) {
    event.preventDefault()
    this.emit('restart')
  }

  keepPlaying (event) {
    event.preventDefault()
    this.emit('keepPlaying')
  }

  bindButtonPress (button, fn) {
    button.addEventListener('click', fn.bind(this))
    button.addEventListener(this.eventTouchend, fn.bind(this))
  }

  removeButtonPress (button) {
    button.addEventListener('click')
    button.addEventListener(this.eventTouchend)
  }

  _keyboardEvent (event) {
    const modifiers = event.altKey || event.ctrlKey || event.metaKey ||
      event.shiftKey
    const mapped = this.map[event.code]

    if (!modifiers) {
      if (mapped !== undefined) {
        event.preventDefault()
        this.emit('move', mapped)
      }
    }

    // R key restarts the game
    if (!modifiers && event.code === 'KeyR') {
      this.restart(event)
    }
  }

  _touchStartEvent (event) {
    if (!(event.type === 'mousedown') && ((!window.navigator.msPointerEnabled && event.touches.length > 1) ||
      event.targetTouches.length > 1)) {
      return // Ignore if touching with more than 1 finger
    }

    if (window.navigator.msPointerEnabled || event.type === 'mousedown') {
      this.touchStartClientX = event.pageX
      this.touchStartClientY = event.pageY
    } else {
      this.touchStartClientX = event.touches[0].clientX
      this.touchStartClientY = event.touches[0].clientY
    }

    event.preventDefault()
  }

  _touchEndEvent (event) {
    if (!(event.type === 'mouseup') && ((!window.navigator.msPointerEnabled && event.touches.length > 0) ||
      event.targetTouches.length > 0)) {
      return // Ignore if still touching with one or more fingers
    }

    let touchEndClientX, touchEndClientY

    if (window.navigator.msPointerEnabled || event.type === 'mouseup') {
      touchEndClientX = event.pageX
      touchEndClientY = event.pageY
    } else {
      touchEndClientX = event.changedTouches[0].clientX
      touchEndClientY = event.changedTouches[0].clientY
    }

    const dx = touchEndClientX - this.touchStartClientX
    const absDx = Math.abs(dx)

    const dy = touchEndClientY - this.touchStartClientY
    const absDy = Math.abs(dy)

    if (Math.max(absDx, absDy) > 10) {
      // (right : left) : (down : up)
      this.emit('move', absDx > absDy ? (dx > 0 ? 1 : 3) : (dy > 0 ? 2 : 0))
    }
  }

  destroy () {
    document.removeEventListener('keydown', this._keyboardEvent)
    this.removeButtonPress(this.retryButton)
    this.removeButtonPress(this.restartButton)
    this.removeButtonPress(this.keepPlayingButton)

    this.gameContainer.addEventListener('mousedown')
    this.gameContainer.addEventListener('mouseup')
    this.gameContainer.addEventListener(this.eventTouchstart)
    this.gameContainer.addEventListener(this.eventTouchmove)
    this.gameContainer.addEventListener(this.eventTouchend)
  }
}
