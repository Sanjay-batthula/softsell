"use client"

import { useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import HowItWorks from "./components/HowItWorks"
import WhyChooseUs from "./components/WhyChooseUs"
import Testimonials from "./components/Testimonials"
import ContactForm from "./components/ContactForm"
import ChatWidget from "./components/ChatWidget"
import Footer from "./components/Footer"
import { ThemeProvider } from "./components/ThemeProvider"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import "./App.css"

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

function App() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Initial loading animation
    const tl = gsap.timeline()

    tl.to(".loading-screen", {
      opacity: 0,
      duration: 0.5,
      delay: 0.5,
      onComplete: () => setIsLoaded(true),
    })

    // Initialize smooth scroll
    const sections = document.querySelectorAll("section")

    sections.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        },
      )
    })

    // Parallax effect for background elements
    gsap.to(".parallax-bg", {
      y: (i, el) => -ScrollTrigger.maxScroll(window) * el.dataset.speed,
      ease: "none",
      scrollTrigger: {
        start: 0,
        end: "max",
        invalidateOnRefresh: true,
        scrub: 0.5,
      },
    })

    return () => {
      // Clean up ScrollTrigger instances
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <ThemeProvider>
      <div className="relative overflow-hidden">
        {!isLoaded && (
          <div className="loading-screen fixed inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center z-50">
            <div className="text-white text-4xl font-bold">SoftSell</div>
          </div>
        )}

        {/* Decorative background elements */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          <div
            className="parallax-bg absolute top-[10%] left-[5%] w-64 h-64 rounded-full bg-gradient-to-r from-purple-300/20 to-pink-300/20 blur-3xl"
            data-speed="0.2"
          ></div>
          <div
            className="parallax-bg absolute top-[40%] right-[10%] w-96 h-96 rounded-full bg-gradient-to-r from-blue-300/20 to-teal-300/20 blur-3xl"
            data-speed="0.3"
          ></div>
          <div
            className="parallax-bg absolute bottom-[15%] left-[15%] w-80 h-80 rounded-full bg-gradient-to-r from-amber-300/20 to-yellow-300/20 blur-3xl"
            data-speed="0.25"
          ></div>
        </div>

        <div className="relative z-10">
          <Navbar />
          <main>
            <Hero />
            <HowItWorks />
            <WhyChooseUs />
            <Testimonials />
            <ContactForm />
          </main>
          <Footer />
          <ChatWidget />
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
