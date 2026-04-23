import { motion, type Variants } from "framer-motion";
import {
  FaArrowRight,
  FaGithub,
  FaGoogle,
  FaLock,
  FaUser,
} from "react-icons/fa6";

interface LoginPageProps {
  containerVariants: Variants;
  revealVariant: Variants;
}

export default function LoginPage({
  containerVariants,
  revealVariant,
}: LoginPageProps) {
  return (
    <motion.section
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true }}
      variants={containerVariants}
      className="relative min-h-screen w-full flex items-center justify-center px-6 bg-[#0a0a0a] overflow-hidden"
    >
      {/* --- Background Decorative Elements --- */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-zinc-900/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-zinc-800/10 blur-[120px] rounded-full" />

      <motion.div
        variants={revealVariant}
        className="relative z-10 w-full max-w-[450px]"
      >
        {/* --- Header / Logo Area --- */}
        <div className="text-center mb-10">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="inline-block p-4 rounded-2xl bg-zinc-900 border border-zinc-800 mb-6"
          >
            <div className="w-10 h-10 flex items-center justify-center font-black text-white text-2xl tracking-tighter">
              MV
            </div>
          </motion.div>
          <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
          <p className="text-zinc-500 text-sm">
            Enter your credentials to access your account.
          </p>
        </div>

        {/* --- Login Card --- */}
        <div className="bg-zinc-900/40 backdrop-blur-2xl border border-zinc-800/50 p-8 md:p-10 rounded-[2.5rem] shadow-2xl">
          <form className="space-y-5">
            {/* Email Field */}
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-black ml-1">
                Identity
              </label>
              <div className="relative">
                <FaUser
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-600"
                  size={14}
                />
                <input
                  type="email"
                  placeholder="Email or Username"
                  className="w-full bg-black/40 border border-zinc-800 rounded-2xl pl-12 pr-6 py-4 text-white focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500 transition-all"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <div className="flex justify-between items-center px-1">
                <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-black">
                  Security
                </label>
                <a
                  href="#"
                  className="text-[10px] uppercase tracking-widest text-zinc-400 hover:text-white transition-colors"
                >
                  Forgot?
                </a>
              </div>
              <div className="relative">
                <FaLock
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-600"
                  size={14}
                />
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full bg-black/40 border border-zinc-800 rounded-2xl pl-12 pr-6 py-4 text-white focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500 transition-all"
                />
              </div>
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 mt-4 bg-gradient-to-r from-gray-200 to-gray-400 text-black font-bold rounded-2xl flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:shadow-gray-400/20 transition-all"
            >
              Sign In
              <FaArrowRight size={14} />
            </motion.button>
          </form>

          {/* --- Divider --- */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-zinc-800"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase tracking-widest">
              <span className="bg-[#121212] px-4 text-zinc-600 font-bold">
                Or continue with
              </span>
            </div>
          </div>

          {/* --- Social Login --- */}
          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-3 py-3.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all text-sm font-medium">
              <FaGoogle /> Google
            </button>
            <button className="flex items-center justify-center gap-3 py-3.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all text-sm font-medium">
              <FaGithub /> GitHub
            </button>
          </div>
        </div>

        {/* --- Footer Link --- */}
        <p className="text-center mt-8 text-zinc-500 text-sm">
          Don&apos;t have an account?{" "}
          <a
            href="#"
            className="text-white font-semibold hover:underline underline-offset-4"
          >
            Create Account
          </a>
        </p>
      </motion.div>
    </motion.section>
  );
}
