import Footer from "@/component/Footer";
import { SplashScreen } from "@/component/SplashScreen";
import { type Variants } from "framer-motion";
import { useState } from "react";

import CertificationPage from "./CertificationPage";
import ContactPage from "./ContactPage";
import HomePage from "./HomePage";
import { ProjectPage } from "./ProjectPage";
import { SkillPage } from "./SkillPage";

import Header2 from "@/component/Header2";

export function MainPortfolio() {
  const [loading, setLoading] = useState<boolean>(true);

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

  if (loading) return <SplashScreen onComplete={() => setLoading(false)} />;

  return (
    <div
      className={`w-full min-h-screen relative transition duration-300 overflow-x-hidden background-dark2 xt-black selection:bg-black selection:text-white`}
    >
      <Header2 />
      <HomePage />
      <CertificationPage />
      <SkillPage />
      <ProjectPage />
      <ContactPage />
      <Footer revealVariant={revealVariant} />
    </div>
  );
}
