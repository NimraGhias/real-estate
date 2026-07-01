'use client'

import { useState, useRef, useEffect } from 'react'

interface Message {
  role: 'user' | 'bot'
  content: string
}

const faqData: { keywords: string[]; answer: string }[] = [
  {
    keywords: ['hello', 'hi', 'hey', 'good morning', 'good afternoon'],
    answer: "Hello! Welcome to EstateHub. I'm your virtual assistant. How can I help you today? You can ask me about our properties, services, or anything real estate related.",
  },
  {
    keywords: ['property', 'listing', 'home', 'house', 'apartment', 'villa', 'condo', 'buy'],
    answer: "We have a wide range of properties including luxury villas, modern apartments, family homes, and commercial spaces. You can browse our featured listings on the homepage or let me know what type of property you're looking for!",
  },
  {
    keywords: ['price', 'cost', 'afford', 'budget', 'expensive', 'cheap', 'value'],
    answer: "Our properties range from $1.8M to over $6.5M. We have options across various price points. Use our search tool on the homepage to filter by your preferred price range, or contact us for personalized assistance.",
  },
  {
    keywords: ['mortgage', 'loan', 'finance', 'financing', 'interest', 'rate'],
    answer: "We offer mortgage assistance services! Our team can connect you with trusted lenders who offer competitive rates. We'll help you navigate the entire mortgage process from pre-approval to closing.",
  },
  {
    keywords: ['location', 'area', 'neighborhood', 'city', 'where'],
    answer: "We have properties in prime locations including New York, Los Angeles, Miami, Chicago, San Francisco, Boston, and more. Each property listing includes details about the neighborhood and local amenities.",
  },
  {
    keywords: ['service', 'offer', 'provide', 'help', 'assistance', 'support'],
    answer: "We offer comprehensive real estate services including property sales, property management, home valuation, interior design/staging, mortgage assistance, and legal support. Whatever your real estate needs, we've got you covered!",
  },
  {
    keywords: ['sell', 'selling', 'list', 'listing my', 'agent'],
    answer: "Thinking of selling? Our team provides expert guidance through every step of the sale process. We offer professional home valuation, staging services, and marketing to help you get the best price for your property.",
  },
  {
    keywords: ['rent', 'rental', 'lease', 'tenant', 'landlord'],
    answer: "We offer comprehensive property management services for both tenants and landlords. Our team handles everything from tenant screening to maintenance, making the rental process smooth and stress-free.",
  },
  {
    keywords: ['contact', 'call', 'phone', 'email', 'reach', 'office', 'address'],
    answer: "You can reach us at +1 (555) 123-4567 or email us at hello@estatehub.com. Our office is located at 123 Main Street, Suite 100, New York, NY 10001. Feel free to also use the contact form on our website!",
  },
  {
    keywords: ['team', 'agent', 'realtor', 'broker', 'who'],
    answer: "Our team consists of experienced real estate professionals dedicated to helping you find the perfect property. We have agents specializing in residential, commercial, and luxury properties.",
  },
  {
    keywords: ['thank', 'thanks'],
    answer: "You're welcome! Is there anything else I can help you with? Feel free to ask about any of our properties or services.",
  },
  {
    keywords: ['bye', 'goodbye', 'see you'],
    answer: "Thank you for visiting EstateHub! If you need any further assistance, don't hesitate to reach out. Have a great day!",
  },
]

function getBotResponse(input: string): string {
  const lower = input.toLowerCase()
  for (const faq of faqData) {
    for (const keyword of faq.keywords) {
      if (lower.includes(keyword)) return faq.answer
    }
  }
  return "I'm not sure I understand your question. Could you please rephrase it? You can ask me about properties, pricing, services, locations, or how to contact us!"
}

function TypingDots() {
  return (
    <div className="flex gap-1.5 px-4 py-3">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="w-2 h-2 bg-gray-400 rounded-full"
          style={{
            animation: `typing-dot 1.4s ease-in-out ${i * 0.2}s infinite`,
          }}
        />
      ))}
      <style>{`
        @keyframes typing-dot {
          0%, 60%, 100% { opacity: 0.3; transform: translateY(0); }
          30% { opacity: 1; transform: translateY(-4px); }
        }
      `}</style>
    </div>
  )
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', content: "Hi there! I'm EstateHub's virtual assistant. Ask me anything about our properties and services!" },
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isTyping])

  function handleSend() {
    const trimmed = input.trim()
    if (!trimmed) return

    setMessages((prev) => [...prev, { role: 'user', content: trimmed }])
    setInput('')
    setIsTyping(true)

    setTimeout(() => {
      const response = getBotResponse(trimmed)
      setMessages((prev) => [...prev, { role: 'bot', content: response }])
      setIsTyping(false)
    }, 800 + Math.random() * 600)
  }

  function handleQuickQuestion(question: string) {
    setMessages((prev) => [...prev, { role: 'user', content: question }])
    setIsTyping(true)
    setTimeout(() => {
      const response = getBotResponse(question)
      setMessages((prev) => [...prev, { role: 'bot', content: response }])
      setIsTyping(false)
    }, 800 + Math.random() * 600)
  }

  return (
    <>
      {isOpen && (
        <div
          className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden"
          style={{ animation: 'fadeInUp 0.3s ease-out' }}
        >
          <div className="bg-gray-950 p-4 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-amber-500 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-gray-950" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold">EstateHub Assistant</p>
                  <p className="text-xs text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                    Online
                  </p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-1.5 hover:bg-gray-800 rounded-lg transition-colors">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          <div className="h-80 overflow-y-auto p-4 space-y-3 bg-gray-50/50">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in-up`}>
                <div
                  className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-gray-900 text-white rounded-br-md'
                      : 'bg-white text-gray-800 rounded-bl-md shadow-sm border border-gray-100'
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white rounded-2xl rounded-bl-md shadow-sm border border-gray-100">
                  <TypingDots />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="border-t border-gray-100 p-3 bg-white">
            <div className="flex gap-2 mb-2 flex-wrap">
              <button onClick={() => handleQuickQuestion('What properties do you have?')} className="px-3 py-1.5 text-xs font-medium text-amber-700 bg-amber-50 hover:bg-amber-100 rounded-full transition-colors">
                Properties
              </button>
              <button onClick={() => handleQuickQuestion('What are your services?')} className="px-3 py-1.5 text-xs font-medium text-amber-700 bg-amber-50 hover:bg-amber-100 rounded-full transition-colors">
                Services
              </button>
              <button onClick={() => handleQuickQuestion('How can I contact you?')} className="px-3 py-1.5 text-xs font-medium text-amber-700 bg-amber-50 hover:bg-amber-100 rounded-full transition-colors">
                Contact
              </button>
            </div>
            <div className="flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your question..."
                className="flex-1 px-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400/30 focus:border-amber-400"
              />
              <button onClick={handleSend} className="px-4 py-2.5 bg-gray-900 hover:bg-gray-800 text-white rounded-xl transition-all hover:shadow-lg">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gray-950 hover:bg-gray-800 text-white rounded-full shadow-xl hover:shadow-2xl transition-all flex items-center justify-center hover:scale-105 active:scale-95"
        aria-label="Chat"
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
      </button>
    </>
  )
}
