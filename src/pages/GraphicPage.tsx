import { useState } from "react";
import { ArrowUpRight, Layers, Sparkles, HelpCircle } from "lucide-react";
import Stack from "@/component/Stack";
import P1 from "@/assets/poster/1.png";
import P2 from "@/assets/poster/2.png";
import P3 from "@/assets/poster/3.png";
import P4 from "@/assets/poster/4.png";
import P5 from "@/assets/poster/5.png";

export function GraphicPage() {
  const images = [P1, P2, P3, P4, P5];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Tracks the active card index on deck click to dynamically display poster info
  const handleCardCycle = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <section 
      id="graphics" 
      className="relative w-full min-h-screen flex items-center justify-center py-24 px-6 md:px-12 lg:px-20  text-neutral-100 overflow-hidden"
    >
      {/* 1. Ultra-Modern Cyber Dot Matrix Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />

      {/* 2. Abstract Geometric Ambient Art Orbs */}
      <div className="absolute top-[-10%] right-[-10%] w-125 h-125 bg-linear-to-br from-purple-600/10 to-indigo-600/10 rounded-full blur-[140px] animate-pulse duration-[10s]" />
      <div className="absolute bottom-[-10%] left-[-10%] w-125 h-125 bg-linear-to-tr from-blue-600/10 to-emerald-600/10 rounded-full blur-[140px] animate-pulse duration-[8s]" />

      {/* Main Container */}
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center z-10">
        
        {/* Left Column: Premium Typography & Dynamic Card Feedback */}
        <div className="lg:col-span-5 space-y-8 text-center lg:text-left order-2 lg:order-1">
          <div className="space-y-4">
            {/* Minimalist Micro-Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-[11px] font-semibold tracking-widest text-indigo-400 uppercase backdrop-blur-md shadow-inner">
              <Layers className="w-3 h-3 text-indigo-400 animate-spin-slow" /> 
              Curated Exhibition
            </div>
            
            {/* Modern High-Contrast Gradient Typography */}
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-[1.05] bg-linear-to-b from-white  to-[#050505] bg-clip-text text-transparent">
              Visual Design <br />
              <span className="bg-linear-to-r from-indigo-400 via-purple-400 to-cyan-600 bg-clip-text text-transparent">
                & Poster Series
              </span>
            </h2>
            
            <p className="text-neutral-400 text-base md:text-lg font-light leading-relaxed max-w-md mx-auto lg:mx-0">
              A physical deck aesthetic exploring Swiss minimalism, neo-brutalist layouts, and striking color spaces. 
            </p>
          </div>

          {/* Dynamic Gallery Counter Card */}
          <div className="p-4 rounded-xl bg-neutral-900/40 border border-neutral-800/60 backdrop-blur-md max-w-sm mx-auto lg:mx-0 flex items-center justify-between shadow-2xl transition-all duration-300">
            <div className="flex items-center gap-3">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <p className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                Viewing Piece
              </p>
            </div>
            <div className="text-right font-mono font-bold text-sm tracking-widest text-neutral-200">
              {String(currentIndex + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
            </div>
          </div>

          {/* Interactive Actions */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <button className="group relative px-6 py-3 rounded-xl bg-white text-black font-semibold text-sm transition-all duration-300 hover:bg-neutral-200 hover:shadow-[0_0_30px_rgba(255,255,255,0.25)] flex items-center gap-2 overflow-hidden">
              <span>View Full Archive</span>
              <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </button>
            
            <div className="flex items-center gap-1.5 text-xs text-neutral-500 font-mono">
              <HelpCircle className="w-3.5 h-3.5" /> Click cards to swap
            </div>
          </div>
        </div>

        {/* Right Column: Floating Luxury Interactive Art Deck Container */}
        <div className="lg:col-span-7 flex justify-center items-center order-1 lg:order-2 relative group py-8">
          
          {/* Animated Interactive aura trail behind card stack */}
          <div className="absolute w-110 h-140 bg-linear-to-tr from-indigo-500/20 via-purple-500/10 to-pink-500/20 rounded-[40px] blur-3xl opacity-40 group-hover:opacity-90 group-hover:scale-105 transition-all duration-1000 ease-out pointer-events-none" />

          {/* Main Display Chassis */}
          <div 
            onClick={handleCardCycle}
            style={{ width: 340, height: 476 }} 
            className="relative rounded-3xl shadow-[0_35px_80px_-15px_rgba(0,0,0,0.9)] border border-neutral-800 bg-neutral-950/80 p-2 overflow-hidden transform group-hover:-translate-y-2 transition-all duration-500 ease-out cursor-pointer select-none"
          >
            {/* Top Minimalist Header Frame Detail inside the stack case */}
            <div className="absolute top-4 left-6 right-6 flex justify-between items-center z-30 mix-blend-difference opacity-40 pointer-events-none font-mono text-[9px] uppercase tracking-widest">
              <div className="flex items-center gap-1.5"><Sparkles className="w-2.5 h-2.5" /> Studio.Edition</div>
              <div>©2026</div>
            </div>

            <Stack
              randomRotation={true}
              sensitivity={280}
              sendToBackOnClick={true}
              cards={images.map((src, i) => (
                <div key={i} className="w-full h-full relative overflow-hidden rounded-[18px]">
                  {/* Outer premium glass rim lighting built directly onto each stack card layer */}
                  <div className="absolute inset-0 border border-white/8 rounded-[18px] z-20 pointer-events-none shadow-inner" />
                  
                  {/* Ambient overlay to give physical texture tint */}
                  <div className="absolute inset-0 bg-neutral-950/5 z-10 transition-opacity duration-300 group-hover:opacity-0" />
                  
                  <img
                    src={src}
                    alt={`Design project art piece ${i + 1}`}
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
                    draggable="false"
                  />
                </div>
              ))}
            />
          </div>
        </div>

      </div>
    </section>
  );
}