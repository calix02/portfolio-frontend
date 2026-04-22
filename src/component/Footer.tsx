import { AnimatePresence, motion, type Variants } from "framer-motion";
import Logo from "@/assets/logo.svg";
import { 
  FaGithub, 
  FaLinkedinIn, 
  FaFacebookF, 
  FaInstagram,
  FaRegEnvelope,
  FaArrowUp
} from "react-icons/fa6";
import { useEffect, useState } from "react";

interface FooterProps {
  revealVariant: Variants;
}

export default function Footer({ revealVariant }: FooterProps) {
  // Use current year for copyright
  const currentYear = new Date().getFullYear();
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <footer className="relative z-10 w-full px-6 md:px-12 lg:px-24 pt-12 pb-6 bg-[#0a0a0a] border-t border-zinc-800">
      {/* Background Watermark Text from Image (MVP VISUALS) */}
      <div className="absolute inset-0 z-0 overflow-hidden select-none pointer-events-none opacity-[0.03]">
        <span className="absolute left-[-5%] top-[10%] text-[25vw] font-black leading-none text-white whitespace-nowrap">
          MARK ALVARADO
        </span>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-gray-400">
        
        {/* Column 1: Logo, Description, and Socials */}
        <motion.div variants={revealVariant} className="space-y-6">
          <div className="flex items-center gap-2">
            <img src={Logo} className="h-20" alt="" />
            <h2 className="text-2xl font-bold text-white tracking-tight">
                MARK ALVARADO
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-zinc-500">
            Where Design, Art, and Technology Connect. We build digital products that leave a lasting impression.
          </p>
          <div className="flex gap-4">
            {[FaGithub, FaLinkedinIn, FaFacebookF, FaInstagram].map((Icon, index) => (
              <motion.a
                key={index}
                href="#"
                whileHover={{ y: -3 }}
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-600 hover:text-white hover:border-zinc-700 transition-all"
              >
                <Icon size={16} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Column 2: Navigation */}
        <motion.div variants={revealVariant} className="space-y-6">
          <h4 className="text-sm font-bold tracking-[0.2em] text-white uppercase relative inline-block">
            NAVIGATION
            <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gray-500 rounded-full"></span>
          </h4>
          <ul className="space-y-3 text-sm">
            {['Home', 'About', 'Skills', 'Projects', 'Testimonial', 'Contact'].map(link => (
              <li key={link}>
                <a href="#" className="hover:text-white transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Column 3: Our Expertise */}
        <motion.div variants={revealVariant} className="space-y-6">
          <h4 className="text-sm font-bold tracking-[0.2em] text-white uppercase relative inline-block">
            OUR EXPERTISE
            <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gray-500 rounded-full"></span>
          </h4>
          <ul className="space-y-3 text-sm">
            {[
              'Modern UI/UX Design',
              'Modern Web Experiences',
              'Brand Identity Design',
              'Full-stack Development',
              'Creative Technology'
            ].map(expertise => (
              <li key={expertise} className="flex items-center gap-2">
                <span className="text-zinc-700">•</span>
                <span>{expertise}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Column 4: Let's Connect */}
        <motion.div variants={revealVariant} className="space-y-6">
          <h4 className="text-sm font-bold tracking-[0.2em] text-white uppercase relative inline-block">
            LET'S CONNECT
            <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gray-500 rounded-full"></span>
          </h4>
          <p className="max-w-xs text-sm leading-relaxed text-zinc-500">
            Got a project? Drop us a line and let's create something extraordinary together.
          </p>
          
          {/* Contact Card (Silver Gray Theme) */}
          <div className="flex items-center gap-5 p-5 bg-zinc-900 rounded-2xl border border-zinc-800 transition-colors hover:border-gray-700">
            <div className="p-3.5 rounded-xl bg-zinc-800 border border-zinc-700 text-gray-400">
              <FaRegEnvelope size={18} />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-500 font-bold">Contact Us</p>
              <p className="text-white font-semibold text-sm truncate max-w-37.5">
                mcvincentparedes...
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* --- Bottom Footer Row --- */}
      <motion.div variants={revealVariant} className="relative z-10 mt-16 pt-6 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-zinc-600">
        <p>
          &copy; {currentYear} <span className="font-semibold text-zinc-400">MVP VISUALS</span> Designed with ♥ by me.
        </p>
        <div className="flex items-center gap-6 uppercase tracking-[0.2em] font-medium">
          {['Privacy', 'Terms', 'Cookie Policy'].map(item => (
            <a key={item} href="#" className="hover:text-white transition-colors">
              {item}
            </a>
          ))}
        </div>
      </motion.div>

      {/* --- Right Side Floating Elements from Image --- */}
     <div className="fixed bottom-10 right-10 z-50 flex flex-col items-center gap-4">
        {/* Scroll To Top Button */}
        <AnimatePresence>
          {isVisible && (
            <motion.button
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.5, y: 20 }}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-zinc-800 border border-zinc-700 text-white shadow-xl hover:bg-zinc-700 transition-colors cursor-pointer"
            >
              <FaArrowUp size={16} />
            </motion.button>
          )}
        </AnimatePresence>

        {/* Avatar Bubble */}
        <div className="relative w-14 h-14 rounded-full p-0.5 bg-linear-to-r from-gray-200 to-gray-400 shadow-2xl">
          <div className="w-full h-full rounded-full bg-[#0a0a0a] border border-zinc-900 flex items-center justify-center overflow-hidden">
            <div className="font-bold text-white text-xl">M</div>
          </div>
          <span className="absolute top-1 right-1 w-3 h-3 bg-emerald-500 rounded-full border-2 border-zinc-900"></span>
        </div>
      </div>
    </footer>
  );
}