import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'
import config from './configuration.json'

export default function App() {
  const [configData, setConfigData] = useState(config)

  useEffect(() => {
    // Port the original DOM-based animation initialization to React once
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains('delay-100')) entry.target.style.animationDelay = '0.1s'
          if (entry.target.classList.contains('delay-200')) entry.target.style.animationDelay = '0.2s'
          if (entry.target.classList.contains('delay-300')) entry.target.style.animationDelay = '0.3s'
          if (entry.target.classList.contains('delay-400')) entry.target.style.animationDelay = '0.4s'
          if (entry.target.classList.contains('delay-500')) entry.target.style.animationDelay = '0.5s'
          entry.target.classList.add('animate-fade-in-up')
        }
      })
    }, observerOptions)

    const animatedElements = document.querySelectorAll('.animate-fade-in-up')
    animatedElements.forEach((el) => {
      el.style.opacity = '0'
      observer.observe(el)
    })

    // skill bars
    const skillBars = document.querySelectorAll('.skill-progress')
    const skillObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          const width = entry.target.getAttribute('data-width') || entry.target.style.width
          entry.target.style.width = '0'
          setTimeout(() => {
            entry.target.style.width = width
          }, 300)
        }
      })
    }, { threshold: 0.5 })

    skillBars.forEach((bar) => {
      skillObserver.observe(bar)
    })

    return () => {
      observer.disconnect()
      skillObserver.disconnect()
    }
  }, [])

  return (
    <>
      <Header config={configData} />
      <main>
        <Hero config={configData} />
        <Skills config={configData} />
        <Projects config={configData} />
        <Experience config={configData} />
        <Education config={configData} />
        <Certifications config={configData} />
        <Contact config={configData} />
      </main>
      <Footer config={configData} />
    </>
  )
}