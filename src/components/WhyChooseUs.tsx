"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { DollarSign, Zap, Shield, HeadphonesIcon } from "lucide-react"

const WhyChooseUs = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 })

  const benefits = [
    {
      title: "Best Rates",
      description:
        "We offer the highest payouts in the industry, guaranteed. Our transparent pricing means no hidden fees.",
      icon: <DollarSign className="w-6 h-6" />,
      color: "from-violet-500 to-indigo-500",
      delay: 0.2,
    },
    {
      title: "Fast Payments",
      description: "Get paid within 24 hours of accepting our offer. Choose from multiple payment methods.",
      icon: <Zap className="w-6 h-6" />,
      color: "from-indigo-500 to-blue-500",
      delay: 0.3,
    },
    {
      title: "Secure Transfers",
      description: "Bank-level encryption and secure license transfer protocols protect your data and privacy.",
      icon: <Shield className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      delay: 0.4,
    },
    {
      title: "Expert Support",
      description: "Our team of software licensing experts is available 24/7 to assist with any questions.",
      icon: <HeadphonesIcon className="w-6 h-6" />,
      color: "from-cyan-500 to-teal-500",
      delay: 0.5,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  return (
    <section id="why-choose-us" ref={sectionRef} className="py-20 md:py-32 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-b from-indigo-100/30 dark:from-indigo-900/10 to-transparent rounded-bl-full"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-t from-violet-100/30 dark:from-violet-900/10 to-transparent rounded-tr-full"></div>

        {/* Animated particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-indigo-400/20 dark:bg-indigo-500/20"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 30 - 15],
              x: [0, Math.random() * 30 - 15],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="section-title"
          >
            Why Choose Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            SoftSell provides an unmatched experience for software license resale with industry-leading benefits.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: benefit.delay }}
              className="group"
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl p-6 h-full border border-gray-100 dark:border-gray-700 transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden">
                {/* Gradient border on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 rounded-xl border-2 border-transparent bg-clip-border bg-gradient-to-r from-violet-500/50 to-indigo-500/50 blur"></div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon with gradient background */}
                  <div className="mb-5 relative">
                    <div
                      className={`absolute -inset-1 rounded-lg bg-gradient-to-r ${benefit.color} opacity-20 blur-sm group-hover:opacity-30 group-hover:blur transition-all duration-300`}
                    ></div>
                    <div className="relative bg-white dark:bg-gray-800 rounded-lg p-3 inline-block">
                      <div className={`text-transparent bg-clip-text bg-gradient-to-r ${benefit.color}`}>
                        {benefit.icon}
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">{benefit.description}</p>
                </div>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                  <div
                    className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl ${benefit.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 transform origin-top-right -rotate-45 translate-x-8 -translate-y-8 group-hover:translate-x-4 group-hover:-translate-y-4`}
                  ></div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 bg-gradient-to-r from-violet-500 to-indigo-600 rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="relative p-8 md:p-12">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                  <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                    <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100" height="100" fill="url(#grid)" />
              </svg>
            </div>

            <div className="relative z-10">
              <div className="text-center mb-10">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Trusted by Businesses Worldwide</h3>
                <p className="text-indigo-100">Our numbers speak for themselves</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { value: "$12M+", label: "Paid to Sellers" },
                  { value: "5,000+", label: "Licenses Sold" },
                  { value: "98%", label: "Satisfaction Rate" },
                  { value: "24h", label: "Average Payout Time" },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-indigo-200 text-sm md:text-base">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyChooseUs
