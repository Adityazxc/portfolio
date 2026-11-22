
import { motion } from 'framer-motion'
import { ArrowDown, ArrowUpRight } from 'lucide-react'

const Hero = () => {
  return (
    <section className="mx-auto max-w-[1440px] px-6 pb-24 pt-20 md:px-12 md:pb-32 md:pt-32 lg:px-16">

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="mb-8 flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-accent" />
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink/60">
            Full Stack Web Developer / Indonesia
          </p>
        </div>

        <h1 className="max-w-6xl font-display text-[clamp(3rem,8vw,7.5rem)] font-semibold leading-[0.95] tracking-[-0.065em]">
          Building digital
          <br />
          solutions for
          <br />
          <span className="text-accent">real-world</span> problems.
        </h1>

        <div className="mt-12 flex flex-col justify-between gap-8 border-t border-black/15 pt-8 md:flex-row md:items-end">

          <p className="max-w-md text-base leading-relaxed text-ink/60 md:text-lg">
            I'm Aditya Firmansyah. I build functional web applications
            and turn complex workflows into practical digital solutions.
          </p>

          <a
            href="#works"
            className="group inline-flex w-fit items-center gap-3 rounded-full bg-accent px-6 py-4 text-sm font-medium text-white transition-all hover:bg-ink"
          >
            Explore selected works
            <ArrowUpRight
              size={18}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </div>

        <div className="mt-24 flex items-center justify-between border-t border-black/15 pt-5">
          <span className="font-mono text-[10px] uppercase tracking-widest text-ink/40">
            Independent developer portfolio
          </span>

          <a
            href="#about"
            className="flex items-center gap-2 text-xs uppercase tracking-widest text-ink/50 transition-colors hover:text-accent"
          >
            Scroll to explore
            <ArrowDown size={14} />
          </a>
        </div>
      </motion.div>

    </section>
  )
}

export default Hero
