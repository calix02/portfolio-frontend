import CircularGallery from "@/component/CircularGallery";
import Gallery from "@/component/Gallery";
import useInOutAnimation from "@/hooks/animations/useInOutAnimation";
import { motion } from "framer-motion";
import { GrAchievement } from "react-icons/gr";
import Pattern from "@/assets/pattern/intersecting-curves.svg";

export default function CertificationPage() {
  const animate = useInOutAnimation();
  return (
    <section
      id="certifications" 
      className="relative w-full min-h-screen bg-slate-50 flex flex-col items-center justify-center py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
       <div className="absolute inset-x-0 bottom-0">
        <img src={Pattern} alt="" className="object-cover -scale-y-100" />

      </div>
      {/* Decorative Background Glows */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primaryColor/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-slate-200/50 rounded-full blur-3xl pointer-events-none" />

      <motion.div
      variants={animate.containerVariants}
      initial = "hidden"
      whileInView = "visible"
      viewport = {{amount: 0.25}} 

        className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Subtitle / Category Badge */}
        <motion.div variants={animate.itemVariants} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-200/60 border border-slate-300/50 text-xs font-semibold text-slate-700 uppercase tracking-wider mb-4 shadow-xs">
          <GrAchievement className="text-primaryColor text-sm" />
          <span>Milestones & Recognition</span>
        </motion.div>

        {/* Main Section Header */}
        <motion.h2 variants={animate.itemVariants} className="poppins-bold text-3xl sm:text-4xl md:text-5xl text-center mb-4 tracking-tight">
          <span className="bg-linear-to-r from-primaryColor to-slate-900 bg-clip-text text-transparent">
            Achievements & Certifications
          </span>
        </motion.h2>

        {/* Descriptive Subtext */}
        <motion.p variants={animate.itemVariants} className="text-slate-600 text-center text-sm sm:text-base max-w-xl mb-12 poppins-regular">
          A showcase of my professional credentials, completed courses, and notable milestones.
        </motion.p>

        {/* Gallery Container */}
        <motion.div variants={animate.itemVariants} className="w-full lg:block md:block hidden">
          <Gallery />
        </motion.div>
        <motion.div variants={animate.itemVariants} className="w-full lg:hidden md:hidden block">
          <CircularGallery />
        </motion.div>

      </motion.div>
    </section>
  );
}