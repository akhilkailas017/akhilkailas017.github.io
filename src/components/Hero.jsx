import React, { useEffect } from 'react'

export default function Hero({ config }) {
  const { hero } = config

  useEffect(() => {
    let rafId
    let lenisInstance
    import('lenis').then((mod) => {
      const Lenis = mod.default || mod.Lenis || mod
      lenisInstance = new Lenis({
        duration: 1.2,
        easing: (t) => Math.sin((t * Math.PI) / 2),
        smoothWheel: true,
        smoothTouch: true,
      })
      function raf(time) {
        lenisInstance.raf(time)
        rafId = requestAnimationFrame(raf)
      }
      rafId = requestAnimationFrame(raf)
    }).catch(() => {
      // non-critical
    })

    return () => {
      if (rafId) cancelAnimationFrame(rafId)
      lenisInstance = null
    }
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-primary to-indigo-800 text-white">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">{hero.heading}</h1>
        <h2 className="text-2xl md:text-3xl font-medium mb-8">{hero.subheading}</h2>
        <p className="text-xl max-w-2xl mx-auto mb-10">
          {hero.description}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href={hero.primaryButtonLink} className="bg-white text-primary px-8 py-3 rounded-lg font-medium hover:bg-gray-100">
            {hero.primaryButtonText}
          </a>
          <a href={hero.secondaryButtonLink} className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10">
            {hero.secondaryButtonText}
          </a>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#skills" className="text-white">↓</a>
      </div>
    </section>
  )
}