"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X, Send, Bot, User } from "lucide-react"

type Message = {
  id: string
  text: string
  sender: "user" | "bot"
  timestamp: Date
}

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi there! 👋 I'm SoftSell's AI assistant. How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)

  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const sampleQuestions = [
    "How do I sell my license?",
    "What types of software do you buy?",
    "How long does payment take?",
    "Is my data secure?",
  ]

  const botResponses: Record<string, string> = {
    "how do i sell my license":
      "Selling your license is easy! Just fill out our contact form with details about your software license. Our team will evaluate it and provide you with a quote within 24 hours. Once you accept, we handle the transfer process and send payment via your preferred method.",
    "what types of software do you buy":
      "We purchase a wide range of enterprise software licenses including Microsoft, Adobe, Oracle, SAP, Autodesk, VMware, and many others. We specialize in enterprise-grade software, but we're open to evaluating any legitimate software license.",
    "how long does payment take":
      "After accepting our offer, you'll receive payment within 24 hours. We offer multiple payment methods including bank transfer, PayPal, and cryptocurrency for your convenience.",
    "is my data secure":
      "We take security very seriously. All license transfers are handled through secure, encrypted channels. Your personal and financial information is protected with bank-level encryption, and we never share your data with third parties.",
  }

  useEffect(() => {
    if (isOpen) {
      scrollToBottom()
      if (inputRef.current) {
        inputRef.current.focus()
      }
    }
  }, [isOpen, messages])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const toggleChat = () => {
    setIsOpen(!isOpen)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!inputValue.trim()) return

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    // Simulate AI response
    setTimeout(
      () => {
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: getBotResponse(inputValue),
          sender: "bot",
          timestamp: new Date(),
        }

        setMessages((prev) => [...prev, botMessage])
        setIsTyping(false)
      },
      1000 + Math.random() * 1000,
    )
  }

  const getBotResponse = (input: string): string => {
    const normalizedInput = input.toLowerCase().trim()

    // Check for exact matches in our predefined responses
    for (const key in botResponses) {
      if (normalizedInput.includes(key)) {
        return botResponses[key]
      }
    }

    // Fallback responses
    if (normalizedInput.includes("price") || normalizedInput.includes("cost") || normalizedInput.includes("worth")) {
      return "The value of your software license depends on several factors including the software type, version, remaining subscription time, and current market demand. Submit your details through our form, and we'll provide a free valuation within 24 hours."
    }

    if (normalizedInput.includes("thank")) {
      return "You're welcome! Is there anything else I can help you with?"
    }

    // Default response
    return "I'm not sure I understand. Could you try rephrasing your question? Or you can ask about how to sell your license, what types of software we buy, payment timelines, or data security."
  }

  const handleSampleQuestion = (question: string) => {
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: question,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setIsTyping(true)

    // Simulate AI response
    setTimeout(
      () => {
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: getBotResponse(question),
          sender: "bot",
          timestamp: new Date(),
        }

        setMessages((prev) => [...prev, botMessage])
        setIsTyping(false)
      },
      1000 + Math.random() * 1000,
    )
  }

  return (
    <>
      {/* Chat toggle button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200, damping: 15 }}
        onClick={toggleChat}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow"
        aria-label="Open chat"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 w-full max-w-sm bg-white dark:bg-gray-800 rounded-xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700"
          >
            {/* Chat header */}
            <div className="bg-gradient-to-r from-violet-600 to-indigo-600 p-4 text-white">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3">
                  <Bot size={20} />
                </div>
                <div>
                  <h3 className="font-bold">SoftSell Assistant</h3>
                  <p className="text-xs text-indigo-100">Online | Typically replies instantly</p>
                </div>
              </div>
            </div>

            {/* Chat messages */}
            <div className="h-80 overflow-y-auto p-4 bg-gray-50 dark:bg-gray-900">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`mb-4 flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl p-3 ${
                      message.sender === "user"
                        ? "bg-indigo-600 text-white rounded-tr-none"
                        : "bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 shadow-sm border border-gray-200 dark:border-gray-700 rounded-tl-none"
                    }`}
                  >
                    <div className="flex items-center mb-1">
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center mr-2 ${
                          message.sender === "user" ? "bg-indigo-500" : "bg-violet-100 dark:bg-violet-900"
                        }`}
                      >
                        {message.sender === "user" ? (
                          <User size={12} className="text-white" />
                        ) : (
                          <Bot size={12} className="text-violet-600 dark:text-violet-400" />
                        )}
                      </div>
                      <span className="text-xs opacity-70">{message.sender === "user" ? "You" : "SoftSell AI"}</span>
                    </div>
                    <p>{message.text}</p>
                  </div>
                </div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <div className="mb-4 flex justify-start">
                  <div className="max-w-[80%] rounded-2xl p-3 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 shadow-sm border border-gray-200 dark:border-gray-700 rounded-tl-none">
                    <div className="flex items-center space-x-1">
                      <div
                        className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-500 animate-bounce"
                        style={{ animationDelay: "0ms" }}
                      ></div>
                      <div
                        className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-500 animate-bounce"
                        style={{ animationDelay: "150ms" }}
                      ></div>
                      <div
                        className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-500 animate-bounce"
                        style={{ animationDelay: "300ms" }}
                      ></div>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Sample questions */}
            <div className="p-3 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">Suggested questions:</p>
              <div className="flex flex-wrap gap-2">
                {sampleQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleSampleQuestion(question)}
                    className="text-xs bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800 rounded-full px-3 py-1 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition-colors"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>

            {/* Chat input */}
            <form onSubmit={handleSubmit} className="p-3 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={handleInputChange}
                  placeholder="Type your message..."
                  className="flex-1 bg-gray-100 dark:bg-gray-700 border-0 rounded-full py-2 px-4 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim()}
                  className={`ml-2 w-10 h-10 rounded-full flex items-center justify-center ${
                    inputValue.trim()
                      ? "bg-indigo-600 text-white"
                      : "bg-gray-200 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed"
                  }`}
                >
                  <Send size={18} />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default ChatWidget
