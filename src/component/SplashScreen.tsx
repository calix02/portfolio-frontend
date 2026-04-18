import { motion} from "framer-motion";
import { useEffect, useState } from "react";
import type { Variants } from "framer-motion";
import Logo from "@/assets/logo.svg"; 

export function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 800); // Slightly longer for the exit animation to breathe
          return 100;
        }
        // Use a smaller, more frequent increment for "liquid" smoothness
        const increment = Math.random() * 8; 
        return Math.min(prev + increment, 100);
      });
    }, 150); 

    return () => clearInterval(timer);
  }, [onComplete]);

  const containerVariants: Variants = {
    exit: {
      y: "-100%",
      transition: { duration: 0.9, ease: [0.85, 0, 0.15, 1] }
    }
  };

  const childVariants: Variants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      exit="exit"
      className="fixed inset-0 z-100 flex flex-col items-center justify-center background-dark text-white overflow-hidden"
    >
      {/* 1. Dynamic Background: Glassmorphic Glows */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05] 
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-emerald-500/20 blur-[120px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.03, 0.08, 0.03] 
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-[10%] -right-[10%] w-[50%] h-[50%] rounded-full bg-blue-600/10 blur-[120px]" 
        />
      </div>

      {/* 2. Branding Section */}
      <motion.div 
        className="relative z-10 flex flex-col items-center mb-12"
        variants={childVariants}
        animate="animate"
        initial="initial"
      >
        <div className="relative group">
          {/* Subtle glow behind logo */}
          <div className="absolute inset-0 bg-white/5 blur-2xl rounded-full scale-150 transition-transform duration-700 group-hover:scale-110" />
          <motion.img
            src={Logo}
            alt="Logo"
            className="h-24 md:h-28 w-auto mb-8 relative z-10 object-contain brightness-125 transition-all duration-500"
            style={{ filter: "drop-shadow(0 0 20px rgba(255,255,255,0.1))" }}
          />
        </div>
        
        <motion.h2 
          className="text-white tracking-[0.8em] uppercase text-[12px] md:text-[14px] font-extralight mb-2"
          initial={{ letterSpacing: "0.2em", opacity: 0 }}
          animate={{ letterSpacing: "0.8em", opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          Mark Alvarado
        </motion.h2>
        <span className="h-px w-8 bg-emerald-500/50" />
      </motion.div>

      {/* 3. The Modern Loading Engine */}
      <div className="relative z-10 w-72 md:w-96 flex flex-col items-center">
        {/* Loading Track */}
        <div className="w-full h-0.75 bg-white/5 rounded-full overflow-hidden backdrop-blur-sm border border-white/5 relative">
          {/* Liquid Progress Fill */}
          <motion.div
            className="absolute inset-y-0 left-0 bg-linear-to-r from-emerald-500 via-emerald-200 to-white shadow-[0_0_15px_rgba(16,185,129,0.5)]"
            initial={{ width: "0%" }}
            animate={{ width: `${loadingProgress}%` }}
            transition={{ ease: [0.22, 1, 0.36, 1] }}
          />
          
          {/* Shimmer Effect */}
          <motion.div 
            className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent"
            animate={{ x: ['-100%', '200%'] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
        </div>

        {/* Status Info */}
        <div className="w-full flex justify-between mt-4 px-1">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            className="text-[10px] uppercase tracking-[0.2em] font-medium"
          >
            System Init
          </motion.span>
          
          <span className="text-[10px] font-mono opacity-60 tabular-nums">
            {Math.round(loadingProgress)}%
          </span>
        </div>
      </div>
      
      {/* Decorative Corners */}
      <div className="absolute top-10 left-10 w-4 h-4 border-t border-l border-white/10" />
      <div className="absolute bottom-10 right-10 w-4 h-4 border-b border-r border-white/10" />
    </motion.div>
  );
}