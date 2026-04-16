
import { motion } from "framer-motion";

export default function HomePage() {


  return (
    <div className="relative min-h-screen w-full bg-white flex items-center justify-center overflow-hidden font-sans">
      {/* --- Animated Background Graphics --- */}
    

      {/* --- Aesthetic Footer Graphic --- */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 text-white/30 text-xs tracking-widest uppercase"
      >
        Mark Alvarado
      </motion.div>
    </div>
  );
}
