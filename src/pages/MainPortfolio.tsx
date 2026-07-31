import Footer from "@/component/Footer";
import { Header } from "@/component/Header";
import { SplashScreen } from "@/component/SplashScreen";
import { AnimatePresence, type Variants } from "framer-motion";
import { useEffect, useState } from "react";
import { FiSun } from "react-icons/fi";
import { MdOutlineDarkMode } from "react-icons/md";
import { AboutPage } from "./AboutPage";
import ContactPage from "./ContactPage";
import HomePage from "./HomePage";
import { ProjectPage } from "./ProjectPage";
import { SkillPage } from "./SkillPage";
import { TestimonialPage } from "./TestimonialPage.";
import { GraphicPage } from "./GraphicPage";
import { SideNav } from "@/component/SideNav";
import Achievements from "./Achievements";

export function MainPortfolio() {
  const [openNav, setOpenNav] = useState<boolean>(false);

  const toggleMenu = () => {
    setOpenNav(!openNav);
  };
  //  Get theme from localStorage
  const [isDark, setIsDark] = useState<boolean>(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme === "dark" : true;
  });

  // Save theme whenever it changes
  useEffect(() => {
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  const toggleDark = () => {
    setIsDark(!isDark);
  };

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
        duration: 0.6,
        ease: [0.12, 1, 0.3, 1] as const,
      },
    },
  };

  if (loading)
    return (
      <SplashScreen isDark={isDark} onComplete={() => setLoading(false)} />
    );

  return (
    <div
   
      className={`w-full min-h-screen relative transition duration-300 overflow-x-hidden ${isDark ? "background-dark2" : "background-light"} xt-black selection:bg-black selection:text-white`}
    >
      <AnimatePresence>
      {openNav && (
        <div  onClick={toggleMenu} className="inset-0 bg-black/90 z-80 fixed">
          <SideNav isDark={isDark} />
        </div>
      )}
      </AnimatePresence>
      <Header
        openNav={openNav}
        toggleMenu={toggleMenu}
        isDark={isDark}
        textColor={isDark ? "text-gray-300" : "text-gray-500"}
        toggleDark={toggleDark}
        Icon={isDark ? FiSun : MdOutlineDarkMode}
      />

      {/* --- Home Section --- */}
      <HomePage
        isDark={isDark}
        highlightColor={isDark ? "text-gray-600" : "text-black"}
        textColor={isDark ? "text-gray-300" : "text-gray-600"}
        containerVariants={containerVariants}
        revealVariant={revealVariant}
      />


      {/* --- About Section --- */}
      <AboutPage
        bgColor={isDark ? "bg-black/50" : "bg-white/50"}
        highlightColor={isDark ? "text-white" : "text-gray-900"}
        textColor={isDark ? "text-gray-400" : "text-gray-700"}
        containerVariants={containerVariants}
        revealVariant={revealVariant}
      />
      {/* --- Skill Section --- */}
      <Achievements/>

      <SkillPage
        containerVariants={containerVariants}
        revealVariant={revealVariant}
        highlightColor={isDark ? "text-white" : "text-gray-900"}
        textColor={isDark ? "text-gray-400" : "text-gray-700"}
        bgColor={isDark ? "#050505" : "#fff"}
        borderColor={isDark ? "#333" : "#ddd"}
      />

      {/* --- Project Section --- */}
      <ProjectPage isDark={isDark} />
      <GraphicPage />
      <TestimonialPage isDark={isDark} />
      <ContactPage
        revealVariant={revealVariant}
        containerVariants={containerVariants}
        textColor={isDark ? "text-gray-300" : "text-gray-400"}
      />
      <Footer revealVariant={revealVariant} />
    </div>
  );
}
