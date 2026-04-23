import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
 
  FaHouse, 
  FaCode, 
  FaFolderOpen, 
  FaChevronRight 
} from "react-icons/fa6";
import { MdOutlineDashboard } from "react-icons/md";
import Logo from "@/assets/logo.svg";

// Define the menu items
const menuItems = [
  { id: "dashboard", label: "Dashboard", icon: <MdOutlineDashboard/> },
  { id: "home", label: "Home", icon: <FaHouse /> },
  { id: "skills", label: "Skills", icon: <FaCode /> },
  { id: "projects", label: "Projects", icon: <FaFolderOpen /> },
];

export default function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <motion.aside
      initial={false}
      animate={{ width: isExpanded ? "260px" : "80px" }}
      className=" h-screen bg-[#050505] border-r border-white/5 flex flex-col z-50 transition-all ease-[cubic-bezier(0.175,0.885,0.32,1.275)]"
    >
      {/* 1. Header / Toggle Section */}
      <div className="h-20 flex items-center px-6 mb-8 relative">
        <div className="flex items-center gap-4 overflow-hidden">
          <div className="w-10 h-10  rounded-lg flex items-center justify-center  font-black text-black text-sm ">
            <img src={Logo} className="h-20" alt="" />
          </div>
          <AnimatePresence>
            {isExpanded && (
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="font-bold tracking-tight text-white whitespace-nowrap"
              >
                Control Center
              </motion.span>
            )}
          </AnimatePresence>
        </div>

        {/* Toggle Button */}
        <motion.button
          onClick={() => setIsExpanded(!isExpanded)}
          animate={{ rotate: isExpanded ? 180 : 0 }}
          className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-zinc-900 border border-white/10 rounded-full flex items-center justify-center text-[10px] text-zinc-400 hover:text-white hover:border-white/30 transition-colors z-50"
        >
          <FaChevronRight />
        </motion.button>
      </div>

      {/* 2. Navigation Items */}
      <nav className="flex-1 px-3 space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`
              relative w-full flex items-center group rounded-xl transition-all duration-300
              ${isExpanded ? "px-4 py-3" : "justify-center py-4"}
              ${activeTab === item.id ? "text-white" : "text-zinc-500 hover:text-zinc-300"}
            `}
          >
            {/* Active Highlight Background */}
            {activeTab === item.id && (
              <motion.div
                layoutId="active-pill"
                className="absolute inset-0 bg-white/5 border border-white/5 rounded-xl z-0"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}

            {/* Icon */}
            <div className={`relative z-10 text-lg transition-transform duration-300 ${activeTab === item.id ? "scale-110" : "group-hover:scale-110"}`}>
              {item.icon}
            </div>

            {/* Label */}
            <AnimatePresence>
              {isExpanded && (
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="ml-4 font-medium text-sm whitespace-nowrap relative z-10"
                >
                  {item.label}
                </motion.span>
              )}
            </AnimatePresence>

            {/* Tooltip (only when collapsed) */}
            {!isExpanded && (
              <div className="absolute left-16 px-2 py-1 bg-zinc-900 border border-white/10 rounded-md text-[10px] text-white opacity-0 group-hover:opacity-100 -translate-x-2.5 group-hover:translate-x-0 transition-all pointer-events-none whitespace-nowrap z-50">
                {item.label}
              </div>
            )}
          </button>
        ))}
      </nav>

      {/* 3. Footer / User Section */}
      <div className="p-4 mt-auto border-t border-white/5 bg-white/2">
        <div className={`flex items-center ${isExpanded ? "px-2" : "justify-center"}`}>
          <div className="w-8 h-8 rounded-full bg-zinc-800 border border-white/10 overflow-hidden shrink-0 shadow-[0_0_10px_rgba(0,0,0,0.5)]">
            <img 
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Mark" 
              alt="Avatar" 
              className="w-full h-full object-cover"
            />
          </div>
          {isExpanded && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="ml-3 overflow-hidden"
            >
              <p className="text-xs font-bold text-white truncate">Mark Alvarado</p>
              <p className="text-[10px] text-zinc-500 truncate uppercase tracking-tighter">Pro Developer</p>
            </motion.div>
          )}
        </div>
      </div>

      {/* HUD Decorative Accent */}
      <div className="absolute top-0 right-0 w-px h-full bg-linear-to-b from-transparent via-emerald-500/20 to-transparent" />
    </motion.aside>
  );
}