import { motion, type Variants } from "framer-motion";
import Me from "@/assets/me.svg";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import {
  FaUserCircle,
  FaMapMarkerAlt,
  FaCode,
  FaBriefcase,
} from "react-icons/fa";
import { IoRibbonSharp } from "react-icons/io5";
import CircularGallery from "@/component/CircularGallery";
import StarBorder from "@/component/StarBorder";

interface HomePageProps {
  containerVariants: Variants;
  revealVariant: Variants;
}
export function AboutPage({ containerVariants, revealVariant }: HomePageProps) {
  // Mock Experience Data
  const experiences = [
    {
      title: "Full Stack Developer - Intern",
      company: "Wayne Enterprise Solution Corporation",
      date: "2026 - Present",
      desc: "Developing full-stack web applications using React + Vite, Typescript and Tailwind for the frontend, and for the backend is Node js / Express and MongoDB.",
    },
    {
      title: "Front-End Developer - Student",
      company: "CBSUA",
      date: "2024 - 2025",
      desc: "Built the user interface of our capstone project EfeeSync and contribute to the 4th year's final project Capstone Repository System using React + Vite, Vanilla Javascript and Tailwind",
    },
    {
      title: "Full Stack Developer - Freelance",
      company: "CBSUA",
      date: "2022 - 2023",
      desc: "Built systems for student for their final project using Java and MySQL",
    },
  ];

  return (
    <motion.section
      id="about"
      variants={containerVariants}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: false, amount: 0.2 }}
      className="relative z-10 flex flex-col lg:flex-row items-center justify-center min-h-screen w-full px-6 md:px-20 py-24 gap-16 overflow-hidden"
    >
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-30 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-blue-200 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-purple-100 rounded-full blur-[120px]" />
      </div>

      {/* Left Column: Profile & Experience */}
      <motion.div className="w-full lg:w-1/2 flex flex-col gap-10">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row gap-8 items-center sm:items-start">
          <motion.div
            variants={revealVariant}
            whileHover={{ scale: 1.05, rotate: 2 }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-linear-to-r from-blue-500 to-cyan-400 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <img
              src={Me}
              className="relative w-40 h-40 md:w-48 md:h-48 border border-white/50 rounded-2xl object-cover shadow-2xl backdrop-blur-sm"
              alt="Mark Angelo Alvarado"
            />
          </motion.div>

          <div className="text-center sm:text-left pt-2">
            <motion.h1
              variants={revealVariant}
              className="font-medium tracking-[0.2rem] text-4xl md:text-5xl bg-clip-text text-transparent bg-linear-to-b from-white to-gray-500 flex items-center justify-center sm:justify-start gap-3"
            >
              Mark Alvarado
              <RiVerifiedBadgeFill
                className="text-blue-500 text-3xl drop-shadow-md"
                title="Verified Developer"
              />
            </motion.h1>
            <motion.div variants={revealVariant} className="mt-4 space-y-2">
              <p className="text-blue-600 font-semibold flex items-center justify-center sm:justify-start gap-2 text-lg">
                <FaCode className="text-sm" /> Full Stack Developer
              </p>
              <p className="text-gray-500 flex items-center justify-center sm:justify-start gap-2 italic">
                <FaMapMarkerAlt className="text-sm" /> Lupi, Camarines Sur, PH
              </p>
            </motion.div>
            <motion.div variants={revealVariant} className="mt-3 flex gap-2">
              <StarBorder
                as="button"
                className="custom-class"
                color="cyan"
                speed="1s"
              >
                Hire Me
              </StarBorder>
              <StarBorder
                as="button"
                className="custom-class"
                color="cyan"
                speed="1s"
              >
                Book an Appointment
              </StarBorder>
            </motion.div>
          </div>
        </div>

        {/* Scrollable Experience Section */}
        <motion.div variants={revealVariant} className="space-y-4 ">
          <h2 className="flex items-center font-bold tracking-[0.2em] uppercase text-xs text-gray-400 gap-2">
            <FaBriefcase className="text-blue-500" /> Professional Experience
          </h2>

          <div className="h-70 w-full rounded-3xl border border-gray-100 bg-white/50 backdrop-blur-md p-2 shadow-inner overflow-y-auto no-scrollbar hide-scrollbar">
            <div className="space-y-3">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 5 }}
                  className="p-5 rounded-2xl bg-white border border-gray-50 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-bold text-gray-800">{exp.title}</h3>
                    <span className="text-[10px] font-bold bg-blue-50 text-blue-600 px-2 py-1 rounded-full uppercase italic">
                      {exp.date}
                    </span>
                  </div>
                  <p className="text-sm text-blue-500 font-medium mb-2">
                    {exp.company}
                  </p>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {exp.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
          <p className="text-center text-[15px] font-medium text-gray-400 animate-pulse">
            ↓ Scroll to see more
          </p>
        </motion.div>
      </motion.div>

      {/* Right Column: Bio & Certifications */}
      <motion.div className="w-full lg:w-1/2 flex flex-col gap-10">
        <div className="space-y-6">
          <motion.h2
            variants={revealVariant}
            className="flex items-center font-bold tracking-[0.2em] uppercase text-xs text-gray-400 gap-2"
          >
            <FaUserCircle className="text-blue-500 text-lg" /> The Story
          </motion.h2>
          <motion.p
            variants={revealVariant}
            className="text-gray-700 leading-relaxed text-xl font-light"
          >
            I am a passionate{" "}
            <span className="text-black font-semibold underline decoration-blue-500/30 underline-offset-4">
              Full Stack Developer
            </span>{" "}
            dedicated to building digital experiences that are both functional
            and visually stunning.
          </motion.p>
          <motion.p
            variants={revealVariant}
            className="text-gray-600 leading-relaxed text-lg"
          >
            With a focus on modern web technologies like{" "}
            <span className="font-medium text-gray-900">
              React, TypeScript, and Framer Motion
            </span>
            , I bridge the gap between complex logic and intuitive UI.
          </motion.p>
        </div>

        {/* Certifications with Gallery */}
        <motion.div
          variants={revealVariant}
          className="relative pt-12 pb-6 border-t border-gray-100"
          style={{ height: "400px" }}
        >
          <h2 className="flex items-center font-bold absolute top-6 left-0 tracking-[0.2em] uppercase text-xs text-gray-400 gap-2">
            <IoRibbonSharp className="text-blue-500 text-lg" /> Highlights &
            Certs
          </h2>
          <div className="h-full w-full">
            <CircularGallery
              bend={2}
              textColor="#111111"
              borderRadius={0.08}
              scrollEase={0.02}
              scrollSpeed={1.5}
            />
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
