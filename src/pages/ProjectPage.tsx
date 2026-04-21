import Stack from "@/component/Stack";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { useRef } from "react";

interface ProjectPageProps {
  containerVariants: Variants;
  revealVariant: Variants;
}

export function ProjectPage({
  containerVariants,
  revealVariant,
}: ProjectPageProps) {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Subtle parallax for a clean background
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const projects = [
    {
      title: "EfeeSync",
      description:
        "EfeeSync is a digital platform designed to streamline and synchronize fee management processes. It provides a centralized hub for tracking, managing, and automating fee-related transactions, ensuring real-time data consistency between administrators and users.The system is built to eliminate manual record-keeping errors by providing a unified ledger where payments are recorded, verified, and synchronized across all connected modules.",
      techs: [
        { name: "React" },
        { name: "Vite" },
        { name: "Javascript" },
        { name: "Tailwind CSS" },
        { name: "PHP" },
      ],
      images: [
        {
          path: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=500&auto=format",
        },
        {
          path: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=500&auto=format",
        },
        {
          path: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=500&auto=format",
        },
        {
          path: "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format",
        },
        {
          path: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format",
        },
      ],
      github: "https://github.com/calix02/efeesync",
      platform: "https://efeesync.bewproject.com/",
    },
    {
      title: "EfeeSync",
      description:
        "Crafting immersive user experiences with modern frameworks.",
      techs: [
        { name: "React" },
        { name: "Vite" },
        { name: "Javascript" },
        { name: "Tailwind CSS" },
        { name: "PHP" },
      ],
      images: [
        {
          path: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=500&auto=format",
        },
        {
          path: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=500&auto=format",
        },
        {
          path: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=500&auto=format",
        },
        {
          path: "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format",
        },
        {
          path: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format",
        },
      ],
      github: "https://github.com/calix02/efeesync",
      platform: "https://efeesync.bewproject.com/",
    },
  ];

  return (
    <motion.section
      ref={containerRef}
      id="projects"
      variants={containerVariants}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true, amount: 0.1 }}
      className="relative z-10 flex flex-col items-center justify-center min-h-screen w-full px-6 md:px-24 py-32 overflow-hidden "
    >
      {/* Refined Light Background Layer */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <motion.div
          style={{ y: y1 }}
          className="absolute top-[10%] left-[-5%] w-150 h-150 bg-blue-50/50 rounded-full blur-[100px]"
        />
        <motion.div
          style={{ y: y2 }}
          className="absolute bottom-[10%] right-[-5%] w-150 h-150 bg-slate-100 rounded-full blur-[100px]"
        />
      </div>

      {/* Header Section */}
      <header className="w-full max-w-7xl mb-24">
        <motion.div
          variants={revealVariant}
          className="flex items-center gap-3 mb-6"
        >
          <span className="h-0.5 w-8 bg-black" />
          <span className="text-black font-mono text-[10px] tracking-[0.4em] uppercase font-bold">
            Selected Works
          </span>
        </motion.div>

        <motion.h2
          variants={revealVariant}
          className="text-6xl md:text-9xl font-semibold tracking-tighter text-neutral-900 mb-8"
        >
          Product{" "}
          <span className="font-serif text-neutral-400 font-light text-5xl md:text-8xl italic">
            Archive
          </span>
        </motion.h2>
      </header>

      {projects.map((project, idx) => (
        <>
          {/* Main Content Grid */}
          <div
            key={idx}
            className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start w-full max-w-7xl"
          >
            {/* Left: Project Details */}
            <motion.div
              variants={revealVariant}
              className="lg:col-span-5 space-y-12 order-2 lg:order-1"
            >
              <div className="space-y-8">
                <div className="space-y-2">
                  <span className="text-blue-600 font-mono text-xs font-bold uppercase tracking-widest">
                    Project 0{idx + 1}
                  </span>
                  <h3 className="text-4xl font-bold text-neutral-900 tracking-tight">
                    {project.title}
                  </h3>
                </div>

                <p className="text-neutral-600 text-lg leading-relaxed font-normal border-l-2 border-neutral-100 pl-6">
                  {project.description}
                </p>
              </div>

              {/* Tech Stack - Clean Pills */}
              <div className="flex flex-wrap gap-2">
                {project.techs.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-neutral-50 border border-neutral-200 text-neutral-500 text-[11px] font-bold rounded-md uppercase tracking-wider"
                  >
                    {tech.name}
                  </span>
                ))}
              </div>

              {/* CTA Group */}
              <div className="flex flex-col sm:flex-row gap-8 pt-4">
                <motion.a
                  href={project.platform}
                  whileHover={{ x: 5 }}
                  className="group flex items-center gap-2 text-black font-bold text-sm tracking-widest uppercase transition-all"
                >
                  Visit Platform
                  <span className="text-lg leading-none transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                    ↗
                  </span>
                </motion.a>

                <motion.a
                  href={project.github}
                  whileHover={{ x: 5 }}
                  className="group flex items-center gap-2 text-neutral-400 hover:text-black font-bold text-sm tracking-widest uppercase transition-all"
                >
                  View Code
                  <span className="font-mono">{"</>"}</span>
                </motion.a>
              </div>
            </motion.div>

            {/* Right: The Visual Stack */}
            <motion.div
              variants={revealVariant}
              className="lg:col-span-7 relative flex justify-center lg:justify-end items-center order-1 lg:order-2"
            >
              <div className="relative z-10 w-full max-w-md aspect-4/5">
                {/* Soft Shadow behind the stack */}
                <div className="absolute -inset-10 bg-blue-100/30 rounded-full blur-3xl opacity-50" />

                <Stack
                  randomRotation={true}
                  sensitivity={150}
                  sendToBackOnClick={true}
                  cards={(project.images ?? []).map((image, i) => (
                    <motion.div
                      key={i}
                      className="w-full h-full rounded-2xl overflow-hidden border border-neutral-200 bg-white shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)]"
                    >
                      <img
                        src={image.path}
                        alt={`Preview ${i + 1}`}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                    </motion.div>
                  ))}
                  autoplay={true}
                  autoplayDelay={5000}
                  pauseOnHover={true}
                />
              </div>
            </motion.div>
          </div>
        </>
      ))}
    </motion.section>
  );
}
