<script setup lang="ts">
import { sampleSize } from 'lodash-es'

interface BlockState {
  x: number,
  y: number,
  revealed?: boolean,
  mine?: boolean,
  flagged?: boolean,
  adjacentMines?: number
}

const settings = reactive({
  width: 10,
  height: 10,
  mineCount: 10
})

const status = reactive({
  fail: false,
  win: false,
  flagCount: 0,
  generated: false
})

const state = reactive(
  Array.from({ length: settings.height }, (_, y) =>
    Array.from({ length: settings.width },
      (_, x): BlockState => ({
        x, y
      })
    )
  )
)

const directions = [
  [-1, -1], [0, -1], [1, -1],
  [-1, 0], [1, 0],
  [-1, 1], [0, 1], [1, 1]
]

function onClick (item: BlockState) {
  if (!status.generated) {
    generateMines(item)
    status.generated = true
  }
  console.log(JSON.stringify(item))
}

function generateMines (initItem: BlockState) {
  const mineIndexes = sampleSize(
    Array.from({ length: settings.width * settings.height }, (_, i) => i),
    settings.mineCount
  )
  if (mineIndexes.includes(initItem.y * settings.width + initItem.x)) {
    generateMines(initItem)
    return
  }
  mineIndexes.forEach(i => {
    const x = i % settings.width
    const y = Math.floor(i / settings.width)
    state[y][x].mine = true
  })
  state.forEach((row, y) => {
    row.forEach((item, x) => {
      if (!item.mine) {
        item.adjacentMines = directions.reduce((acc, [dx, dy]) => {
          const nx = x + dx
          const ny = y + dy
          if (nx < 0 || nx >= settings.width || ny < 0 || ny >= settings.height) {
            return acc
          }
          return acc + (state[ny][nx].mine ? 1 : 0)
        }, 0)
      }
    })
  })
}
</script>

<template>
  <div
    flex="~ col"
  >
    <div
      v-for="(row, y) in state"
      :key="y"
      flex="~ justify-center items-center"
    >
      <div
        v-for="(item, x) in row"
        :key="x"
        w-10
        h-10
        hover:bg-gray
        border="~ solid gray-400/10"
        flex="~ justify-center items-center"
        @click="onClick(item)"
      >
        <i
          v-if="item.mine"
          text-red
          class="i-mdi-mine"
        />
        <span
          v-else
        >
          {{ item.adjacentMines }}
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>
