import { motion } from "framer-motion";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";
import Background from "@/component/Background";

import Pattern from "@/assets/pattern/pattern1.svg";
import useInOutAnimation from "@/hooks/animations/useInOutAnimation";
import animationVariants from "@/hooks/animations/animationVariants";

export default function HomePage() {
  const socials = [
    {
      icon: <FaFacebook />,
      link: "#",
      color: "hover:text-blue-800 shadow-blue-400 shadow-sm",
    },
    {
      icon: <FaGithub />,
      link: "#",
      color: "hover:text-emerald-800 shadow-emerald-400 shadow-sm",
    },
    {
      icon: <FaLinkedin />,
      link: "#",
      color: "hover:text-cyan-400 shadow-cyan-400 shadow-sm",
    },
    {
      icon: <FaInstagram />,
      link: "#",
      color: "hover:text-pink-600 shadow-pink-400 shadow-sm",
    },
  ];
  const animate = useInOutAnimation();
  const animateL = animationVariants();

  return (
    <motion.section
      id="home"
      className="relative z-10 min-h-screen w-full flex items-center justify-center px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      <div className="absolute bottom-0 w-full">
        <img
          src={Pattern}
          alt="Pattern"
          className="w-full h-full object-cover -scale-y-100 "
        />
      </div>
      <Background />
      <motion.div
        variants={animate.containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.25 }}
        className="w-screen h-screen absolute flex  text-white "
      >
        {/*Left side */}
        <div className="flex flex-col justify-center items-center lg:p-10 text-center  w-full">
          <motion.h3
            variants={animate.itemVariants}
            className=" font-semibold  poppins-regular text-2xl"
          >
            Hi I'm{" "}
          </motion.h3>
          <br />
          <motion.h1
            variants={animate.itemVariants}
            className="lg:text-6xl text-2xl poppins-bold "
          >
            Mark Alvarado
          </motion.h1>
          <motion.h1
            variants={animate.itemVariants}
            className="lg:text-7xl text-4xl poppins-extrabold text-primaryColor "
          >
            <span className="bg-linear-to-r from-primaryColor via-[#353333] to-white bg-clip-text text-transparent">
              Fullstack Web
            </span>{" "}
            Developer
          </motion.h1>
          <motion.p
            variants={animate.itemVariants}
            className="poppins-regular text-lg"
          >
            "Crafting clean, reponsive and user-focused web experiences "
          </motion.p>
          <div className="flex gap-3 mt-3">
            {socials.map((social, index) => (
              <motion.a
                variants={animate.itemVariants}
                key={index}
                href={social.link}
                className={`${social.color} p-2 bg-white/0.5 backdrop-blur-xs border  rounded-xl transition duration-300 scale-0.75  text-2xl`}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
          <motion.div
            variants={animateL.containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.25 }}
            className="flex justify-center items-center font-semibold w-full lg:flex-row flex-col gap-3 mt-10"
          >
            <motion.button
              variants={animateL.leftVariants}
              className="lg:w-50 w-[70%] h-12 rounded-2xl border bg-slate-50 text-primaryColor backdrop-blur-xs flex justify-center items-center gap-2 cursor-pointer"
            >
              <span>Explore Works</span>
              <FaCode />
            </motion.button>
            <motion.button
              variants={animateL.rightVariants}
              className="lg:w-50 w-[70%] h-12 rounded-2xl border cursor-pointer bg-white/0.5 backdrop-blur-xs flex items-center justify-center gap-2 "
            >
              <span>Connect with Me</span>
              <FaEnvelope />
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
}
