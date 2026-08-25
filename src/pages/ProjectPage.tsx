import Cit from "@/assets/projects/cit.png";
import Efeesync from "@/assets/projects/efeesync.png";
import Gis from "@/assets/projects/gis.png";
import Rkia from "@/assets/projects/rkia.png";
import Lupi from "@/assets/projects/lupi.png";
import DevForge from "@/assets/projects/devforge.png";
import { motion } from "framer-motion";
import { FolderGit2, Sparkles, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Progresibong Lupi",
    category: "Financial System",
    description:
      "A modern municipal web platform that provides citizens with accessible information, government services, announcements, events, projects, and community resources.",
    techs: [
      "React",
      "Tailwind CSS",
      "TypeScript",
      "Node JS",
      "Express",
      "Framer Motion",
    ],
    image: Lupi,
    accent: "from-primaryColor to-black",
    badgeColor: "bg-blue-50 border-blue-200 text-blue-700",
    glow: "group-hover:shadow-blue-500/10",
  },
  {
    title: "DevForge",
    category: "Developer TooLs System",
    description:
      "A modern municipal web platform that provides citizens with accessible information, government services, announcements, events, projects, and community resources.",
    techs: [
      "React",
      "Tailwind CSS",
      "TypeScript",
      "Node JS",
      "Express",
      "Framer Motion",
    ],
    image: DevForge,
    accent: "from-primaryColor to-black",
    badgeColor: "bg-blue-50 border-blue-200 text-blue-700",
    glow: "group-hover:shadow-blue-500/10",
  },
  {
    title: "EfeeSync",
    category: "Financial System",
    description:
      "A centralized digital ledger engineered for CBSUA-Sipocot councils to eliminate manual accounting errors. Streamlines monitoring, recording, and processing of student fees with real-time accuracy.",
    techs: ["React", "Tailwind CSS", "JavaScript"],
    image: Efeesync,
    accent: "from-primaryColor to-black",
    badgeColor: "bg-blue-50 border-blue-200 text-blue-700",
    glow: "group-hover:shadow-blue-500/10",
  },
  {
    title: "Warehouse GIS",
    category: "Logistics / AI",
    description:
      "Enterprise-grade General Inventory System featuring dynamic dashboards, predictive stock tracking, and automated reporting for multi-tier warehouse facilities.",
    techs: ["Express", "Node.js", "TypeScript", "React", "Tailwind CSS"],
    image: Gis,
    accent: "from-primaryColor to-black",
    badgeColor: "bg-purple-50 border-purple-200 text-purple-700",
    glow: "group-hover:shadow-purple-500/10",
  },
  {
    title: "RKIA Portal",
    category: "IoT / Hardware",
    description:
      "Physical computing interface connecting ESP32 environmental sensors to a high-performance web dashboard for real-time telemetry, telemetry alerts, and logging.",
    techs: ["React", "Tailwind CSS", "JavaScript", "PHP"],
    image: Rkia,
    accent: "from-primaryColor to-black",
    badgeColor: "bg-emerald-50 border-emerald-200 text-emerald-700",
    glow: "group-hover:shadow-emerald-500/10",
  },
  {
    title: "CIT Repository",
    category: "Academic / Archival",
    description:
      "A centralized digital asset and capstone research repository optimized for fast search indexing, categorizing, and seamless student access.",
    techs: ["React", "Tailwind CSS", "JavaScript"],
    image: Cit,
    accent: "from-primaryColor to-black",
    badgeColor: "bg-amber-50 border-amber-200 text-amber-700",
    glow: "group-hover:shadow-amber-500/10",
  },
];

export function ProjectPage() {
  return (
    <section
      id="projects"
      className="relative min-h-screen w-full bg-slate-50 text-slate-900 py-24 px-4 sm:px-8 lg:px-16 overflow-hidden flex flex-col justify-center items-center"
    >
      <div className="max-w-6xl w-full relative z-10 space-y-16">
        {/* Header Section */}
        <div className="text-left space-y-4 border-b border-slate-200/80 pb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-slate-200 text-xs text-sky-700 font-mono tracking-wider shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-sky-500" />
            <span>PORTFOLIO & SOLUTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            Featured Works
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl leading-relaxed">
            A showcase of real-world applications, IoT integration dashboards,
            and financial platforms engineered with clean design and robust
            technical architectures.
          </p>
        </div>

        {/* Projects Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
        >
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className={`group relative flex flex-col justify-between rounded-3xl bg-white border border-slate-200/80 shadow-md hover:shadow-2xl ${project.glow} transition-all duration-300 overflow-hidden`}
            >
              {/* Top Accent Line */}
              <div
                className={`absolute inset-x-0 top-0 h-1.5 bg-linear-to-r ${project.accent} opacity-80 group-hover:opacity-100 transition-opacity duration-300`}
              />

              <div className="p-6 sm:p-8 space-y-6">
                {/* Project Image Box with Hover Scale */}
                <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/80 shadow-inner">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-slate-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Category & Title */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${project.badgeColor}`}
                    >
                      {project.category}
                    </span>
                    <FolderGit2 className="w-4 h-4 text-slate-400 group-hover:text-slate-700 transition-colors" />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight flex items-center justify-between">
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-5 h-5 text-slate-400 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
                  </h3>
                </div>

                {/* Description */}
                <p className="text-slate-600 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Footer Tech Stack Pills */}
              <div className="p-6 sm:p-8 pt-0 mt-auto">
                <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-2">
                  {project.techs.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="text-xs font-medium px-3 py-1 rounded-lg bg-slate-100/80 border border-slate-200/60 text-slate-700 group-hover:bg-slate-100 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
