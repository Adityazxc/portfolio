
import { motion } from 'framer-motion'
import { ArrowUpRight, ArrowRight } from 'lucide-react'
import { projects } from '../../data/projects'

const ProjectCard = ({ project, index }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.65, delay: index * 0.1 }}
      className={index === 0 ? 'md:col-span-7' : 'md:col-span-5'}
    >
      <a
        href={`/projects/${project.slug}`}
        className="group block"
      >
        <div className="relative aspect-[5/3] overflow-hidden bg-[#E7E5DE]">
          <div className="absolute inset-0 flex items-center justify-center p-6">
            <div className="w-full border border-black/15 bg-paper p-4 shadow-xl transition-transform duration-700 group-hover:scale-[1.03] md:p-6">
              <div className="mb-5 flex items-center justify-between border-b border-black/10 pb-3">
                <span className="font-mono text-[9px] uppercase tracking-widest">
                  {project.category}
                </span>
                <span className="text-xs text-ink/40">AF / {project.id}</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-accent" />
                <div className="h-2 w-2/3 rounded bg-black/15" />
              </div>

              <div className="mt-5 grid grid-cols-3 gap-2">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="bg-black/5 p-3">
                    <div className="h-2 w-1/2 bg-black/15" />
                    <div className="mt-4 h-6 w-full bg-accent/15" />
                  </div>
                ))}
              </div>

              <div className="mt-3 h-14 bg-black/5" />
            </div>
          </div>

          <div className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-accent text-white transition-transform duration-300 group-hover:rotate-45">
            <ArrowUpRight size={20} />
          </div>
        </div>

        <div className="mt-5 flex items-start justify-between gap-4">
          <div>
            <p className="font-mono text-[10px] tracking-widest text-accent">
              PROJECT {project.id} / {project.category}
            </p>

            <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight md:text-3xl">
              {project.title}
            </h3>

            <p className="mt-3 max-w-md text-sm leading-relaxed text-ink/55">
              {project.description}
            </p>
          </div>

          <ArrowUpRight
            className="mt-2 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
            size={22}
          />
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="border border-black/15 px-3 py-1.5 font-mono text-[10px] text-ink/60"
            >
              {tech}
            </span>
          ))}
        </div>
      </a>
    </motion.article>
  )
}

const Projects = () => {
  return (
    <section id="works" className="border-t border-black/10">
      <div className="mx-auto max-w-[1440px] px-6 py-24 md:px-12 lg:px-16 lg:py-32">

        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="font-mono text-xs tracking-widest text-accent">
              02 / SELECTED WORKS
            </p>

            <h2 className="mt-5 font-display text-5xl font-semibold tracking-tight md:text-7xl">
              Selected projects<span className="text-accent">.</span>
            </h2>
          </div>

          <p className="max-w-xs text-sm leading-relaxed text-ink/55">
            A collection of applications and digital solutions
            I've contributed to and developed.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-12">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>

        <div className="mt-20 border-t border-black/15 pt-8">
          <a
            href="#contact"
            className="group flex items-center justify-between"
          >
            <span className="font-display text-xl font-medium md:text-2xl">
              Have a project in mind?
            </span>

            <span className="flex items-center gap-3 text-sm text-accent">
              Let's talk
              <ArrowRight className="transition-transform group-hover:translate-x-2" />
            </span>
          </a>
        </div>

      </div>
    </section>
  )
}

export default Projects
