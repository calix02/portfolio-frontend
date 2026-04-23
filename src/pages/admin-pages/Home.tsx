import { useState, type ChangeEvent } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaDownload, FaUpload, FaSave } from "react-icons/fa";
import DashboardHeader from "@/component/DashboardHeader";
import Sidebar from "@/component/Sidebar";

export function Home() {
  // 1. State Management for Live Preview
  const [content, setContent] = useState({
    role: "FULL STACK DEVELOPER & FREELANCER",
    quoteMain: "From concept to",
    quoteSub: "deployment",
    quoteLast: "I build it all.",
    description: "Crafting high-performance web applications and IoT solutions with a focus on clean aesthetics and seamless user experience.",
    nickname: "MARK ALVARADO",
    image: null as string | null,
  });

  // Handle Text Inputs
  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContent((prev) => ({ ...prev, [name]: value }));
  };

  // Handle Image Upload
  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setContent((prev) => ({ ...prev, image: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="w-screen h-screen bg-[#09090b] flex overflow-hidden text-white font-sans">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-y-auto">
        <DashboardHeader />

        <main className="p-8 flex flex-col xl:flex-row gap-8 items-start">
          
          {/* --- LEFT: STUNNING EDITOR FORM --- */}
          <form className="w-full xl:w-112.5 flex flex-col gap-5 bg-white/3 backdrop-blur-2xl p-8 rounded-[2.5rem] border border-white/10 shadow-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="size-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-500">
                <FaSave />
              </div>
              <h1 className="text-xl font-bold tracking-tight">Home Content Editor</h1>
            </div>

            <div className="grid gap-4">
              <InputField label="Role Title" name="role" value={content.role} onChange={handleInputChange} />
              <div className="grid grid-cols-2 gap-3">
                <InputField label="Quote Main" name="quoteMain" value={content.quoteMain} onChange={handleInputChange} />
                <InputField label="Quote Sub (Italic)" name="quoteSub" value={content.quoteSub} onChange={handleInputChange} />
              </div>
              <InputField label="Closing Line" name="quoteLast" value={content.quoteLast} onChange={handleInputChange} />
              
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold ml-1">Description</label>
                <textarea
                  name="description"
                  value={content.description}
                  onChange={handleInputChange}
                  className="w-full bg-black/40 border border-white/5 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-emerald-500/50 transition-all min-h-25 resize-none"
                />
              </div>

              <InputField label="Display Nickname" name="nickname" value={content.nickname} onChange={handleInputChange} />

              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold ml-1">Profile Image</label>
                <label className="flex items-center justify-center w-full h-14 bg-white/2 border-2 border-dashed border-white/10 rounded-2xl cursor-pointer hover:bg-white/5 transition-all group">
                  <FaUpload className="mr-2 text-zinc-500 group-hover:text-emerald-500 transition-colors" />
                  <span className="text-xs text-zinc-400">Replace Site Image</span>
                  <input type="file" className="hidden" onChange={handleImageUpload} accept="image/*" />
                </label>
              </div>
            </div>

            <button 
              type="button" 
              className="mt-4 w-full py-4 bg-white text-black font-black uppercase tracking-[0.2em] text-[10px] rounded-2xl hover:bg-emerald-400 transition-all shadow-[0_0_30px_rgba(255,255,255,0.05)]"
            >
              Save Changes
            </button>
          </form>

          {/* --- RIGHT: ELEGANT LIVE PREVIEW --- */}
          <div className="flex-1 bg-zinc-950/50 border border-white/5 rounded-[3rem] p-12 relative min-h-150 overflow-hidden flex items-center shadow-inner">
            {/* Background HUD Decor */}
            <div className="absolute top-10 left-10 text-[10px] uppercase tracking-[0.5em] text-zinc-800 font-black rotate-90 origin-left">Preview Mode</div>
            
            <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-12">
              
              {/* Text Side */}
              <div className="flex-1 space-y-6">
                <motion.p key={content.role} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-zinc-500 font-bold tracking-[0.3em] text-[11px] uppercase">
                  {content.role}
                </motion.p>
                
                <div className="space-y-0">
                  <h2 className="text-6xl font-black tracking-tighter leading-[1.1]">
                    {content.quoteMain} <br />
                    <span className="text-zinc-700 italic">{content.quoteSub}</span>
                  </h2>
                  <h2 className="text-5xl font-light text-zinc-400 tracking-tight mt-2 opacity-80">
                    {content.quoteLast}
                  </h2>
                </div>

                <p className="text-zinc-500 text-lg leading-relaxed max-w-md">
                  {content.description}
                </p>

                <div className="flex items-center gap-4 pt-6">
                  <button className="px-8 py-4 bg-black rounded-full border border-white/10 text-white font-bold text-sm flex items-center gap-3">
                    <FaEnvelope className="text-emerald-500" /> Hire Me
                  </button>
                  <button className="px-8 py-4 bg-white rounded-full text-black font-bold text-sm flex items-center gap-3">
                    <FaDownload /> Download CV
                  </button>
                </div>
              </div>

              {/* Image Side */}
              <div className="relative shrink-0 group">
                <div className="absolute inset-0 bg-blue-500/10 blur-[120px] rounded-full group-hover:bg-blue-500/20 transition-all duration-1000" />
                <div className="relative w-95 h-120 bg-zinc-900 rounded-[2.5rem] border border-white/10 overflow-hidden shadow-2xl">
                  {content.image ? (
                    <img src={content.image} className="w-full h-full object-cover" alt="Profile" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-zinc-800 font-black text-4xl">NO IMG</div>
                  )}
                  
                  {/* Floating Badge */}
                  <div className="absolute bottom-6 right-6 bg-black/60 backdrop-blur-md border border-white/10 px-6 py-2 rounded-full">
                    <span className="text-[10px] font-black tracking-widest text-white uppercase">{content.nickname}</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </main>
      </div>
    </div>
  );
}

// Small helper component for the form inputs
function InputField({ label, name, value, onChange }: { label: string; name: string; value: string; onChange: (e: ChangeEvent<HTMLInputElement>) => void; }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold ml-1">{label}</label>
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        className="w-full bg-black/40 border border-white/5 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-emerald-500/50 transition-all"
      />
    </div>
  );
}