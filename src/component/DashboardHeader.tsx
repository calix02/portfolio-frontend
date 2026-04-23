import { motion } from "framer-motion";
import { FaMagnifyingGlass, FaBell, FaGear, FaTerminal } from "react-icons/fa6";

export default function DashboardHeader() {
  return (
    <header className="h-20 w-full bg-[#050505] backdrop-blur-xl border-b border-white/5 flex items-center justify-between px-8 sticky top-0 z-40">
      {/* --- Left: Breadcrumbs / System Path --- */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 text-zinc-500">
          <FaTerminal className="text-emerald-500 text-xs" />
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold">System</span>
        </div>
        <span className="text-zinc-800">/</span>
        <motion.span 
          initial={{ opacity: 0, x: -5 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xs font-medium text-white tracking-wide"
        >
          Dashboard
        </motion.span>
      </div>

      {/* --- Center: Command Search --- */}
      <div className="hidden md:flex items-center relative group">
        <FaMagnifyingGlass className="absolute left-4 text-zinc-500 group-focus-within:text-emerald-500 transition-colors size-3" />
        <input 
          type="text" 
          placeholder="Execute command... (Cmd + K)"
          className="bg-white/3 border border-white/5 rounded-full pl-10 pr-16 py-2 text-xs text-zinc-300 w-80 focus:outline-none focus:border-emerald-500/50 focus:bg-white/5 transition-all"
        />
        <div className="absolute right-3 px-1.5 py-0.5 rounded border border-white/10 text-[9px] text-zinc-500 font-mono">
          ⌘K
        </div>
      </div>

      {/* --- Right: Status & Actions --- */}
      <div className="flex items-center gap-6">
        {/* Status Indicator */}
        <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/5 border border-emerald-500/10">
          <div className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[9px] uppercase tracking-widest text-emerald-500 font-bold">Live System</span>
        </div>

        <div className="flex items-center gap-3">
          <button className="p-2.5 rounded-xl bg-white/3 border border-white/5 text-zinc-400 hover:text-white hover:bg-white/8 transition-all relative">
            <FaBell size={16} />
            <span className="absolute top-2 right-2 size-2 bg-emerald-500 rounded-full border-2 border-[#050505]" />
          </button>
          <button className="p-2.5 rounded-xl bg-white/3 border border-white/5 text-zinc-400 hover:text-white hover:bg-white/8 transition-all">
            <FaGear size={16} />
          </button>
        </div>
      </div>
    </header>
  );
}