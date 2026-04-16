import { motion } from "framer-motion";
import Logo from "@/assets/logo.svg";

export function Header() {
  const navItems = ["Home", "About", "Skills", "Projects", "Testimonials", "Contact"];

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
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
            className="relative text-gray-500 text-sm font-medium transition-colors hover:text-black group"
          >
            {item}
            {/* Animated Underline */}
            <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-black transition-all duration-300 group-hover:w-full" />
          </motion.a>
        ))}
      </nav>

      {/* --- Action Button --- */}
      <div className="flex items-center gap-4">
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden sm:block px-6 py-2 bg-black text-white text-xs font-bold rounded-full shadow-lg shadow-black/10 hover:bg-gray-800 transition-all"
        >
          Let's Talk
        </motion.a>
        
        {/* Mobile Menu Toggle (Simplified) */}
        <div className="md:hidden flex flex-col gap-1 cursor-pointer p-2">
          <div className="w-5 h-0.5 bg-black"></div>
          <div className="w-5 h-0.5 bg-black"></div>
        </div>
      </div>
      
      {/* Subtle background glow for depth */}
      <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -z-10 rounded-2xl" />
    </motion.header>
  );
}