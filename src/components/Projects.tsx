"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

// Project data aligned with resume
const projects = [
  {
    id: "fleet-dashboard",
    title: "Robot Efficiency & Fleet Dashboard",
    category: "React · MongoDB · Mapbox",
    description: "13-section analytics dashboard with Mapbox street maps and robot KPIs.",
    longDescription:
      "Built at OttonomyIO: a 13-section React analytics dashboard with toggleable sections (e.g. RobotTotalTimeSection, RunningStateStreetMapSection) and Mapbox-powered street visualizations. MongoDB aggregation pipelines with GPS and time-windowed segmentation for fleet status analytics.",
    techStack: ["React.js", "MongoDB", "Mapbox GL JS", "GeoJSON", "Node.js"],
    repo: "https://github.com/Sangam02",
    demo: "https://testnoc.ottonomy.io",
    color: "from-blue-600/20 to-cyan-500/20",
    hoverColor: "group-hover:from-blue-600/40 group-hover:to-cyan-500/40",
    span: "md:col-span-2 md:row-span-2",
    mediaType: "image" as const,
    mediaUrl:
      "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    demoUrl:
      "https://images.pexels.com/photos/3862136/pexels-photo-3862136.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: "blogify",
    title: "Blogify",
    category: "MERN · REST · JWT",
    description: "Full-stack blogging platform with auth and CRUD.",
    longDescription:
      "MERN stack blogging platform featuring JWT authentication, full CRUD for posts, and a responsive UI—practice in end-to-end API design and secure sessions.",
    techStack: ["MongoDB", "Express", "React", "Node.js", "JWT"],
    repo: "https://github.com/Sangam02",
    demo: "#",
    color: "from-purple-600/20 to-pink-500/20",
    hoverColor: "group-hover:from-purple-600/40 group-hover:to-pink-500/40",
    span: "md:col-span-1 md:row-span-2",
    mediaType: "image" as const,
    mediaUrl:
      "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    demoUrl:
      "https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: "food-management",
    title: "Food Management System",
    category: "Django · SQL · JavaScript",
    description: "Menu, orders, and recommendations.",
    longDescription:
      "Full-stack platform for menu management, order tracking, and a personalized recommendation engine based on user behavior—Django backend, SQL, and JavaScript on the front.",
    techStack: ["Django", "SQL", "JavaScript"],
    repo: "https://github.com/Sangam02",
    demo: "https://sangam02.github.io/Foody.com",
    color: "from-orange-500/20 to-red-500/20",
    hoverColor: "group-hover:from-orange-500/40 group-hover:to-red-500/40",
    span: "md:col-span-1 md:row-span-1",
    mediaType: "image" as const,
    mediaUrl:
      "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    demoUrl:
      "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: "web-crawler",
    title: "Web Crawling & Data Extraction",
    category: "Python · BeautifulSoup",
    description: "Automated structured data pipelines.",
    longDescription:
      "Python tooling with BeautifulSoup and regex for structured data extraction workflows—cutting manual processing time by a large margin through automation.",
    techStack: ["Python", "BeautifulSoup", "Regex"],
    repo: "https://github.com/Sangam02",
    demo: "#",
    color: "from-green-600/20 to-teal-500/20",
    hoverColor: "group-hover:from-green-600/40 group-hover:to-teal-500/40",
    span: "md:col-span-1 md:row-span-1",
    mediaType: "image" as const,
    mediaUrl:
      "https://images.pexels.com/photos/669619/pexels-photo-669619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    demoUrl:
      "https://images.pexels.com/photos/270360/pexels-photo-270360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

const INITIAL_VISIBLE_COUNT = 4;

export default function Projects() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);

  const visibleProjects = projects.slice(0, visibleCount);
  const selected = projects.find((p) => p.id === selectedId) ?? null;

  return (
    <section
      className="relative z-20 bg-[#0a0a0a] min-h-screen py-32 px-4 md:px-12 overflow-hidden"
      id="projects"
    >
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[20%] left-[-5%] w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
            Featured <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-400">Work</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            Production dashboards at OttonomyIO and full-stack projects spanning MERN, Django, and Python automation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-4 md:gap-6 auto-rows-fr">
          {visibleProjects.map((project, index) => (
            <motion.button
              type="button"
              key={project.id}
              layout
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              onClick={() => setSelectedId(project.id)}
              className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 text-left backdrop-blur-md ${project.span} min-h-[200px] md:min-h-0 hover:border-white/20 transition-colors`}
            >
              <div
                className={`absolute inset-0 bg-linear-to-br ${project.color} ${project.hoverColor} transition-all duration-500 opacity-80 group-hover:opacity-100`}
              />
              <img
                src={project.mediaUrl}
                alt=""
                className="absolute inset-0 h-full w-full object-cover opacity-40 mix-blend-overlay transition-transform duration-700 group-hover:scale-105"
              />
              <div className="relative z-10 flex h-full flex-col justify-end p-6 md:p-8">
                <p className="mb-2 text-xs font-mono uppercase tracking-widest text-blue-300/90">{project.category}</p>
                <h3 className="text-2xl font-bold text-white md:text-3xl">{project.title}</h3>
                <p className="mt-3 line-clamp-2 text-sm text-gray-300">{project.description}</p>
              </div>
            </motion.button>
          ))}
        </div>

        {visibleCount < projects.length && (
          <motion.div className="mt-12 flex justify-center" initial={false}>
            <button
              type="button"
              onClick={() => setVisibleCount(projects.length)}
              className="rounded-full border border-white/15 bg-white/5 px-8 py-3 text-sm font-medium text-white backdrop-blur-sm hover:bg-white/10"
            >
              Show more
            </button>
          </motion.div>
        )}
      </div>

      <AnimatePresence>
        {selected && (
          <>
            <motion.div
              role="presentation"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-black/75 backdrop-blur-md"
              onClick={() => setSelectedId(null)}
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-modal-title"
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ type: "spring", damping: 26, stiffness: 320 }}
              className="fixed left-1/2 top-1/2 z-[101] max-h-[90vh] w-[calc(100%-2rem)] max-w-4xl -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-3xl border border-white/10 bg-[#141414] shadow-2xl"
            >
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setSelectedId(null)}
                  className="absolute right-4 top-4 z-20 rounded-full bg-black/50 p-2 text-white hover:bg-black/70"
                  aria-label="Close"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </button>
                <div className="aspect-video w-full overflow-hidden bg-black/40">
                  <img src={selected.demoUrl} alt="" className="h-full w-full object-cover" />
                </div>
              </div>
              <div className="space-y-6 p-8 md:p-10">
                <div>
                  <p className="mb-2 text-xs font-mono uppercase tracking-widest text-blue-400">{selected.category}</p>
                  <h3 id="project-modal-title" className="text-3xl font-bold text-white md:text-4xl">
                    {selected.title}
                  </h3>
                </div>
                <p className="leading-relaxed text-gray-300">{selected.longDescription}</p>
                <div className="flex flex-wrap gap-2">
                  {selected.techStack.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-gray-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-4 pt-2">
                  <a
                    href={selected.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-black hover:bg-gray-200"
                  >
                    GitHub
                  </a>
                  {selected.demo !== "#" ? (
                    <a
                      href={selected.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white hover:bg-white/10"
                    >
                      Live demo
                    </a>
                  ) : null}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
