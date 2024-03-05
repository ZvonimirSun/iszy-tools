/**
 * TagCloud.js (c) 2016-2019 @ Cong Min
 * MIT License - https://github.com/mcc108/TagCloud
 */

class TagCloud {
  /* constructor */
  constructor(container = document.body, texts, options) {
    if (!container || container.nodeType !== 1)
      return new Error('Incorrect element type')

    // params
    this.$container = container
    this.texts = texts || []
    this.config = { ...TagCloud._defaultConfig, ...options || {} }

    // calculate config
    this.radius = this.config.radius // rolling radius
    this.depth = 2 * this.radius // rolling depth
    this.size = 1.5 * this.radius // rolling area size with mouse
    this.maxSpeed = TagCloud._getMaxSpeed(this.config.maxSpeed) // rolling max speed
    this.initSpeed = TagCloud._getInitSpeed(this.config.initSpeed) // rolling init speed
    this.direction = this.config.direction // rolling init direction
    this.keep = this.config.keep // whether to keep rolling after mouse out area
    this.paused = false // keep state to pause the animation

    // create element
    this._createElment()
    // init
    this._init()
    // set elements and instances
    TagCloud.list.push({ el: this.$el, container, instance: this })
  }

  /* static method */
  // all TagCloud list
  static list = []

  // default config
  static _defaultConfig = {
    radius: 100, // rolling radius, unit `px`
    maxSpeed: 'normal', // rolling max speed, optional: `slow`, `normal`(default), `fast`
    initSpeed: 'normal', // rolling init speed, optional: `slow`, `normal`(default), `fast`
    direction: 135, // rolling init direction, unit clockwise `deg`, optional: `0`(top) , `90`(left), `135`(right-bottom)(default)...
    keep: true, // whether to keep rolling after mouse out area, optional: `false`, `true`(default)(decelerate to rolling init speed, and keep rolling with mouse)
    useContainerInlineStyles: true,
    useItemInlineStyles: true,
    containerClass: 'tagcloud',
    itemClass: 'tagcloud--item',
  }

  // speed value
  static _getMaxSpeed = name => ({ slow: 0.5, normal: 1, fast: 2 })[name] || 1

  static _getInitSpeed = name => ({ slow: 16, normal: 32, fast: 80 })[name] || 32

  // event listener
  static _on(el, ev, handler, cap) {
    if (el.addEventListener) {
      el.addEventListener(ev, handler, cap)
    }
    else if (el.attachEvent) {
      el.attachEvent(`on${ev}`, handler)
    }
    else {
      el[`on${ev}`] = handler
    }
  }

  /* instance property method */
  // create elment
  _createElment() {
    // create container
    const $el = document.createElement('div')
    $el.className = this.config.containerClass
    if (this.config.useContainerInlineStyles) {
      $el.style.position = 'relative'
      $el.style.width = `${2 * this.radius}px`
      $el.style.height = `${2 * this.radius}px`
    }

    // create texts
    this.items = []
    this.texts.forEach((text, index) => {
      const item = this._createTextItem(text, index)
      $el.appendChild(item.el)
      this.items.push(item)
    })
    this.$container.appendChild($el)
    this.$el = $el
  }

  // create a text
  _createTextItem(text, index = 0) {
    const itemEl = document.createElement('span')
    itemEl.className = this.config.itemClass
    if (this.config.useItemInlineStyles) {
      itemEl.style.willChange = 'transform, opacity, filter'
      itemEl.style.position = 'absolute'
      itemEl.style.top = '50%'
      itemEl.style.left = '50%'
      itemEl.style.zIndex = index + 1
      itemEl.style.filter = 'alpha(opacity=0)'
      itemEl.style.opacity = 0
      const transformOrigin = '50% 50%'
      itemEl.style.WebkitTransformOrigin = transformOrigin
      itemEl.style.MozTransformOrigin = transformOrigin
      itemEl.style.OTransformOrigin = transformOrigin
      itemEl.style.transformOrigin = transformOrigin
      const transform = 'translate3d(-50%, -50%, 0) scale(1)'
      itemEl.style.WebkitTransform = transform
      itemEl.style.MozTransform = transform
      itemEl.style.OTransform = transform
      itemEl.style.transform = transform
    }
    itemEl.innerText = text
    return {
      el: itemEl,
      ...this._computePosition(index), // distributed in appropriate place
    }
  }

  // calculate appropriate place
  _computePosition(index, random = false) {
    const textsLength = this.texts.length
    // if random `true`, It means that a random appropriate place is generated, and the position will be independent of `index`
    if (random)
      index = Math.floor(Math.random() * (textsLength + 1))
    const phi = Math.acos(-1 + (2 * index + 1) / textsLength)
    const theta = Math.sqrt((textsLength + 1) * Math.PI) * phi
    return {
      x: (this.size * Math.cos(theta) * Math.sin(phi)) / 2,
      y: (this.size * Math.sin(theta) * Math.sin(phi)) / 2,
      z: (this.size * Math.cos(phi)) / 2,
    }
  }

  _requestInterval(fn, delay) {
    const requestAnimFrame = ((() => window.requestAnimationFrame) || ((callback) => {
      window.setTimeout(callback, 1000 / 60)
    }))()
    let start = new Date().getTime()
    const handle = {}
    function loop() {
      handle.value = requestAnimFrame(loop)
      const current = new Date().getTime()
      const delta = current - start
      if (delta >= delay) {
        fn.call()
        start = new Date().getTime()
      }
    }
    handle.value = requestAnimFrame(loop)
    return handle
  }

  // init
  _init() {
    this.active = false // whether the mouse is activated

    this.mouseX0 = this.initSpeed * Math.sin(this.direction * (Math.PI / 180)) // init distance between the mouse and rolling center x axis
    this.mouseY0 = -this.initSpeed * Math.cos(this.direction * (Math.PI / 180)) // init distance between the mouse and rolling center y axis

    this.mouseX = this.mouseX0 // current distance between the mouse and rolling center x axis
    this.mouseY = this.mouseY0 // current distance between the mouse and rolling center y axis

    // mouseover
    TagCloud._on(this.$el, 'mouseover', () => { this.active = true })
    // mouseout
    TagCloud._on(this.$el, 'mouseout', () => { this.active = false })
    // mousemove
    TagCloud._on(this.keep ? window : this.$el, 'mousemove', (ev) => {
      ev = ev || window.event
      const rect = this.$el.getBoundingClientRect()
      this.mouseX = (ev.clientX - (rect.left + rect.width / 2)) / 5
      this.mouseY = (ev.clientY - (rect.top + rect.height / 2)) / 5
    })

    // update state regularly
    this._next() // init update state
    this.interval = this._requestInterval(() => {
      // eslint-disable-next-line no-useless-call
      this._next.call(this)
    }, 10)
  }

  // calculate the next state
  _next() {
    if (this.paused) {
      return
    }

    // if keep `false`, pause rolling after moving mouse out area
    if (!this.keep && !this.active) {
      this.mouseX = Math.abs(this.mouseX - this.mouseX0) < 1
        ? this.mouseX0
        : (this.mouseX + this.mouseX0) / 2 // reset distance between the mouse and rolling center x axis
      this.mouseY = Math.abs(this.mouseY - this.mouseY0) < 1
        ? this.mouseY0
        : (this.mouseY + this.mouseY0) / 2 // reset distance between the mouse and rolling center y axis
    }

    const a = -(Math.min(Math.max(-this.mouseY, -this.size), this.size) / this.radius)
      * this.maxSpeed
    const b = (Math.min(Math.max(-this.mouseX, -this.size), this.size) / this.radius)
      * this.maxSpeed

    if (Math.abs(a) <= 0.01 && Math.abs(b) <= 0.01)
      return // pause

    // calculate offset
    const l = Math.PI / 180
    const sc = [
      Math.sin(a * l),
      Math.cos(a * l),
      Math.sin(b * l),
      Math.cos(b * l),
    ]

    this.items.forEach((item) => {
      const rx1 = item.x
      const ry1 = item.y * sc[1] + item.z * (-sc[0])
      const rz1 = item.y * sc[0] + item.z * sc[1]

      const rx2 = rx1 * sc[3] + rz1 * sc[2]
      const ry2 = ry1
      const rz2 = rz1 * sc[3] - rx1 * sc[2]

      const per = (2 * this.depth) / (2 * this.depth + rz2) // todo

      item.x = rx2
      item.y = ry2
      item.z = rz2
      item.scale = per.toFixed(3)
      let alpha = per * per - 0.25
      alpha = (alpha > 1 ? 1 : alpha).toFixed(3)

      const itemEl = item.el
      const left = (item.x - itemEl.offsetWidth / 2).toFixed(2)
      const top = (item.y - itemEl.offsetHeight / 2).toFixed(2)
      const transform = `translate3d(${left}px, ${top}px, 0) scale(${item.scale})`
      itemEl.style.WebkitTransform = transform
      itemEl.style.MozTransform = transform
      itemEl.style.OTransform = transform
      itemEl.style.transform = transform
      itemEl.style.filter = `alpha(opacity=${100 * alpha})`
      itemEl.style.opacity = alpha
    })
  }

  /* export instance properties and methods */
  // update
  update(texts) {
    // params
    this.texts = texts || []
    // judging and processing items based on texts
    this.texts.forEach((text, index) => {
      let item = this.items[index]
      if (!item) { // if not had, then create
        item = this._createTextItem(text, index)
        Object.assign(item, this._computePosition(index, true)) // random place
        this.$el.appendChild(item.el)
        this.items.push(item)
      }
      // if had, replace text
      item.el.innerText = text
    })
    // remove redundant self.items
    const textsLength = this.texts.length
    const itemsLength = this.items.length
    if (textsLength < itemsLength) {
      const removeList = this.items.splice(textsLength, itemsLength - textsLength)
      removeList.forEach((item) => {
        this.$el.removeChild(item.el)
      })
    }
  }

  // destroy
  destroy() {
    this.interval = null
    // clear in TagCloud.list
    const index = TagCloud.list.findIndex(e => e.el === this.$el)
    if (index !== -1)
      TagCloud.list.splice(index, 1)
    // clear element
    if (this.$container && this.$el) {
      this.$container.removeChild(this.$el)
    }
  }

  pause() {
    this.paused = true
  }

  resume() {
    this.paused = false
  }
}

export default (els, texts, options) => {
  if (typeof els === 'string')
    els = document.querySelectorAll(els)
  if (!els.forEach)
    els = [els]
  const instances = []
  els.forEach((el) => {
    if (el) {
      instances.push(new TagCloud(el, texts, options))
    }
  })
  return instances.length <= 1 ? instances[0] : instances
}
