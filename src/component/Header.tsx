import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import Logo from "@/assets/logo.svg";
import type { IconType } from "react-icons/lib";

type HeaderProps = {
  toggleDark: () => void;
  Icon: IconType;
  textColor: string;
};

export function Header({ toggleDark, Icon, textColor }: HeaderProps) {
  const navItems = ["Home", "About", "Skills", "Projects", "Testimonials", "Contact"];
  
  // Track visibility state
  const [isHidden, setIsHidden] = useState(false);
  const { scrollY } = useScroll();

  // Framer Motion's optimized way to listen to scroll changes
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    
    // 1. Show if we are near the top
    if (latest < 50) {
      setIsHidden(false);
    } 
    // 2. Hide if scrolling DOWN
    else if (latest > previous && latest > 150) {
      setIsHidden(true);
    } 
    // 3. Show if scrolling UP
    else if (latest < previous) {
      setIsHidden(false);
    }
  });

  return (
    <motion.header
      // Transition logic: Initial load vs Scroll behavior
      initial={{ y: -100, opacity: 0 }}
      animate={{ 
        y: isHidden ? -120 : 0, // Slide up further than top-4 to fully hide
        opacity: isHidden ? 0 : 1 
      }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
       className="w-[95%] max-w-7xl mx-auto h-20 fixed top-4 left-0 right-0 z-50 flex justify-between items-center px-8 md:px-12 
      /* Floating Glass Effect */
      bg-white/10 backdrop-blur-xl rounded-2xl
      border border-black/5 shadow-[0_8px_32px_rgba(0,0,0,0.05)]"
    >
      {/* --- Logo Section --- */}
      <motion.div 
        whileHover={{ scale: 1.02 }}
        className="flex justify-center items-center cursor-pointer"
      >
        <img src={Logo} className="h-10 w-auto object-contain" alt="Logo" />
      </motion.div>

      {/* --- Navigation --- */}
      <nav className="hidden md:flex gap-8 items-center">
        {navItems.map((item) => (
          <motion.a
            key={item}
            href={`#${item.toLowerCase()}`}
            className={`relative ${textColor} text-sm font-medium transition-colors hover:text-white group`}
          >
            {item}
            <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-white transition-all duration-300 group-hover:w-full" />
          </motion.a>
        ))}
      </nav>

      {/* --- Action Button --- */}
      <div className="flex items-center gap-4">
        <motion.button 
          onClick={toggleDark}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden sm:block cursor-pointer p-2 bg-white text-black text-xl font-bold rounded-full shadow-lg hover:bg-gray-200 transition-all"
        >
          <Icon className="transition-transform duration-500"/>
        </motion.button>
        
        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex flex-col gap-1 cursor-pointer p-2">
          <div className="w-5 h-0.5 bg-white"></div>
          <div className="w-5 h-0.5 bg-white"></div>
        </div>
      </div>
      
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/5 to-transparent -z-10 rounded-2xl" />
    </motion.header>
  );
}