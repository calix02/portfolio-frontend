import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import type { Variants } from "framer-motion";
// Import your actual logo file here
import Logo from "@/assets/logo.svg"; 

export function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const [loadingProgress, setLoadingProgress] = useState(0);

  // Simulate loading progress
  useEffect(() => {
    const timer = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          // Buffer time before hiding splash screen
          setTimeout(onComplete, 2000); 
          return 100;
        }
        // Random increment for realistic feel
        const increment = Math.random() * 15; 
        return Math.min(prev + increment, 100);
      });
    }, 500); // Speed of updates

    return () => clearInterval(timer);
  }, [onComplete]);

  // Logo Animation Variants (Luxury Scale & Fade)
 const logoVariants: Variants = {
  initial: { opacity: 0, scale: 0.8, y: 10 },
  animate: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1] as const
    }
  }
};

  // Static 'Studio' text animation
  const textVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { delay: 0.8, duration: 0.8 }
    }
  };

  return (
    <motion.div
      className="fixed inset-0 z-100 flex flex-col items-center justify-center background-dark text-white overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
    >
      {/* Subtle Background Glow (Matching Portfolio) */}
      <div
        className="absolute w-150 h-150 rounded-full animate-pulse animation-duration-[12s] opacity-10 blur-[150px]"
        style={{ background: "radial-gradient(circle, #FFFFFF 0%, transparent 70%)" }} 
      />

      {/* --- Logo & Branding Container --- */}
      <div className="relative z-10 flex flex-col items-center mb-16">
        <motion.img
          src={Logo}
          alt="MA Logo"
          className="h-28 md:h-32 w-auto mb-6 object-contain grayscale brightness-110"
          variants={logoVariants}
          initial="initial"
          animate="animate"
        />
        
        <motion.p 
          className="text-gray-500 tracking-[0.6em] uppercase text-[15px] font-light"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          Mark Alvarado
        </motion.p>
      </div>

      {/* --- Animated Loading Bar (Minimalist) --- */}
      <div className="relative z-10 w-64 md:w-80 h- bg-white/10 rounded-full overflow-hidden">
        {/* The active loading fill */}
        <motion.div
          className="absolute inset-y-0 left-0 bg-white rounded-full"
          style={{ width: `${loadingProgress}%` }}
          transition={{ ease: "easeInOut" }} // Smooth fill
        />
        
        {/* Optional: Glossy gradient overlay on fill */}
        <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
      </div>

      {/* Percentage Counter (Subtle) */}
      <motion.p 
        className="relative z-10 text-gray-600 text-xs mt-3 tabular-nums font-mono"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {Math.round(loadingProgress)}%
      </motion.p>
      
    </motion.div>
  );
}