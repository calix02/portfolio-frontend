import GlareHover from "@/component/GlareHover";
import { motion, type Variants } from "framer-motion";
import { Cloud, Code2, Database, Terminal } from "lucide-react";

const SKILL_CATEGORIES = [
  {
    title: "Frontend",
    icon: <Code2 className="w-5 h-5" />,
    color: "from-blue-500 to-cyan-400",
    glow: "rgba(59, 130, 246, 0.15)",
    description:
      "Developing responsive, pixel-perfect interfaces with a focus on UX.",
    skills: [
      { name: "React", level: "Advanced" },
      { name: "TypeScript", level: "Advanced" },
      { name: "Tailwind CSS", level: "Expert" },
      { name: "Zustand", level: "Advanced" },
      { name: "Framer Motion", level: "Advanced" },
    ],
  },
  {
    title: "Backend",
    icon: <Terminal className="w-5 h-5" />,
    color: "from-emerald-500 to-teal-400",
    glow: "rgba(16, 185, 129, 0.15)",
    description:
      "Architecting scalable server-side logic and secure API endpoints.",
    skills: [
      { name: "Node.js", level: "Advanced" },
      { name: "Express", level: "Advanced" },
      { name: "PHP", level: "Intermediate" },
      { name: "Firebase", level: "Expert" },
    ],
  },
  {
    title: "Database",
    icon: <Database className="w-5 h-5" />,
    color: "from-amber-500 to-orange-400",
    glow: "rgba(245, 158, 11, 0.15)",
    description:
      "Data modeling and optimization for high-performance retrieval.",
    skills: [
      { name: "MongoDB", level: "Advanced" },
      { name: "PostgreSQL", level: "Advanced" },
      { name: "MySQL", level: "Intermediate" },
    ],
  },
  {
    title: "DevOps",
    icon: <Cloud className="w-5 h-5" />,
    color: "from-purple-500 to-pink-400",
    glow: "rgba(168, 85, 247, 0.15)",
    description:
      "Automating deployments and managing cloud-native infrastructure.",
    skills: [
      { name: "Vercel", level: "Expert" },
      { name: "AWS", level: "Intermediate" },
      { name: "Docker", level: "Intermediate" },
      { name: "Cloudflare", level: "Advanced" },
    ],
  },
];
interface AboutPageProps {
  containerVariants: Variants;
  revealVariant: Variants;
  textColor: string;
  highlightColor: string;
  bgColor: string;
  borderColor: string;
}
export function SkillPage({
  textColor,
  highlightColor,
  bgColor,
  borderColor,
  containerVariants,
  revealVariant,
}: AboutPageProps) {
  return (
    <motion.section
      id="skills"
      initial="initial"
      variants={containerVariants}
      whileInView="whileInView"
      viewport={{ once: true, amount: 0.1 }}
      className="relative min-h-screen w-full  text-white flex flex-col items-center justify-center px-6 md:px-12 py-32 overflow-hidden"
    >
      <div className="max-w-7xl w-full relative z-10">
        {/* Header with Glass Detail */}
        <div className="mb-20 space-y-6">
          <motion.div
            variants={revealVariant}
            className="flex items-center gap-3"
          >
            <div className="h-px w-12 bg-white/20" />
            <span className="text-xs font-mono tracking-[0.4em] uppercase text-blue-500">
              Stack & Capabilities
            </span>
          </motion.div>

          <motion.h2
            className={`text-5xl bg-linear-to-b from-gray-200 to-gray-800 bg-clip-text text-transparent md:text-7xl font-black tracking-tighter leading-tight`}
          >
            Powering the <br />
            <span className="bg-linear-to-b from-gray-200 to-black bg-clip-text text-transparent">
              Next Generation
            </span>
          </motion.h2>
        </div>

        {/* The Skill Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILL_CATEGORIES.map((category, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="group relative"
            >
              {/* Card Background Glow */}
              <div
                className={` absolute inset-0 rounded-[2.5rem] blur-2xl opacity-0  group-hover:opacity-100 transition-opacity duration-500`}
                style={{ backgroundColor: category.glow }}
              />
              <GlareHover
                glareColor="#ffffff"
                glareOpacity={0.3}
                glareAngle={-30}
                glareSize={300}
                transitionDuration={800}
                playOnce={false}
                className="relative flex justify-center flex-col px-10"
                background={bgColor}
                borderColor={borderColor}
              >
                {/* Decorative Icon Background */}
                <div className="absolute -top-12 -right-12 text-white/3scale-[4] rotate-12 group-hover:rotate-0 transition-transform duration-700">
                  {category.icon}
                </div>

                <div className="flex items-start justify-between mb-8">
                  <div
                    className={`p-4 rounded-2xl bg-linear-to-br ${category.color} shadow-lg shadow-black/20`}
                  >
                    {category.icon}
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
                      Efficiency
                    </span>
                    <span className="text-sm font-bold text-blue-500">95%</span>
                  </div>
                </div>

                <h3 className={`${highlightColor} text-3xl font-bold mb-4`}>
                  {category.title}
                </h3>
                <p
                  className={`${textColor} text-sm leading-relaxed mb-8 max-w-xs`}
                >
                  {category.description}
                </p>

                {/* Skill Chips */}
                <div className={`flex flex-wrap gap-3`}>
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-white/30 transition-all cursor-default group/skill"
                    >
                      <div className="flex items-center gap-2">
                        <span
                          className={` ${textColor}  text-sm font-medium group-hover/skill:text-white]`}
                        >
                          {skill.name}
                        </span>
                        <div
                          className={`w-1.5 h-1.5 rounded-full bg-linear-to-r ${category.color} opacity-40 group-hover/skill:opacity-100 group-hover/skill:scale-125 transition-all`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </GlareHover>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
