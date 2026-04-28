import Cit from "@/assets/projects/Cit.png";
import Efeesync from "@/assets/projects/efeesync.png";
import Gis from "@/assets/projects/gis.png";
import Rkia from "@/assets/projects/rkia.png";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import {
  FiChevronLeft,
  FiChevronRight,
  FiExternalLink,
  FiGithub,
} from "react-icons/fi";

const projects = [
  {
    title: "EfeeSync",
    category: "Financial System",
    description:
      "A centralized digital ledger engineered to eliminate manual accounting errors. It features real-time synchronization across institutional modules.",
    techs: ["React", "Tailwind", "PHP"],
    image: Efeesync,
    accent: "#3b82f6",
  },
  {
    title: "Warehouse GIS",
    category: "Logistics / AI",
    description:
      "Enterprise-grade General Inventory System with glassmorphic dashboards, predictive stock tracking, and automated warehouse reporting.",
    techs: ["Firebase", "TypeScript", "React"],
    image: Gis,
    accent: "#8b5cf6",
  },
  {
    title: "RKIA Portal",
    category: "IoT / Hardware",
    description:
      "Physical computing interface connecting ESP32 sensors to a high-performance web dashboard for real-time environmental monitoring.",
    techs: ["IoT", "ESP32", "Three.js"],
    image: Rkia,
    accent: "#10b981",
  },
  {
    title: "CIT Repository",
    category: "IoT / Hardware",
    description:
      "Physical computing interface connecting ESP32 sensors to a high-performance web dashboard for real-time environmental monitoring.",
    techs: ["IoT", "ESP32", "Three.js"],
    image: Cit,
    accent: "#10b981",
  },
];

export function ProjectPage() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % projects.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + projects.length) % projects.length);

  return (
    <section
      id="projects"
      className="relative h-screen w-full  text-white overflow-hidden flex items-center justify-center font-sans"
    >
      {/* CONTENT GRID */}
      <div className="relative z-10 w-full max-w-350 px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* LEFT SIDE: PROJECT INFO */}
        <div className="lg:col-span-5 space-y-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-px " />
                <span className="text-xs font-mono tracking-[0.4em] uppercase text-blue-500">
                  Project {index + 1}
                </span>
              </div>

              <h2 className="text-6xl lg:text-8xl font-black tracking-tighter bg-linear-to-b from-gray-200 to-black bg-clip-text text-transparent mb-4 leading-none">
                {projects[index].title.split(" ")[0]}
                <span className="block text-transparent bg-clip-text bg-linear-to-b from-gray-200 to-black">
                  {projects[index].title.split(" ")[1] || "Project"}
                </span>
              </h2>

              <p className="text-neutral-400 text-lg max-w-md leading-relaxed border-l border-white/10 pl-6 mb-8">
                {projects[index].description}
              </p>

              <div className="flex flex-wrap gap-2 mb-10">
                {projects[index].techs.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-1.5 bg-white/5 border border-white/10 backdrop-blur-md rounded-full text-[11px] font-bold tracking-widest uppercase text-neutral-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="#"
                  className="px-8 py-4 bg-white text-black rounded-full font-bold flex items-center gap-2 transition-shadow hover:shadow-[0_0_40px_rgba(255,255,255,0.2)]"
                >
                  Explore <FiExternalLink />
                </motion.a>
                <motion.a
                  whileHover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                  href="#"
                  className="p-4 rounded-full border border-white/10 text-white"
                >
                  <FiGithub size={20} />
                </motion.a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* RIGHT SIDE: THE HERO CARD */}
        <div className="lg:col-span-7 relative flex justify-center lg:justify-end">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 100, rotateY: -20 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              exit={{ opacity: 0, x: -100, rotateY: 20 }}
              transition={{ duration: 0.8, ease: "circOut" }}
              className="relative w-full max-w-2xl aspect-video"
              style={{ perspective: "1000px" }}
            >
              {/* Glass Frame */}
              <div className="absolute inset-0 bg-white/5 backdrop-blur-2xl border border-white/20 rounded-4xl p-3 shadow-2xl shadow-black">
                <div className="w-full h-full rounded-3xl overflow-hidden bg-[#0a0a0a]">
                  <motion.img
                    src={projects[index].image}
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </div>
              </div>

              {/* Floaties */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-6 -right-6 px-6 py-4 bg-white/10 backdrop-blur-3xl border border-white/20 rounded-2xl hidden md:flex items-center gap-3"
              >
                <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse" />
                <span className="text-xs font-bold tracking-widest uppercase">
                  Live Status: Active
                </span>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* FOOTER CONTROLS */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-12 z-20">
        <button
          onClick={prev}
          className="p-4 rounded-full border border-white/10 hover:bg-white hover:text-black transition-all group"
        >
          <FiChevronLeft size={24} className="group-hover:scale-110" />
        </button>

        <div className="flex gap-3">
          {projects.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 rounded-full transition-all duration-500 ${index === i ? "w-10 bg-white" : "w-2 bg-white/20"}`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="p-4 rounded-full border border-white/10 hover:bg-white hover:text-black transition-all group"
        >
          <FiChevronRight size={24} className="group-hover:scale-110" />
        </button>
      </div>
    </section>
  );
}
