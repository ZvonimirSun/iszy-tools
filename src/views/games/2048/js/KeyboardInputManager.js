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
    const self = this

    // Respond to direction keys
    document.addEventListener('keydown', this._keyboardEvent.bind(this))

    // Respond to button presses
    // this.bindButtonPress('.retry-button', this.restart)
    // this.bindButtonPress('.restart-button', this.restart)
    // this.bindButtonPress('.keep-playing-button', this.keepPlaying)

    // Respond to swipe events
    let touchStartClientX, touchStartClientY
    const gameContainer = this.vue.$refs.gameContainer

    gameContainer.addEventListener(this.eventTouchstart, function (event) {
      if ((!window.navigator.msPointerEnabled && event.touches.length > 1) ||
        event.targetTouches.length > 1) {
        return // Ignore if touching with more than 1 finger
      }

      if (window.navigator.msPointerEnabled) {
        touchStartClientX = event.pageX
        touchStartClientY = event.pageY
      } else {
        touchStartClientX = event.touches[0].clientX
        touchStartClientY = event.touches[0].clientY
      }

      event.preventDefault()
    })

    gameContainer.addEventListener(this.eventTouchmove, function (event) {
      event.preventDefault()
    })

    gameContainer.addEventListener(this.eventTouchend, function (event) {
      if ((!window.navigator.msPointerEnabled && event.touches.length > 0) ||
        event.targetTouches.length > 0) {
        return // Ignore if still touching with one or more fingers
      }

      let touchEndClientX, touchEndClientY

      if (window.navigator.msPointerEnabled) {
        touchEndClientX = event.pageX
        touchEndClientY = event.pageY
      } else {
        touchEndClientX = event.changedTouches[0].clientX
        touchEndClientY = event.changedTouches[0].clientY
      }

      const dx = touchEndClientX - touchStartClientX
      const absDx = Math.abs(dx)

      const dy = touchEndClientY - touchStartClientY
      const absDy = Math.abs(dy)

      if (Math.max(absDx, absDy) > 10) {
        // (right : left) : (down : up)
        self.emit('move', absDx > absDy ? (dx > 0 ? 1 : 3) : (dy > 0 ? 2 : 0))
      }
    })
  }

  restart (event) {
    event.preventDefault()
    this.emit('restart')
  }

  keepPlaying (event) {
    event.preventDefault()
    this.emit('keepPlaying')
  }

  bindButtonPress (selector, fn) {
    const button = document.querySelector(selector)
    button.addEventListener('click', fn.bind(this))
    button.addEventListener(this.eventTouchend, fn.bind(this))
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
      this.restart.call(self, event)
    }
  }

  destroy () {
    document.removeEventListener('keydown', this._keyboardEvent)
  }
}
