import { Header } from "@/component/Header";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import Me from "@/assets/me.svg";
import { SplashScreen } from "@/component/SplashScreen";
import {  useState } from "react";

export function MainPortfolio() {

  const [loading, setLoading] = useState<boolean>(true);
  // Container variant to stagger children animations
  const containerVariants = {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Content reveal variant
 
  const revealVariant: Variants = {
  initial: { opacity: 0, y: 30 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as const
    }
  }
};


if(loading) return <SplashScreen onComplete={() => setLoading(false)} />;

  return (
    <div className="w-full min-h-screen relative overflow-x-hidden background-light xt-black selection:bg-black selection:text-white">
      {/* --- Subtle Background Graphics --- */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div
          className="absolute -top-24 -right-24 w-125 h-125 rounded-full opacity-40 blur-[120px] animate-pulse"
          style={{ background: "radial-gradient(circle, #f1f5f9 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-[-10%] left-[-5%] w-150 h-150 rounded-full opacity-30 blur-[130px]"
          style={{ background: "radial-gradient(circle, #e2e8f0 0%, transparent 70%)" }}
        />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <Header />

      {/* --- Home Section --- */}
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
              Creative Developer & Designer
            </p>
            <h1 className="bg-linear-to-b from-gray-200 to-black bg-clip-text text-transparent text-5xl md:text-7xl font-bold  leading-[1.1]">
              From concept to deployment <br />
              <span className="italic font-light text-gray-400">I build it all.</span>
            </h1>
          </motion.div>

          <motion.p variants={revealVariant} className="text-gray-600 max-w-lg mx-auto lg:mx-0 leading-relaxed text-lg border-l-0 lg:border-l-2 border-black/10 lg:pl-6">
            Crafting high-performance web applications and IoT solutions with a focus on{" "}
            <span className="text-black font-semibold underline underline-offset-4 decoration-black/10">clean aesthetics</span> and{" "}
            <span className="text-black font-semibold underline underline-offset-4 decoration-black/10">seamless user experience.</span>
          </motion.p>

          <motion.div variants={revealVariant} className="flex flex-wrap justify-center lg:justify-start gap-6 pt-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-black text-white font-bold rounded-full hover:shadow-2xl hover:shadow-black/20 transition-all duration-300"
            >
              View Projects
            </motion.button>
            <motion.button 
              whileHover={{ backgroundColor: "rgba(0,0,0,0.05)" }}
              className="px-10 py-4 border border-black/10 rounded-full font-medium transition-colors duration-300"
            >
              Contact Me
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
            <div className="relative z-10 p-4 bg-white shadow-2xl rounded-2xl border border-black/3">
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="overflow-hidden rounded-xl bg-gray-50"
              >
                <img
                  src={Me}
                  className="h-80 md:h-110 lg:h-130 w-auto object-cover  transition-all duration-700 ease-in-out"
                  alt="Professional Portrait"
                />
              </motion.div>
              
              {/* Creative Tag */}
              <div className="absolute -bottom-4 -right-4 bg-black text-white px-4 py-2 rounded-lg shadow-xl text-xs font-bold tracking-widest uppercase rotate-3">
                Mark Alvarado
              </div>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* --- Second Section --- */}
      <motion.section
        id="about"
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: false, amount: 0.3 }}
        variants={revealVariant}
        className="relative z-10 flex flex-col items-center justify-center min-h-screen w-full px-6"
      >
        <div className="h-px w-24 bg-black/20 mb-12" />
        <h2 className="text-black text-5xl md:text-6xl font-bold tracking-tighter italic text-center">
          Modern Solutions
        </h2>
        <p className="text-gray-400 mt-6 tracking-[0.5em] uppercase text-xs font-semibold">
          Innovation • Precision • Aesthetics
        </p>
      </motion.section>
    </div>
  );
}