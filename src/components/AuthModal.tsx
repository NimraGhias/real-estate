"use client";
import { useEffect, useState } from "react";

export function openAuth(mode: 'signin' | 'signup' = 'signin') {
  window.dispatchEvent(new CustomEvent('open-auth', { detail: { mode } }))
}

export default function AuthModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [mode, setMode] = useState<'signin' | 'signup'>('signin')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail
      setMode(detail?.mode || 'signin')
      setErrors({})
      setSubmitted(false)
      setEmail('')
      setPassword('')
      setName('')
      setIsOpen(true)
      document.body.style.overflow = 'hidden'
    }
    window.addEventListener('open-auth', handler)
    return () => window.removeEventListener('open-auth', handler)
  }, [])

  const close = () => {
    setIsOpen(false)
    document.body.style.overflow = ''
  }

  const validate = () => {
    const errs: Record<string, string> = {}
    if (!email.trim()) errs.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = 'Invalid email'
    if (!password || password.length < 6) errs.password = 'Password must be at least 6 characters'
    if (mode === 'signup' && !name.trim()) errs.name = 'Name is required'
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setSubmitted(true)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={close} />
      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in-95 duration-300">
        <button onClick={close} className="absolute top-4 right-4 p-2 rounded-xl hover:bg-gray-100 transition-colors z-10">
          <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-8 pt-10">
          <div className="flex mb-8 bg-gray-100 rounded-xl p-1">
            <button
              onClick={() => { setMode('signin'); setErrors({}); setSubmitted(false) }}
              className={`flex-1 py-2.5 text-sm font-semibold rounded-lg transition-all ${mode === 'signin' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
            >
              Sign In
            </button>
            <button
              onClick={() => { setMode('signup'); setErrors({}); setSubmitted(false) }}
              className={`flex-1 py-2.5 text-sm font-semibold rounded-lg transition-all ${mode === 'signup' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
            >
              Sign Up
            </button>
          </div>

          {submitted ? (
            <div className="text-center py-8">
              <div className="w-14 h-14 mx-auto mb-4 bg-emerald-100 rounded-full flex items-center justify-center">
                <svg className="w-7 h-7 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                {mode === 'signin' ? 'Welcome back!' : 'Account created!'}
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                {mode === 'signin'
                  ? 'You have been signed in successfully.'
                  : 'Please check your email to verify your account.'}
              </p>
              <button onClick={close} className="mt-6 px-6 py-2.5 text-sm font-semibold text-white bg-gray-900 rounded-xl hover:bg-gray-800 transition-all">
                Continue
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {mode === 'signup' && (
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Full Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={`w-full px-4 py-2.5 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-400/40 ${errors.name ? 'border-red-300' : 'border-gray-200'}`}
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                </div>
              )}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full px-4 py-2.5 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-400/40 ${errors.email ? 'border-red-300' : 'border-gray-200'}`}
                  placeholder="john@example.com"
                />
                {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`w-full px-4 py-2.5 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-400/40 ${errors.password ? 'border-red-300' : 'border-gray-200'}`}
                  placeholder="••••••••"
                />
                {errors.password && <p className="mt-1 text-xs text-red-500">{errors.password}</p>}
              </div>
              <button type="submit" className="w-full py-3 text-sm font-semibold text-white bg-gray-900 hover:bg-gray-800 rounded-xl transition-all hover:shadow-lg hover:shadow-gray-900/25">
                {mode === 'signin' ? 'Sign In' : 'Create Account'}
              </button>
              <p className="text-xs text-gray-400 text-center">
                {mode === 'signin' ? (
                  <>Don&apos;t have an account? <button type="button" onClick={() => { setMode('signup'); setErrors({}) }} className="text-amber-600 font-semibold hover:underline">Sign Up</button></>
                ) : (
                  <>Already have an account? <button type="button" onClick={() => { setMode('signin'); setErrors({}) }} className="text-amber-600 font-semibold hover:underline">Sign In</button></>
                )}
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
