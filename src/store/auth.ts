type User = { name: string; email: string }

let currentUser: User | null = null
const listeners = new Set<() => void>()

export function getCurrentUser() {
  return currentUser
}

export function signUp(name: string, email: string, password: string): string | null {
  const existing = localStorage.getItem(`auth_${email}`)
  if (existing) return 'An account with this email already exists'
  localStorage.setItem(`auth_${email}`, JSON.stringify({ name, password }))
  currentUser = { name, email }
  localStorage.setItem('auth_session', JSON.stringify(currentUser))
  listeners.forEach((fn) => fn())
  return null
}

export function signIn(email: string, password: string): string | null {
  const data = localStorage.getItem(`auth_${email}`)
  if (!data) return 'No account found with this email'
  const user = JSON.parse(data)
  if (user.password !== password) return 'Incorrect password'
  currentUser = { name: user.name, email }
  localStorage.setItem('auth_session', JSON.stringify(currentUser))
  listeners.forEach((fn) => fn())
  return null
}

export function signOut() {
  currentUser = null
  localStorage.removeItem('auth_session')
  listeners.forEach((fn) => fn())
}

export function subscribeAuth(fn: () => void) {
  listeners.add(fn)
  return () => { listeners.delete(fn) }
}

export function initAuth() {
  const stored = localStorage.getItem('auth_session')
  if (stored) {
    const { email, name } = JSON.parse(stored)
    currentUser = { email, name }
  }
}
