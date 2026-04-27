import Me from "@/assets/cartoon_me.svg";
import { motion, type Variants } from "framer-motion";
import { FaDownload, FaRegEnvelope } from "react-icons/fa6";

interface HomePageProps {
  containerVariants: Variants;
  revealVariant: Variants;
  textColor: string;
  highlightColor: string;
}

export default function HomePage({
  containerVariants,
  revealVariant,
  textColor,
  highlightColor,
}: HomePageProps) {
  return (
    <motion.section
      id="home"
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: false, amount: 0.2 }}
      variants={containerVariants}
      className="relative z-10 min-h-screen w-full flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 lg:px-24 pt-32 lg:pt-0"
    >
      <div className="w-full lg:w-3/5 flex flex-col justify-center space-y-6 text-center lg:text-left">
        <motion.div variants={revealVariant} className="space-y-2">
          <p className="text-gray-400 font-medium tracking-[0.4em] uppercase text-[10px] md:text-xs">
            Full Stack Developer & Freelancer
          </p>
          <h1 className="bg-linear-to-b from-gray-200 to-black bg-clip-text text-transparent text-5xl md:text-7xl font-bold  leading-[1.1]">
            From concept to deployment <br />
            <span className="italic font-light text-gray-400">
              I build it all.
            </span>
          </h1>
        </motion.div>

        <motion.p
          variants={revealVariant}
          className={`${textColor} max-w-lg mx-auto lg:mx-0 leading-relaxed text-lg border-l-0 lg:border-l-2 border-black/10 lg:pl-6`}
        >
          Crafting high-performance web applications and IoT solutions with a
          focus on{" "}
          <span
            className={` ${highlightColor} font-semibold underline underline-offset-4 decoration-black/10`}
          >
            clean aesthetics
          </span>{" "}
          and{" "}
          <span
            className={`${highlightColor} font-semibold underline underline-offset-4 decoration-black/10`}
          >
            seamless user experience.
          </span>
        </motion.p>

        <motion.div
          variants={revealVariant}
          className="flex flex-wrap justify-center lg:justify-start gap-6 pt-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-black text-white shadow-md cursor-pointer flex items-center justify-center gap-2 font-bold rounded-full hover:shadow-2xl hover:shadow-black/20 transition-all duration-300"
          >
            <FaRegEnvelope />
            Hire Me
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 border shadow-md bg-white border-black/10 cursor-pointer rounded-full flex items-center justify-center gap-2 font-medium transition-colors duration-300"
          >
            <FaDownload />
            Download CV
          </motion.button>
        </motion.div>
      </div>

      {/* --- Professional Image Section --- */}
      <motion.div
        variants={revealVariant}
        className="w-full lg:w-2/5 flex justify-center lg:justify-end mt-16 lg:mt-0"
      >
        <div className="relative group">
          {/* Design Element: Abstract Circle behind image */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-10 border border-dashed border-black/10 rounded-full pointer-events-none"
          />

          {/* The Image Wrapper */}
          <div className="relative z-10 p-3 bg-white/10 backdrop-blur-md shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] rounded-3xl border border-white/20">
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="overflow-hidden rounded-2xl bg-linear-to-br from-white/5 to-transparent"
            >
              <img
                src={Me}
                className="h-80 md:h-110 lg:h-130 w-auto object-cover transition-transform duration-700 hover:scale-105"
                alt="Professional Portrait"
              />
            </motion.div>

            {/* Creative Tag - Glass Style */}
            <div className="absolute -bottom-2 -right-2 bg-white/20 backdrop-blur-xl border border-white/30 text-white px-5 py-2.5 rounded-xl shadow-2xl text-[10px] font-black tracking-widest uppercase transition-all hover:bg-white/30">
              Mark Alvarado
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
