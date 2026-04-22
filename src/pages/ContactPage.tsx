import { motion, type Variants } from "framer-motion";
import { 
  FaRegEnvelope, 
  FaGithub, 
  FaLinkedinIn, 
  FaFacebookF, 
  FaPaperPlane,
  FaLocationDot 
} from "react-icons/fa6";

interface ContactPageProps {
  containerVariants: Variants;
  revealVariant: Variants;
  textColor: string;
}

export default function ContactPage({
  containerVariants,
  revealVariant,
  textColor,
}: ContactPageProps) {
    
  return (
    <motion.section
      id="contact"
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: false, amount: 0.2 }}
      variants={containerVariants}
      className="relative z-10 min-h-screen w-full flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 lg:px-24 py-32 bg-[#0a0a0a]"
    >
      {/* --- Left Side: Information --- */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-10 text-left">
        <motion.div variants={revealVariant} className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white">
            Get In <span className="text-transparent bg-clip-text bg-linear-to-r from-gray-300 to-gray-500">Touch</span>
          </h1>
          <p className={`${textColor} max-w-md leading-relaxed text-lg text-gray-400`}>
            Elevating your digital presence through strategic design and robust technical solutions. 
            Let&apos;s discuss your next project.
          </p>
        </motion.div>

        {/* Contact Details */}
        <motion.div variants={revealVariant} className="space-y-8">
          <div className="flex items-center gap-6 group">
            <div className="p-4 rounded-full bg-zinc-900 border border-zinc-800 text-gray-300 group-hover:bg-white group-hover:text-black transition-all duration-300">
              <FaRegEnvelope size={20} />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">Send an Email</p>
              <p className="text-white font-semibold text-lg">alvaradomarkangelo28@gmail.com</p>
            </div>
          </div>

          <div className="flex items-center gap-6 group">
            <div className="p-4 rounded-full bg-zinc-900 border border-zinc-800 text-gray-300 group-hover:bg-white group-hover:text-black transition-all duration-300">
              <FaLocationDot size={20} />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">Based</p>
              <p className="text-white font-semibold text-lg">Lupi Camarines Sur </p>
            </div>
          </div>

          <div className="flex items-center gap-6 group">
            <div className="p-4 rounded-full bg-zinc-900 border border-zinc-800 text-gray-300 group-hover:bg-white group-hover:text-black transition-all duration-300">
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">Contact Number</p>
              <p className="text-white font-semibold text-lg">0920-406-8405</p>
            </div>
          </div>
        </motion.div>

        {/* Socials */}
        <motion.div variants={revealVariant} className="space-y-4">
          <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">Digital Footprint</p>
          <div className="flex gap-4">
            {[FaRegEnvelope, FaGithub, FaLinkedinIn, FaFacebookF].map((Icon, index) => (
              <motion.a
                key={index}
                href="#"
                whileHover={{ y: -5 }}
                className="w-12 h-12 flex items-center justify-center rounded-xl bg-zinc-900 border border-zinc-800 text-gray-400 hover:text-white hover:border-gray-500 transition-all"
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* --- Right Side: Contact Form --- */}
      <motion.div
        variants={revealVariant}
        className="w-full lg:max-w-3xl mt-16 lg:mt-0"
      >
        <div className="relative p-8 md:p-10 bg-zinc-900/50 backdrop-blur-xl rounded-[2.5rem] border border-zinc-800 shadow-2xl">
          <form className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-gray-500 font-black">Identity</label>
              <input 
                type="text" 
                placeholder="Your Name"
                className="w-full bg-black/40 border border-zinc-800 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-gray-500 transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-gray-500 font-black">Contact Email</label>
              <input 
                type="email" 
                placeholder="email@example.com"
                className="w-full bg-black/40 border border-zinc-800 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-gray-500 transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-gray-500 font-black">Brief / Message</label>
              <textarea 
                rows={4}
                placeholder="Tell us about your project..."
                className="w-full bg-black/40 border border-zinc-800 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-gray-500 transition-colors resize-none"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-5 bg-linear-to-r from-gray-200 to-gray-400 text-black font-bold rounded-2xl flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-gray-400/20 transition-all"
            >
              Initiate Project
              <FaPaperPlane size={14} />
            </motion.button>
          </form>
        </div>
      </motion.div>
    </motion.section>
  );
}