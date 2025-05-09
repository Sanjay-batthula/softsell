"use client"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const Testimonials = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 })
  const [activeIndex, setActiveIndex] = useState(0)

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO",
      company: "TechVision Inc.",
      image: "/placeholder.svg?height=80&width=80",
      quote:
        "SoftSell made it incredibly easy to recover value from our unused enterprise licenses. The valuation was fair and the payment was processed within hours. Highly recommended!",
    },
    {
      name: "Michael Chen",
      role: "IT Director",
      company: "Global Systems",
      image: "/placeholder.svg?height=80&width=80",
      quote:
        "After our company downsized, we had excess software licenses. SoftSell offered us 30% more than competitors and handled the transfer securely. Their customer service was exceptional.",
    },
    {
      name: "Emily Rodriguez",
      role: "Finance Manager",
      company: "Innovate Solutions",
      image: "/placeholder.svg?height=80&width=80",
      quote:
        "As someone responsible for optimizing company expenses, SoftSell has been a game-changer. We've recouped thousands on unused licenses that would have otherwise gone to waste.",
    },
    {
      name: "David Wilson",
      role: "Operations Lead",
      company: "Nexus Enterprises",
      image: "/placeholder.svg?height=80&width=80",
      quote:
        "The entire process was transparent and efficient. From valuation to payment, everything was handled professionally. SoftSell has become our go-to for license resale.",
    },
  ]

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="py-20 md:py-32 bg-gray-50 dark:bg-gray-900/50 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white dark:from-gray-900 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white dark:from-gray-900 to-transparent"></div>
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-indigo-200/30 dark:bg-indigo-900/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-violet-200/30 dark:bg-violet-900/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="section-title"
          >
            Customer Testimonials
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Don't just take our word for it. Here's what our customers have to say about their experience with SoftSell.
          </motion.p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Desktop Testimonials */}
          <div className="hidden md:block">
            <div className="grid grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="group"
                >
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl p-6 h-full border border-gray-100 dark:border-gray-700 transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden">
                    {/* Gradient border on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute inset-0 rounded-xl border-2 border-transparent bg-clip-border bg-gradient-to-r from-violet-500/50 to-indigo-500/50 blur"></div>
                    </div>

                    {/* Quote icon */}
                    <div className="absolute top-6 right-6 text-indigo-200 dark:text-indigo-900">
                      <Quote size={40} />
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                      <div className="mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">"{testimonial.quote}"</div>

                      <div className="flex items-center">
                        <div className="mr-4 relative">
                          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-violet-500 to-indigo-500 opacity-70 blur-sm group-hover:opacity-100 transition-opacity duration-300"></div>
                          <div className="relative rounded-full overflow-hidden w-12 h-12 bg-gray-200 dark:bg-gray-700">
                            <img
                              src={testimonial.image || "/placeholder.svg"}
                              alt={testimonial.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold text-gray-900 dark:text-white">{testimonial.name}</div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">
                            {testimonial.role}, {testimonial.company}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile Testimonials Carousel */}
          <div className="md:hidden relative">
            <div className="overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-100 dark:border-gray-700 relative overflow-hidden"
                >
                  {/* Quote icon */}
                  <div className="absolute top-6 right-6 text-indigo-200 dark:text-indigo-900">
                    <Quote size={30} />
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <div className="mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
                      "{testimonials[activeIndex].quote}"
                    </div>

                    <div className="flex items-center">
                      <div className="mr-4 relative">
                        <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-violet-500 to-indigo-500 opacity-70 blur-sm"></div>
                        <div className="relative rounded-full overflow-hidden w-12 h-12 bg-gray-200 dark:bg-gray-700">
                          <img
                            src={testimonials[activeIndex].image || "/placeholder.svg"}
                            alt={testimonials[activeIndex].name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold text-gray-900 dark:text-white">{testimonials[activeIndex].name}</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          {testimonials[activeIndex].role}, {testimonials[activeIndex].company}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation buttons */}
            <div className="flex justify-center mt-6 space-x-2">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center mt-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 mx-1 rounded-full transition-all duration-300 ${
                    index === activeIndex ? "bg-indigo-600 dark:bg-indigo-500 w-6" : "bg-gray-300 dark:bg-gray-600"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <a href="#contact" className="btn-primary inline-flex items-center">
            Join Our Satisfied Customers
            <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
