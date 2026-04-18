import { motion, type Variants } from "framer-motion";
import {
  Code2,
  Terminal,
  Database,
  Cloud,
 
} from "lucide-react";
import GlareHover from "@/component/GlareHover";



// Define the structure for our skill categories
const SKILL_CATEGORIES = [
  {
    title: "Frontend",
    icon: <Code2 className="w-6 h-6 text-blue-500" />,
    description: "Crafting immersive user experiences with modern frameworks.",
    skills: [
      { name: "React", level: "Advanced" },
      { name: "Vite", level: "Intermediate" },
      { name: "Javascript", level: "Intermediate" },
      { name: "TypeScript", level: "Advanced" },
      { name: "Tailwind CSS", level: "Expert" },
      { name: "Zustand", level: "Advanced" },

    ],
  },
  {
    title: "Backend",
    icon: <Terminal className="w-6 h-6 text-green-500" />,
    description: "Building robust, scalable server-side logic and APIs.",
    skills: [
      { name: "Node.js", level: "Advanced" },
      { name: "Express", level: "Advanced" },
      { name: "PHP", level: "Intermediate" },
      { name: "Java", level: "Basic" },
    ],
  },
  {
    title: "Database",
    icon: <Database className="w-6 h-6 text-amber-500" />,
    description: "Managing data integrity and high-performance querying.",
    skills: [
      { name: "MongoDB", level: "Advanced" },
      { name: "PostgreSQL", level: "Advanced" },
      { name: "MySQL", level: "Intermediate" },
    ],
  },
  {
    title: "Cloud / Hosting",
    icon: <Cloud className="w-6 h-6 text-purple-500" />,
    description: "Deploying and managing optimized cloud infrastructure.",
    skills: [
      { name: "Vercel", level: "Expert" },
      { name: "AWS", level: "Intermediate" },
      { name: "Cloudflare", level: "Advanced" },
      { name: "Docker", level: "Intermediate" },
    ],
  },
];


interface SkillPageProps {
  containerVariants: Variants;
  revealVariant: Variants;
}

export function SkillPage({ containerVariants, revealVariant }: SkillPageProps) {
 

  return (
    <motion.section
      id="skills"
      variants={containerVariants}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true, amount: 0.1 }}
      className="relative z-10  flex flex-col items-center justify-center min-h-screen w-full px-6 md:px-20 py-24 overflow-hidden "
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-125 h-125 bg-blue-600 rounded-full blur-[160px]" />
        <div className="absolute bottom-1/4 -right-20 w-125 h-125 bg-purple-600 rounded-full blur-[160px]" />
      </div>

      {/* Header Section */}
      <div className="text-center mb-16 space-y-4">
        <motion.h2
          variants={revealVariant}
          className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-linear-to-b from-white to-gray-500"
        >
          Skills & Expertise
        </motion.h2>
        <motion.p
          variants={revealVariant}
          className="text-gray-400 max-w-2xl mx-auto text-lg"
        >
          A comprehensive toolkit for building modern, scalable applications
          tailored for the next generation of the web.
        </motion.p>
      </div>

      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 w-full max-w-7xl">
        {SKILL_CATEGORIES.map((category, idx) => (
          <motion.div
            key={category.title}
            variants={revealVariant}
            custom={idx}
            className="h-full "
          >
            <GlareHover
              width="w-full h-full"
              glareColor="#ffffff"
              glareOpacity={0.15}
              glareAngle={-30}
              glareSize={400}
              transitionDuration={400}
            >
              <div className="flex flex-col h-full p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
                <div className="mb-6 p-3 w-fit rounded-xl bg-black border border-white/10">
                  {category.icon}
                </div>

                <h3 className="text-2xl font-semibold text-gray-600 mb-2">
                  {category.title}
                </h3>

                <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                  {category.description}
                </p>

                <div className="mt-5 space-y-3">
                  {category.skills.map((skill) => ( 
                    <div key={skill.name} className="group flex flex-col">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-black text-md font-medium group-hover:text-white transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-[10px] uppercase tracking-widest text-gray-500">
                          {skill.level}
                        </span>
                      </div>
                      {/* Optional Skill Progress Bar */}
                      <div className="h-0.5 w-full bg-white/5 overflow-hidden">
                        <motion.div
                          initial={{ x: "-100%" }}
                          whileInView={{ x: "0%" }}
                          transition={{ duration: 1, delay: 0.5 + idx * 0.1 }}
                          className="h-full bg-linear-to-r from-blue-500 to-purple-500 w-full opacity-50"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </GlareHover>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
