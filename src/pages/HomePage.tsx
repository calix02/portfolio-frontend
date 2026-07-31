import { useHomeData } from "@/hooks/useHomeData";
import { motion, type Variants } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import { FaRegEnvelope, FaArrowUpLong } from "react-icons/fa6";
import Image from "@/assets/developer.svg";
import Background from "@/component/Background";
import Gallery from "@/component/Gallery";

interface HomePageProps {
  containerVariants: Variants;
  revealVariant: Variants;
  textColor: string;
  highlightColor: string;
  isDark: boolean;
}

export default function HomePage({
  containerVariants,
  revealVariant,
  textColor,
  highlightColor,
  isDark,
}: HomePageProps) {
  const { homeData } = useHomeData();

 

  // Fallbacks based on your multi-disciplinary background
  const fallbackRole = "Web Developer & Graphic Designer";
  const fallbackHeadline = "Mark Alvarado";
  const fallbackSubheadline =
    "Architecting clean code. Designing seamless experiences.";

  return (
    <motion.section
      id="home"
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className="relative z-10 min-h-screen w-full flex items-center justify-center px-6 md:px-12 lg:px-24 py-24 lg:py-0 overflow-hidden"
    >
      <Gallery/>
      
   
  
      
    </motion.section>
  );
}