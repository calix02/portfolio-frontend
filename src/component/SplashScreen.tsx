import Logo from "@/assets/logo.svg";
import type { Variants } from "framer-motion";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
const getStatus = (progress: number) => {
  if (progress > 80) return "Finalizing Assets...";
  if (progress > 40) return "Configuring Systems...";
  if (progress > 10) return "Loading Core Modules...";
  return "Initializing...";
};

export function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const status = getStatus(loadingProgress); //

  useEffect(() => {
    const timer = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 1000);
          return 100;
        }
        const increment = Math.random() * 12;
        return Math.min(prev + increment, 100);
      });
    }, 120);

    return () => clearInterval(timer);
  }, [onComplete]);

  const containerVariants: Variants = {
    exit: {
      clipPath: "inset(0% 0% 100% 0%)",
      transition: { duration: 1.1, ease: [0.77, 0, 0.175, 1] },
    },
  };

  const logoVariants: Variants = {
    initial: { scale: 0.8, opacity: 0, filter: "blur(10px)" },
    animate: {
      scale: 1,
      opacity: 1,
      filter: "blur(0px)",
      transition: { duration: 1.2, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      exit="exit"
      className="fixed inset-0 z-9999 flex flex-col items-center justify-center bg-[#050505] text-white overflow-hidden"
    >
      {/* 1. Enhanced Background: Animated Mesh + Grain */}
      <div className="absolute inset-0 z-0">
        <motion.div
          animate={{
            x: [0, 20, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-emerald-600/10 blur-[150px]"
        />
        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-500/10 blur-[150px]"
        />
        {/* Grain Overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      {/* 2. Branding Section */}
      <div className="relative z-10 flex flex-col items-center mb-16">
        <motion.div
          variants={logoVariants}
          initial="initial"
          animate="animate"
          className="relative mb-8"
        >
          {/* Outer Ring Animation */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-6 border border-white/5 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-10 border border-emerald-500/10 rounded-full border-dashed"
          />

          <img
            src={Logo}
            alt="Logo"
            className="h-20 md:h-24 w-auto relative z-10 brightness-150 drop-shadow-[0_0_30px_rgba(16,185,129,0.3)]"
          />
        </motion.div>

        <div className="overflow-hidden">
          <motion.h2
            className="text-white tracking-[1em] uppercase text-[10px] md:text-[12px] font-light"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Mark Alvarado
          </motion.h2>
        </div>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "40px" }}
          transition={{ duration: 1, delay: 1 }}
          className="h-[1px] bg-emerald-500/60 mt-4"
        />
      </div>

      {/* 3. The Minimalist Loading Engine */}
      <div className="relative z-10 w-64 md:w-80">
        <div className="flex justify-between items-end mb-2 px-1">
          <AnimatePresence mode="wait">
            <motion.span
              key={status}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 0.5, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              className="text-[9px] uppercase tracking-widest font-medium text-emerald-400"
            >
              {status}
            </motion.span>
          </AnimatePresence>
          <span className="text-[10px] font-mono opacity-40 tabular-nums">
            {Math.round(loadingProgress)}%
          </span>
        </div>

        <div className="h-[2px] w-full bg-white/5 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-emerald-500"
            initial={{ width: "0%" }}
            animate={{ width: `${loadingProgress}%` }}
            transition={{ ease: "circOut" }}
          />
        </div>
      </div>

      {/* 4. Decorative Technical HUD Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-8 left-8 flex flex-col gap-2">
          <div className="w-8 h-[1px] bg-white/20" />
          <div className="w-1 h-1 bg-emerald-500 rounded-full" />
        </div>
        <div className="absolute bottom-8 right-8 flex flex-col items-end gap-2">
          <div className="w-1 h-1 bg-emerald-500 rounded-full" />
          <div className="w-8 h-[1px] bg-white/20" />
        </div>
        {/* Subtle Scanline Effect */}
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-white/[0.02] to-transparent h-[2px] w-full top-0 animate-scanline" />
      </div>
    </motion.div>
  );
}
