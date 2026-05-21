import { useHomeData } from "@/hooks/useHomeData";
import { motion, type Variants } from "framer-motion";
import { useState } from "react";
import { FaDownload } from "react-icons/fa";
import { FaRegEnvelope, FaArrowUpLong } from "react-icons/fa6";
import { ContactBox } from "@/component/ContactBox";
import Image from "@/assets/developer.svg";

interface HomePageProps {
  containerVariants: Variants;
  revealVariant: Variants;
  textColor: string;
  highlightColor: string;
  isDark: boolean;
}

export default function HomePage({
  containerVariants,
  revealVariant,
  textColor,
  highlightColor,
  isDark,
}: HomePageProps) {
  const { homeData } = useHomeData();
  const [showContact, setShowContact] = useState<boolean>(false);

  const handleShowContact = () => {
    setShowContact(!showContact);
  };

  // Fallbacks based on your multi-disciplinary background
  const fallbackRole = "Full-Stack Developer & Graphic Designer";
  const fallbackHeadline = "Mark Alvarado";
  const fallbackSubheadline =
    "Architecting clean code. Designing seamless experiences.";

  return (
    <motion.section
      id="home"
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className="relative z-10 min-h-screen w-full flex items-center justify-center px-6 md:px-12 lg:px-24 py-24 lg:py-0 overflow-hidden"
    >
      {showContact && <ContactBox onClose={handleShowContact} />}
      
      {/* Modern Grid Background Graphic */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[14px_24px] mask-[radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 z-10">
        
        {/* Left Side: Professional Typography & Call To Actions */}
        <div className="w-full lg:w-3/5 flex flex-col text-center lg:text-left space-y-6 items-center lg:items-start">
          
          {/* Discipline Badges */}
          <motion.div
            variants={revealVariant}
            className="flex flex-wrap items-center gap-2 bg-gray-50/80 dark:bg-neutral-900/80 backdrop-blur-xs border border-black/5 dark:border-white/5 px-4 py-1.5 rounded-full shadow-xs"
          >
            <span className="text-[10px] md:text-xs font-bold tracking-wider uppercase text-neutral-500">
              Frontend
            </span>
            <span className="text-neutral-300 dark:text-neutral-700">•</span>
            <span className="text-[10px] md:text-xs font-bold tracking-wider uppercase text-neutral-500">
              Backend
            </span>
            <span className="text-neutral-300 dark:text-neutral-700">•</span>
            <span className="text-[10px] md:text-xs font-bold tracking-wider uppercase text-neutral-950 dark:text-neutral-50 font-mono">
              Design
            </span>
          </motion.div>

          {/* Hero Typography */}
          <motion.div variants={revealVariant} className="space-y-3 w-full">
            <p className="text-neutral-400 dark:text-neutral-500 font-medium tracking-[0.25em] uppercase text-xs md:text-sm">
              {homeData?.role ? homeData.role : fallbackRole}
            </p>
            <h1 className="bg-linear-to-b from-neutral-950 to-white dark:from-white dark:to-neutral-400 bg-clip-text text-transparent text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] pb-1">
              {homeData?.quotes1 ? homeData.quotes1 : fallbackHeadline}
              <span className="block font-light text-neutral-500 dark:text-neutral-400 text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-3 tracking-tight leading-snug">
                {homeData?.quotes2 ? homeData.quotes2 : fallbackSubheadline}
              </span>
            </h1>
          </motion.div>

          {/* Supporting Copy */}
          <motion.div variants={revealVariant} className="max-w-xl">
            <p className={`${textColor} text-base md:text-lg leading-relaxed font-normal text-balance lg:text-left`}>
              Crafting high-performance web applications and engineered systems
              with a focus on{" "}
              <span className={`${highlightColor} font-semibold inline-block relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:bg-current`}>
                clean aesthetics
              </span>{" "}
              and{" "}
              <span className={`${highlightColor} font-semibold inline-block relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:bg-current`}>
                seamless user experience.
              </span>
            </p>
          </motion.div>

          {/* Interactive Call To Actions */}
          <motion.div
            variants={revealVariant}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4 w-full sm:w-auto"
          >
            <motion.a
              href="#projects"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-48 py-3.5 bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 shadow-md cursor-pointer flex items-center justify-center gap-2 font-semibold rounded-xl hover:shadow-lg transition-all duration-200"
            >
              <FaRegEnvelope className="text-sm" />
              Explore My Work
            </motion.a>

            <motion.a
              href="src/assets/cv/cv.pdf"
              download
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-48 py-3.5 border bg-white/50 dark:bg-neutral-900/30 border-neutral-300 dark:border-neutral-800 text-neutral-800 dark:text-neutral-200 cursor-pointer rounded-xl flex items-center justify-center gap-2 font-medium transition-all duration-200 hover:bg-neutral-50 dark:hover:bg-neutral-900"
            >
              <FaDownload className="text-xs" />
              Download CV
            </motion.a>
          </motion.div>
        </div>

        {/* Right Side: Professional Visual Graphics Container & Image */}
        <motion.div 
          variants={revealVariant}
          className="w-full lg:w-2/5 flex items-center justify-center relative px-4"
        >
          {/* Subtle Ambient Glow Effect behind image */}
          <div className="absolute w-72 h-72  -z-10 pointer-events-none" />
          
          {/* Main Visual Frame */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative group w-100   aspect-square rounded-2xl overflow-hidden   dark:border-neutral-900  dark:bg-neutral-800"
          >
           
            <img 
              src={Image} // Put your me.jpg image file directly inside your public/ folder
              alt="Mark Alvarado Portrait" 
              className="w-full h-full object-cover grayscale-25 group-hover:grayscale-0 transition-all duration-500 object-center"
            />
            
            {/* Sleek Overlay Gradient Accent */}
            <div className="absolute inset-0 bg-linear-to-t from-neutral-950/20 via-transparent to-transparent pointer-events-none" />
          </motion.div>
        </motion.div>

      </div>

      {/* Floating Scroll Indicator */}
      <motion.div
        variants={revealVariant}
        className={` ${isDark ? "text-gray-500" : "text-gray-400"} text-center flex items-center justify-center gap-2 absolute bottom-4 w-full`}
      >
        <p className="font-medium text-[10px] animate-pulse tracking-[0.3em] uppercase">
          Scroll Down to View more
        </p>
        <FaArrowUpLong className="rotate-180 animate-bounce text-xs" />
      </motion.div>
    </motion.section>
  );
}