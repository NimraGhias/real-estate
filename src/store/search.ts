type Filters = { location: string; type: string; price: string }

let current: Filters = { location: '', type: '', price: '' }
const listeners = new Set<(f: Filters) => void>()

export function setFilters(f: Filters) {
  current = f
  listeners.forEach((fn) => fn(f))
}

export function getFilters() {
  return current
}

export function subscribe(fn: (f: Filters) => void) {
  listeners.add(fn)
  return () => { listeners.delete(fn) }
}
