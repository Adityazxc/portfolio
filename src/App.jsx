import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import Navbar from './components/layout/navbar'
import Hero from './components/sections/hero'
import About from './components/sections/about'
import Projects from './components/sections/projects'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />

      {/* Next sections */}
      <section id="experience" className="border-t border-black/10 px-6 py-20 md:px-12 lg:px-16">
        <div className="mx-auto max-w-[1440px]">
          <p className="font-mono text-xs tracking-widest text-accent">
            03 / EXPERIENCE
          </p>
          <h2 className="mt-5 font-display text-5xl font-semibold">
            Where I've contributed.
          </h2>
          <p className="mt-4 text-ink/50">
            Professional experience and selected contributions.
          </p>
        </div>
      </section>

      <section id="contact" className="border-t border-black/10 bg-ink px-6 py-24 text-white md:px-12 lg:px-16">
        <div className="mx-auto max-w-[1440px]">
          <p className="font-mono text-xs tracking-widest text-blue-300">
            04 / GET IN TOUCH
          </p>

          <h2 className="mt-8 max-w-4xl font-display text-5xl font-semibold leading-tight tracking-tight md:text-7xl">
            Let's build something meaningful together.
          </h2>

          <a
            href="mailto:your-email@example.com"
            className="mt-10 inline-flex items-center gap-3 bg-accent px-7 py-4 text-sm transition-colors hover:bg-white hover:text-ink"
          >
            Get in touch ↗
          </a>

          <div className="mt-24 flex flex-col justify-between gap-4 border-t border-white/20 pt-6 md:flex-row">
            <p className="text-xs text-white/50">
              © 2026 Aditya Firmansyah
            </p>
            <p className="font-mono text-xs text-white/50">
              DESIGNED & DEVELOPED WITH PURPOSE.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
