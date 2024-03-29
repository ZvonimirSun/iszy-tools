export default class HtmlActuator {
  constructor(vue) {
    this.vue = vue

    this.tileContainer = this.vue.$refs.tileContainer
    this.scoreContainer = this.vue.$refs.scoreContainer
    this.bestContainer = this.vue.$refs.bestContainer
    this.messageContainer = this.vue.$refs.messageContainer

    this.score = 0
  }

  actuate(grid, metadata) {
    const self = this

    window.requestAnimationFrame(() => {
      self.clearContainer(self.tileContainer)

      grid.cells.forEach((column) => {
        column.forEach((cell) => {
          if (cell) {
            self.addTile(cell)
          }
        })
      })

      self.updateScore(metadata.score)
      self.updateBestScore(metadata.bestScore)

      if (metadata.terminated) {
        if (metadata.over) {
          self.message(false) // You lose
        }
        else if (metadata.won) {
          self.message(true) // You win!
        }
      }
    })
  }

  // Continues the game (both restart and keep playing)
  continueGame() {
    this.clearMessage()
  }

  clearContainer(container) {
    while (container.firstChild) {
      container.removeChild(container.firstChild)
    }
  }

  addTile(tile) {
    const self = this

    const wrapper = document.createElement('div')
    const inner = document.createElement('div')
    const position = tile.previousPosition || { x: tile.x, y: tile.y }
    const positionClass = this.positionClass(position)

    // We can't use classlist because it somehow glitches when replacing classes
    const classes = ['tile', `tile-${tile.value}`, positionClass]

    if (tile.value > 2048)
      classes.push('tile-super')

    this.applyClasses(wrapper, classes)

    inner.classList.add('tile-inner')
    inner.textContent = tile.value

    if (tile.previousPosition) {
    // Make sure that the tile gets rendered in the previous position first
      window.requestAnimationFrame(() => {
        classes[2] = self.positionClass({ x: tile.x, y: tile.y })
        self.applyClasses(wrapper, classes) // Update the position
      })
    }
    else if (tile.mergedFrom) {
      classes.push('tile-merged')
      this.applyClasses(wrapper, classes)

      // Render the tiles that merged
      tile.mergedFrom.forEach((merged) => {
        self.addTile(merged)
      })
    }
    else {
      classes.push('tile-new')
      this.applyClasses(wrapper, classes)
    }

    // Add the inner part of the tile to the wrapper
    wrapper.appendChild(inner)

    // Put the tile on the board
    this.tileContainer.appendChild(wrapper)
  }

  applyClasses(element, classes) {
    element.setAttribute('class', classes.join(' '))
  }

  normalizePosition(position) {
    return { x: position.x + 1, y: position.y + 1 }
  }

  positionClass(position) {
    position = this.normalizePosition(position)
    return `tile-position-${position.x}-${position.y}`
  }

  updateScore(score) {
    this.clearContainer(this.scoreContainer)

    const difference = score - this.score
    this.score = score

    this.scoreContainer.textContent = this.score

    if (difference > 0) {
      const addition = document.createElement('div')
      addition.classList.add('score-addition')
      addition.textContent = `+${difference}`

      this.scoreContainer.appendChild(addition)
    }
  }

  updateBestScore(bestScore) {
    this.bestContainer.textContent = bestScore
  }

  message(won) {
    const type = won ? 'game-won' : 'game-over'
    const message = won ? '你赢啦!' : '游戏结束!'

    this.messageContainer.classList.add(type)
    this.messageContainer.getElementsByTagName('p')[0].textContent = message
  }

  clearMessage() {
  // IE only takes one value to remove at a time.
    this.messageContainer.classList.remove('game-won')
    this.messageContainer.classList.remove('game-over')
  }
}
