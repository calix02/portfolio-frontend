import { useHomeData } from "@/hooks/useHomeData";
import { motion, type Variants } from "framer-motion";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import { FaRegEnvelope, FaArrowUpLong, FaEnvelope } from "react-icons/fa6";
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

  const socials = [
    {
      icon : <FaFacebook/>,
      link : "#",
      color: "hover:text-blue-800 shadow-blue-400 shadow-sm"

    },
    {
      icon : <FaGithub />,
      link : "#",
       color: "hover:text-emerald-800 shadow-emerald-400 shadow-sm"

    },
    {
      icon : <FaLinkedin />,
      link : "#",
       color: "hover:text-cyan-400 shadow-cyan-400 shadow-sm"

    },
    {
      icon : <FaInstagram />,
      link : "#",
       color: "hover:text-pink-600 shadow-pink-400 shadow-sm"

    },

  ]


  return (
    <motion.section
      id="home"
   
      className="relative z-10 min-h-screen w-full flex items-center justify-center px-6 md:px-12 lg:px-24 py-24 lg:py-0 overflow-hidden"
    >
     <Background/>
     <motion.div    initial="initial"
      whileInView="whileInView"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants} className="w-screen h-screen absolute flex text-white ">
      {/*Left side */}
      <div className="flex flex-col justify-center items-center p-10  w-full">
       <motion.h3 variants={revealVariant} className=" font-semibold  poppins-regular text-2xl">Hi I'm </motion.h3><br />
       <motion.h1  variants={revealVariant} className="text-6xl poppins-bold ">Mark Alvarado</motion.h1>
       <motion.h1  variants={revealVariant} className="text-7xl poppins-extrabold text-[#560101]"><span className="bg-linear-to-r from-[#560101] via-[#353333] to-white bg-clip-text text-transparent">Fullstack Web</span> Developer</motion.h1>
       <motion.p  variants={revealVariant} className="poppins-regular text-lg">"Crafting clean, reponsive and user-focused web experiences "</motion.p>
       <div className="flex gap-3 mt-3">
        {socials.map((social, index) =>(
          <a key={index} href={social.link} className={`${social.color} p-2 bg-white/0.5 backdrop-blur-xs border  rounded-xl transition duration-300 scale-0.75  text-2xl`}>
            {social.icon}
          </a>

        ))}
       
       </div>
       <div className="flex justify-center gap-3 mt-10">
        <button className="w-50 h-12 rounded-2xl border bg-white/0.5 backdrop-blur-xs flex justify-center items-center gap-2 cursor-pointer">
          <span>Explore Works</span>
          <FaCode/>
        </button>
        <button className="w-50 h-12 rounded-2xl border cursor-pointer bg-white/0.5 backdrop-blur-xs flex items-center justify-center gap-2 ">
          <span>Connect with Me</span>
          <FaEnvelope/>
        </button>
       </div>
      </div>
     
     </motion.div>
      
   
  
      
    </motion.section>
  );
}