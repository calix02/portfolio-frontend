import { Header } from "@/component/Header";
import type { Variants } from "framer-motion";
import { SplashScreen } from "@/component/SplashScreen";
import {  useState } from "react";
import HomePage from "./HomePage";
import { AboutPage } from "./AboutPage";

export function MainPortfolio() {

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
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as const
    }
  }
};


if(loading) return <SplashScreen onComplete={() => setLoading(false)} />;

  return (
    <div className="w-full min-h-screen relative overflow-x-hidden background-light xt-black selection:bg-black selection:text-white">
      {/* --- Subtle Background Graphics --- */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div
          className="absolute -top-24 -right-24 w-125 h-125 rounded-full opacity-40 blur-[120px] animate-pulse"
          style={{ background: "radial-gradient(circle, #f1f5f9 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-[-10%] left-[-5%] w-150 h-150 rounded-full opacity-30 blur-[130px]"
          style={{ background: "radial-gradient(circle, #e2e8f0 0%, transparent 70%)" }}
        />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <Header />

      {/* --- Home Section --- */}
      <HomePage containerVariants={containerVariants} revealVariant={revealVariant}/>

      {/* --- About Section --- */}
      <AboutPage  />

     
    </div>
  );
}