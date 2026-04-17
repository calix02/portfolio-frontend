
import Me from "@/assets/me.svg"
import {motion, type Variants} from  "framer-motion";
interface HomePageProps {
  containerVariants: Variants;
  revealVariant: Variants;
}

export default function HomePage({ containerVariants, revealVariant }: HomePageProps) {
 

  return (
     <motion.section
        id="home"
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: false, amount: 0.2 }}
        variants={containerVariants}
        className="relative z-10 min-h-screen w-full flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 lg:px-24 pt-32 lg:pt-0"
      >
        <div className="w-full lg:w-3/5 flex flex-col justify-center space-y-6 text-center lg:text-left">
          <motion.div variants={revealVariant} className="space-y-2">
            <p className="text-gray-400 font-medium tracking-[0.4em] uppercase text-[10px] md:text-xs">
              Creative Developer & Designer
            </p>
            <h1 className="bg-linear-to-b from-gray-200 to-black bg-clip-text text-transparent text-5xl md:text-7xl font-bold  leading-[1.1]">
              From concept to deployment <br />
              <span className="italic font-light text-gray-400">I build it all.</span>
            </h1>
          </motion.div>

          <motion.p variants={revealVariant} className="text-gray-600 max-w-lg mx-auto lg:mx-0 leading-relaxed text-lg border-l-0 lg:border-l-2 border-black/10 lg:pl-6">
            Crafting high-performance web applications and IoT solutions with a focus on{" "}
            <span className="text-black font-semibold underline underline-offset-4 decoration-black/10">clean aesthetics</span> and{" "}
            <span className="text-black font-semibold underline underline-offset-4 decoration-black/10">seamless user experience.</span>
          </motion.p>

          <motion.div variants={revealVariant} className="flex flex-wrap justify-center lg:justify-start gap-6 pt-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-black text-white font-bold rounded-full hover:shadow-2xl hover:shadow-black/20 transition-all duration-300"
            >
              View Projects
            </motion.button>
            <motion.button 
              whileHover={{ backgroundColor: "rgba(0,0,0,0.05)" }}
              className="px-10 py-4 border border-black/10 rounded-full font-medium transition-colors duration-300"
            >
              Contact Me
            </motion.button>
          </motion.div>
        </div>

        {/* --- Professional Image Section --- */}
        <motion.div 
          variants={revealVariant}
          className="w-full lg:w-2/5 flex justify-center lg:justify-end mt-16 lg:mt-0"
        >
          <div className="relative group">
            {/* Design Element: Abstract Circle behind image */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-10 border border-dashed border-black/10 rounded-full pointer-events-none" 
            />
            
            {/* The Image Wrapper */}
            <div className="relative z-10 p-4 bg-white shadow-2xl rounded-2xl border border-black/3">
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="overflow-hidden rounded-xl bg-gray-50"
              >
                <img
                  src={Me}
                  className="h-80 md:h-110 lg:h-130 w-auto object-cover  transition-all duration-700 ease-in-out"
                  alt="Professional Portrait"
                />
              </motion.div>
              
              {/* Creative Tag */}
              <div className="absolute -bottom-4 -right-4 bg-black text-white px-4 py-2 rounded-lg shadow-xl text-xs font-bold tracking-widest uppercase rotate-3">
                Mark Alvarado
              </div>
            </div>
          </div>
        </motion.div>
      </motion.section>
  );
}
