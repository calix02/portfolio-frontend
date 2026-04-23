import { motion, type Variants } from "framer-motion";
import {
  FaArrowRight,
  FaLock,
  FaUser,
} from "react-icons/fa6";
import Logo from "@/assets/logo.svg";
import {useNavigate} from "react-router-dom"

interface LoginPageProps {
  containerVariants: Variants;
  revealVariant: Variants;
}

export default function LoginPage({
  containerVariants,
  revealVariant,
}: LoginPageProps) {
 const formItemVariants: Variants = {
  initial: { opacity: 0, y: 20 },
  whileInView: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } 
  }
};

const navigate = useNavigate();

const handleLogIn = () => {
  navigate("/dashboard");
}

  return (
    <motion.section
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true }}
      variants={containerVariants}
      className="relative min-h-screen w-full flex items-center justify-center px-6 bg-[#050505] overflow-hidden"
    >
     

      <motion.div
        variants={revealVariant}
        className="relative z-10 w-full max-w-118"
      >
        {/* --- 2. Professional Header Area --- */}
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative inline-flex items-center justify-center p-4 rounded-3xl bg-zinc-900/50 border border-white/5 mb-6 group"
          >
            {/* Animated Ring around Logo */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border border-emerald-500/20 rounded-3xl border-dashed"
            />
            <img src={Logo} alt="Logo" className="w-10 h-10 relative z-10 brightness-125" />
          </motion.div>
          
          <h1 className="text-4xl font-light tracking-tight text-white mb-2">
            Welcome <span className="font-bold">Back</span>
          </h1>
          <p className="text-zinc-500 text-sm tracking-wide">
            Secure access to your professional dashboard
          </p>
        </div>

        {/* --- 3. Glassmorphic Login Card --- */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="bg-zinc-900/40 backdrop-blur-3xl border border-white/10 p-8 md:p-10 rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden"
        >
          {/* Subtle Card Glare */}
          <div className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_50%)] pointer-events-none" />

          <form className="space-y-6 relative z-10">
            {/* Identity Field */}
            <motion.div variants={formItemVariants} className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold ml-1">
                Identity
              </label>
              <div className="group relative">
                <FaUser className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-600 group-focus-within:text-emerald-500 transition-colors" size={14} />
                <input
                  type="email"
                  placeholder="Email or Username"
                  className="w-full bg-black/40 border border-white/5 rounded-2xl pl-12 pr-6 py-4 text-white focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20 transition-all placeholder:text-zinc-700"
                />
              </div>
            </motion.div>

            {/* Security Field */}
            <motion.div variants={formItemVariants} className="space-y-2">
              <div className="flex justify-between items-center px-1">
                <label className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold">
                  Security
                </label>
                <a href="#" className="text-[10px] uppercase tracking-widest text-zinc-400 hover:text-white transition-colors">
                  Forgot?
                </a>
              </div>
              <div className="group relative">
                <FaLock className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-600 group-focus-within:text-emerald-500 transition-colors" size={14} />
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full bg-black/40 border border-white/5 rounded-2xl pl-12 pr-6 py-4 text-white focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20 transition-all placeholder:text-zinc-700"
                />
              </div>
            </motion.div>

            {/* Main Action */}
            <motion.div variants={formItemVariants}>
              <motion.button
              onClick={handleLogIn}
                whileHover={{ scale: 1.01, translateY: -2 }}
                whileTap={{ scale: 0.99 }}
                className="w-full py-4 mt-2 bg-white text-black font-bold rounded-2xl flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-emerald-500/20 transition-all"
              >
                Sign In
                <FaArrowRight size={14} />
              </motion.button>
            </motion.div>
          </form>

          {/* --- Divider --- */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/5"></div>
            </div>
            <div className="relative flex justify-center text-[10px] uppercase tracking-[0.3em]">
              <span className="bg-[#121212]/0 px-4 text-zinc-600 font-bold backdrop-blur-md">
                Protocol
              </span>
            </div>
          </div>

        </motion.div>

      </motion.div>
    </motion.section>
  );
}