import { motion } from "framer-motion";
import { Cloud, Code2, Database, Terminal, BarChart2, Sparkles } from "lucide-react";
import Pattern from "@/assets/pattern/intersecting-waves-split.svg"

const SKILL_CATEGORIES = [
  {
    title: "Frontend Engineering",
    icon: <Code2 className="w-5 h-5 text-cyan-400" />,
    color: "cyan",
    glowColor: "rgba(34, 211, 238, 0.15)",
    badgeColor: "border-cyan-500/30 text-cyan-400 bg-cyan-950/30",
    description:
      "Developing responsive, pixel-perfect interfaces with a primary focus on high performance and UX.",
    skills: [
      { name: "React", level: "Advanced" },
      { name: "TypeScript", level: "Advanced" },
      { name: "Tailwind CSS", level: "Expert" },
      { name: "JavaScript", level: "Advanced" },
      { name: "Zustand", level: "Advanced" },
      { name: "Framer Motion", level: "Advanced" },
      { name: "HTML5", level: "Advanced" },
      { name: "CSS3", level: "Advanced" },
    ],
  },
  {
    title: "Backend Engineering",
    icon: <Terminal className="w-5 h-5 text-emerald-400" />,
    color: "emerald",
    glowColor: "rgba(52, 211, 153, 0.15)",
    badgeColor: "border-emerald-500/30 text-emerald-400 bg-emerald-950/30",
    description:
      "Architecting scalable server-side logic, robust database interactions, and secure APIs.",
    skills: [
      { name: "Node.js", level: "Advanced" },
      { name: "Express", level: "Advanced" },
      { name: "PHP", level: "Intermediate" },
      { name: "Java", level: "Expert" },
    ],
  },
  {
    title: "Database Systems",
    icon: <Database className="w-5 h-5 text-amber-400" />,
    color: "amber",
    glowColor: "rgba(251, 191, 36, 0.15)",
    badgeColor: "border-amber-500/30 text-amber-400 bg-amber-950/30",
    description:
      "Data modeling, indexing strategies, and query optimization for scalable data retrieval.",
    skills: [
      { name: "MongoDB", level: "Advanced" },
      { name: "PostgreSQL", level: "Advanced" },
      { name: "MySQL", level: "Intermediate" },
    ],
  },
  {
    title: "Cloud & Infrastructure",
    icon: <Cloud className="w-5 h-5 text-violet-400" />,
    color: "violet",
    glowColor: "rgba(167, 139, 250, 0.15)",
    badgeColor: "border-violet-500/30 text-violet-400 bg-violet-950/30",
    description:
      "Automating deployments, edge functions, and managing cloud-native application environments.",
    skills: [
      { name: "Netlify", level: "Expert" },
      { name: "Render", level: "Expert" },
      { name: "Vercel", level: "Expert" },
      { name: "Cloudflare", level: "Advanced" },
    ],
  },
  {
    title: "Data Analytics",
    icon: <BarChart2 className="w-5 h-5 text-rose-400" />,
    color: "rose",
    glowColor: "rgba(251, 113, 133, 0.15)",
    badgeColor: "border-rose-500/30 text-rose-400 bg-rose-950/30",
    description:
      "Extracting key insights, building quantitative data pipelines, and interactive reporting.",
    skills: [
      { name: "Excel", level: "Advanced" },
      { name: "SQL", level: "Advanced" },
      { name: "Tableau", level: "Intermediate" },
      { name: "Python", level: "Intermediate" },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export function SkillPage() {
  return (
    <section
      id="skills"
      className="relative min-h-screen w-full bg-[#0a0a0a]  text-zinc-100 pt-24 pb-35 px-4 sm:px-8 lg:px-16 overflow-hidden flex flex-col justify-center items-center"
    >
        <div className="absolute inset-x-0 bottom-0">
        <img src={Pattern} alt="" className="object-cover -scale-y-100" />

      </div>
     
      <div className="max-w-6xl w-full relative z-10 space-y-16">
        {/* Header Section */}
        <div className="text-left space-y-3 border-b border-zinc-800/60 pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs text-zinc-400 font-mono tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-red-900" />
            <span>TECHNICAL SPECIFICATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Skills & Stack
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl leading-relaxed">
            A comprehensive overview of core competencies, infrastructure tooling, and development environments.
          </p>
        </div>

        {/* Section List (No Cards, Pure Rows) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="divide-y divide-zinc-800/60"
        >
          {SKILL_CATEGORIES.map((category) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="group relative py-8 transition-colors duration-300 hover:bg-zinc-900/20"
            >
              {/* Subtle ambient hover line highlight */}
              <div
                className="absolute left-0 top-0 bottom-0 w-0.5 bg-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start pl-2">
                {/* Left side: Category Header */}
                <div className="lg:col-span-4 space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800/80">
                      {category.icon}
                    </div>
                    <h3 className="text-lg font-bold text-white tracking-wide">
                      {category.title}
                    </h3>
                  </div>
                  <p className="text-zinc-400 text-sm leading-relaxed max-w-sm">
                    {category.description}
                  </p>
                </div>

                {/* Right side: Modern Pill Badges */}
                <div className="lg:col-span-8">
                  <div className="flex flex-wrap gap-2.5">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="group/pill relative flex items-center gap-3 px-3.5 py-2 rounded-lg bg-zinc-900/60 border border-zinc-800/80 hover:border-zinc-700 hover:bg-zinc-900 transition-all duration-200"
                      >
                        <span className="text-xs font-medium text-zinc-300 group-hover/pill:text-white transition-colors">
                          {skill.name}
                        </span>

                        <span
                          className={`text-[10px] font-mono px-2 py-0.5 rounded border ${category.badgeColor}`}
                        >
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}