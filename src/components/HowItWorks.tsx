"use client"

import { useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { gsap } from "gsap"
import { Upload, DollarSign, CreditCard } from "lucide-react"

const HowItWorks = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 })

  const steps = [
    {
      title: "Upload License",
      description: "Securely upload your software license details through our encrypted portal.",
      icon: <Upload className="w-8 h-8" />,
      color: "from-violet-500 to-indigo-500",
      delay: 0.2,
    },
    {
      title: "Get Valuation",
      description: "Our AI-powered system analyzes market data to provide the best possible valuation.",
      icon: <DollarSign className="w-8 h-8" />,
      color: "from-indigo-500 to-blue-500",
      delay: 0.4,
    },
    {
      title: "Get Paid",
      description: "Accept our offer and receive payment via your preferred method within 24 hours.",
      icon: <CreditCard className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      delay: 0.6,
    },
  ]

  useEffect(() => {
    if (sectionRef.current && isInView) {
      // Animate the connection lines between steps
      gsap.fromTo(
        ".connection-line",
        {
          width: 0,
          opacity: 0,
        },
        {
          width: "100%",
          opacity: 1,
          duration: 1,
          stagger: 0.5,
          ease: "power2.out",
          delay: 0.8,
        },
      )
    }
  }, [isInView])

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="py-20 md:py-32 bg-gray-50 dark:bg-gray-900/50 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white dark:from-gray-900 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white dark:from-gray-900 to-transparent"></div>
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-indigo-200/30 dark:bg-indigo-900/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-violet-200/30 dark:bg-violet-900/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="section-title"
          >
            How It Works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Our streamlined process makes selling your software licenses quick, secure, and profitable.
          </motion.p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connection lines between steps */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 dark:bg-gray-700 transform -translate-y-1/2 z-0"></div>
          <div className="hidden md:block connection-line absolute top-1/2 left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] h-0.5 bg-gradient-to-r from-violet-500 to-indigo-500 transform -translate-y-1/2 z-10"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: step.delay }}
                className="relative z-20"
              >
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 text-center relative overflow-hidden group">
                  {/* Animated background on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500 ease-out"></div>

                  {/* Step number */}
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-sm font-bold text-gray-500 dark:text-gray-400">
                    {index + 1}
                  </div>

                  {/* Icon with animated background */}
                  <div className="relative mx-auto mb-6 w-20 h-20">
                    <div
                      className={`absolute inset-0 rounded-full bg-gradient-to-r ${step.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
                    ></div>
                    <div className="absolute inset-2 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center">
                      <div className={`text-transparent bg-clip-text bg-gradient-to-r ${step.color}`}>{step.icon}</div>
                    </div>

                    {/* Animated ring */}
                    <div
                      className={`absolute inset-0 rounded-full border-2 border-dashed border-transparent bg-clip-border bg-gradient-to-r ${step.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 spin-slow`}
                    ></div>
                  </div>

                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{step.description}</p>

                  {/* Animated arrow for non-last items */}
                  {index < steps.length - 1 && (
                    <div className="md:hidden mt-6 flex justify-center">
                      <motion.div
                        animate={{ y: [0, 5, 0] }}
                        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                        className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center"
                      >
                        <svg
                          className="w-4 h-4 text-gray-500 dark:text-gray-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 14l-7 7m0 0l-7-7m7 7V3"
                          />
                        </svg>
                      </motion.div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <a href="#contact" className="btn-primary inline-flex items-center">
            Start Selling Now
            <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default HowItWorks
