import type { EventType } from 'mitt'
import mitt from 'mitt'

export default mitt()

export function getEventBus<T extends Record<EventType, any>>() {
  return mitt<T>()
}
