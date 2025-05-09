"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import { ArrowRight } from "lucide-react"

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null)
  const circleRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (heroRef.current && circleRef.current) {
      // Mouse follow effect for the circle
      const circle = circleRef.current

      const handleMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e
        const rect = heroRef.current?.getBoundingClientRect()

        if (rect) {
          const x = clientX - rect.left
          const y = clientY - rect.top

          gsap.to(circle, {
            x: x - circle.offsetWidth / 2,
            y: y - circle.offsetHeight / 2,
            duration: 0.8,
            ease: "power2.out",
          })
        }
      }

      const heroElement = heroRef.current
      heroElement.addEventListener("mousemove", handleMouseMove)

      return () => {
        heroElement.removeEventListener("mousemove", handleMouseMove)
      }
    }
  }, [])

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Animated background circle */}
      <div
        ref={circleRef}
        className="absolute w-64 h-64 rounded-full bg-gradient-to-r from-violet-300/30 to-indigo-300/30 blur-3xl pointer-events-none opacity-0 md:opacity-70"
      ></div>

      {/* 3D Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 left-[15%] w-16 h-16 bg-gradient-to-r from-violet-500/20 to-indigo-500/20 rounded-xl transform rotate-12 floating"
          style={{ animationDelay: "0s" }}
        ></div>
        <div
          className="absolute top-1/3 right-[20%] w-20 h-20 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full transform floating"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-[25%] w-12 h-12 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg transform -rotate-12 floating"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-2/3 right-[15%] w-14 h-14 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-xl transform rotate-45 floating"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-2"
          >
            <span className="inline-block px-3 py-1 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-300 rounded-full text-sm font-medium">
              Revolutionizing Software Resale
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="block">Turn Unused Software</span>
            <span className="gradient-text">Into Instant Cash</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl"
          >
            SoftSell provides the fastest, most secure way to sell your unused software licenses. Get top dollar for
            your enterprise software with our transparent valuation process.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href="#contact" className="btn-primary group">
              Get a Quote
              <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </a>
            <a href="#how-it-works" className="btn-secondary">
              How It Works
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-violet-500/20 to-indigo-500/20 rounded-xl blur-lg"></div>
            <div className="relative bg-white dark:bg-gray-900 rounded-xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-800">
              <div className="p-1 bg-gradient-to-r from-violet-500 to-indigo-500"></div>
              <div className="p-6 md:p-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">SoftSell Dashboard</div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="col-span-2 h-40 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-2xl font-bold gradient-text mb-2">$12,450</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">Estimated Value</div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="h-18 bg-gray-100 dark:bg-gray-800 rounded-lg p-3">
                      <div className="w-full h-2 bg-indigo-200 dark:bg-indigo-900 rounded-full overflow-hidden">
                        <div className="h-full w-3/4 bg-indigo-600 dark:bg-indigo-500 rounded-full"></div>
                      </div>
                      <div className="text-xs mt-2 text-gray-500 dark:text-gray-400">Processing</div>
                    </div>
                    <div className="h-18 bg-gray-100 dark:bg-gray-800 rounded-lg p-3">
                      <div className="text-sm font-medium mb-1">License Type</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">Enterprise</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 2,
          }}
          className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center"
        >
          <motion.div
            animate={{
              y: [0, 15, 0],
              opacity: [1, 0.5, 1],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 2,
            }}
            className="w-1.5 h-3 bg-indigo-600 dark:bg-indigo-400 rounded-full mt-2"
          />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
