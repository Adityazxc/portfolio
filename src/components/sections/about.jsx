
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="border-t border-black/10">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-6 py-24 md:grid-cols-12 md:px-12 lg:px-16 lg:py-32">

        <div className="md:col-span-4">
          <p className="font-mono text-xs tracking-widest text-accent">
            01 / ABOUT ME
          </p>

          <h2 className="mt-5 font-display text-4xl font-semibold tracking-tight md:text-5xl">
            More than just writing code.
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="md:col-span-7 md:col-start-6"
        >
          <p className="text-xl leading-relaxed tracking-tight md:text-2xl">
            I'm a Full Stack Web Developer with hands-on experience
            building web-based applications, particularly in business
            and operational systems.
          </p>

          <p className="mt-6 leading-relaxed text-ink/60">
            My work involves translating business requirements into
            practical digital solutions — from designing database
            structures and developing backend logic to building
            responsive user interfaces.
          </p>

          <p className="mt-5 leading-relaxed text-ink/60">
            I enjoy understanding how systems work, identifying
            problems, and creating solutions that make everyday
            workflows more efficient.
          </p>

          <div className="mt-12 grid grid-cols-2 gap-6 border-t border-black/15 pt-6">
            <div>
              <p className="font-display text-2xl font-semibold">Backend</p>
              <p className="mt-1 text-sm text-ink/50">Logic & data structure</p>
            </div>

            <div>
              <p className="font-display text-2xl font-semibold">Frontend</p>
              <p className="mt-1 text-sm text-ink/50">Interface & experience</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default About
