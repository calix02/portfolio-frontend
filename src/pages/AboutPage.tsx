import { motion } from "framer-motion";
import Me from "@/assets/me.svg";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { FaUserCircle, FaMapMarkerAlt, FaCode } from "react-icons/fa";
import BorderGlow from "@/component/BorderGlow";
import { RiComputerLine } from "react-icons/ri";
import { IoRibbonSharp } from "react-icons/io5";
import CircularGallery from "@/component/CircularGallery";

export function AboutPage() {
  const containerVariants = {
    initial: { opacity: 0, y: 20 },
    whileInView: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    initial: { opacity: 0, x: -20 },
    whileInView: { opacity: 1, x: 0 },
  };

  return (
    <motion.section
      id="about"
      variants={containerVariants}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true, amount: 0.3 }}
      className="relative z-10 flex flex-col md:flex-row items-center justify-center min-h-screen w-full px-6 md:px-20 py-20 gap-12"
    >
      {/* Left Column: Profile Card */}
      <div className="w-full md:w-1/2 flex flex-col items-start">
        <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
          <motion.img
            whileHover={{ scale: 1.05 }}
            src={Me}
            className="w-40 h-40 md:w-52 md:h-52 border-2 border-blue-500/20 rounded-2xl object-cover shadow-xl"
            alt="Mark Angelo Alvarado"
          />
          <div className="text-center sm:text-left">
            <h1 className="font-bold tracking-tight text-3xl md:text-4xl text-gray-600 flex items-center justify-center sm:justify-start gap-2">
              Mark Angelo Alvarado
              <RiVerifiedBadgeFill
                className="text-blue-500 text-2xl"
                title="Verified Developer"
              />
            </h1>
            <div className="mt-3 space-y-1">
              <p className="text-black font-medium flex items-center justify-center sm:justify-start gap-2">
                <FaCode className="text-sm" /> Full Stack Developer
              </p>
              <p className="text-gray-400 flex items-center justify-center sm:justify-start gap-2">
                <FaMapMarkerAlt className="text-sm" /> Lupi, Camarines Sur, PH
              </p>
            </div>

            <button className="mt-6 px-6 py-2 bg-black hover:bg-white cursor-pointer hover:text-gray-800 text-white rounded-full transition-all duration-300 shadow-lg shadow-blue-500/20 font-medium">
              Download CV
            </button>
          </div>
           
        </div>
         <div className="grid grid-cols-3 gap-4 pt-4">
            <BorderGlow
              edgeSensitivity={30}
              glowColor="40 80 80"
              backgroundColor="#050505"
              borderRadius={28}
              glowRadius={40}
              glowIntensity={1}
              coneSpread={25}
              animated={false}
              colors={["#c084fc", "#f472b6", "#38bdf8"]}
              className=" h-40 rounded-xl relative bg-white/5 border flex justify-center items-center border-white/10"
            >
              <h3 className="text-white font-bold text-4xl text-center">15+</h3>
              <p className="text-gray-400 text-sm mt-5">Projects Completed</p>
            </BorderGlow>
            <BorderGlow
              edgeSensitivity={30}
              glowColor="40 80 80"
              backgroundColor="#050505"
              borderRadius={28}
              glowRadius={40}
              glowIntensity={1}
              coneSpread={25}
              animated={false}
              colors={["#c084fc", "#f472b6", "#38bdf8"]}
              className="p-4 h-40 rounded-xl bg-white/5 border border-white/10"
            >
              <h3 className="text-white font-bold text-xl">15+</h3>
              <p className="text-gray-400 text-sm">Years Experience</p>
            </BorderGlow>
            <BorderGlow
              edgeSensitivity={30}
              glowColor="40 80 80"
              backgroundColor="#050505"
              borderRadius={28}
              glowRadius={40}
              glowIntensity={1}
              coneSpread={25}
              animated={false}
              colors={["#c084fc", "#f472b6", "#38bdf8"]}
              className="p-4 rounded-xl bg-white/5 border border-white/10"
            >
              <h3 className="text-white font-bold text-xl">15+</h3>
              <p className="text-gray-400 text-sm">Projects Completed</p>
            </BorderGlow>
          </div>
      </div>

      {/* Right Column: Bio & Details */}
      <div className="w-full md:w-1/2">
        <motion.div variants={itemVariants} className="space-y-6">
          <h2 className="flex items-center font-bold tracking-widest uppercase text-sm text-gray-800 gap-2">
            <FaUserCircle className="text-xl" /> About Me
          </h2>
          <p className="text-gray-800 leading-relaxed text-lg">
            I am a passionate{" "}
            <span className="text-black font-semibold">
              Full Stack Developer
            </span>{" "}
            dedicated to building digital experiences that are both functional
            and visually stunning. With a focus on modern web technologies, I
            bridge the gap between complex backend logic and intuitive frontend
            design.
          </p>
          
        
          <div className=" flex items-center px-6" style={{ height: "400px", position: "relative" }}>
            <h2 className="flex items-center font-bold absolute top-5 left-0 tracking-widest uppercase text-sm text-gray-800 gap-2">
            <IoRibbonSharp className="text-xl" /> Certifications
          </h2>
            <CircularGallery
              bend={0}
              textColor="#ffffff"
              borderRadius={0.05}
              scrollEase={0.02}
              scrollSpeed={2}
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
