import { useHomeData } from "@/hooks/useHomeData";
import { motion, type Variants } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa6";
import { FaArrowUpLong } from "react-icons/fa6";

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
      {/* Decorative Design Element (Subtle grid/gradient glow for designer aesthetic) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[14px_24px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="w-full max-w-5xl flex flex-col items-center text-center space-y-8 z-10">
        {/* Discipline Badges */}
        <motion.div
          variants={revealVariant}
          className="flex flex-wrap items-center justify-center gap-2 bg-gray-50 dark:bg-neutral-900 border border-black/5 dark:border-white/5 px-4 py-2 rounded-full shadow-xs"
        >
          <span className="text-[10px] md:text-xs font-bold tracking-wider uppercase text-neutral-500">
            Frontend
          </span>
          <span className="text-neutral-300">•</span>
          <span className="text-[10px] md:text-xs font-bold tracking-wider uppercase text-neutral-500">
            Backend
          </span>
          <span className="text-neutral-300">•</span>
          <span className="text-[10px] md:text-xs font-bold tracking-wider uppercase text-neutral-950 font-mono">
            Design
          </span>
        </motion.div>

        {/* Hero Typography */}
        <motion.div variants={revealVariant} className="space-y-4 max-w-4xl">
          <p className="text-neutral-400 font-medium tracking-[0.3em] uppercase text-xs md:text-sm">
            {homeData?.role ? homeData.role : fallbackRole}
          </p>
          <h1 className="bg-linear-to-b from-neutral-900 to-white dark:from-white dark:to-neutral-400 bg-clip-text text-transparent text-4xl sm:text-5xl md:text-7xl lg:text-7xl font-black tracking-tight leading-[1.05] pb-2">
            {homeData?.quotes1 ? homeData.quotes1 : fallbackHeadline}
            <span className="block font-light text-neutral-400 text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-2 tracking-normal">
              {homeData?.quotes2 ? homeData.quotes2 : fallbackSubheadline}
            </span>
          </h1>
        </motion.div>

        {/* Supporting Copy */}
        <motion.div variants={revealVariant} className="max-w-2xl mx-auto">
          <p
            className={`${textColor} text-base md:text-lg leading-relaxed font-normal text-balance`}
          >
            Crafting high-performance web applications and engineered systems
            with a focus on{" "}
            <span
              className={`${highlightColor} font-semibold inline-block relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:bg-current`}
            >
              clean aesthetics
            </span>{" "}
            and{" "}
            <span
              className={`${highlightColor} font-semibold inline-block relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:bg-current`}
            >
              seamless user experience.
            </span>
          </p>
        </motion.div>

        {/* Interactive Call To Actions */}
        <motion.div
          variants={revealVariant}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 w-full sm:w-auto"
        >
          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-48 py-4 bg-neutral-800 text-white dark:bg-white dark:text-neutral-950 shadow-md cursor-pointer flex items-center justify-center gap-2 font-semibold rounded-xl hover:shadow-xl hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-all duration-200"
          >
            <FaRegEnvelope className="text-sm" />
            Let's Collaborate
          </motion.button>

          <motion.a
            href="src/assets/cv/cv.pdf"
            download
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-48 py-4 border bg-white border-neutral-300 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 cursor-pointer rounded-xl flex items-center justify-center gap-2 font-medium transition-all duration-200 hover:bg-neutral-50 dark:hover:bg-neutral-900"
          >
            <FaDownload className="text-xs text-[#050505]" />
            Download CV
          </motion.a>
        </motion.div>
        <div
          className={` ${isDark ? "text-gray-400" : "text-gray-600"} text-center flex items-center justify-center gap-2 absolute bottom-2`}
        >
          <p className="font-medium  text-xs animate-pulse tracking-[0.3em] uppercase">
            Scroll Up to View more
          </p>
          <FaArrowUpLong className="animate-bounce" />
        </div>
      </div>
    </motion.section>
  );
}
