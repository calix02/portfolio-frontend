import { motion, type Variants } from "framer-motion";
import { Star, MessageSquareQuote, CheckCircle } from "lucide-react";

const testimonials = [
  {
    name: "Michael Chin",
    role: "IT Director, Global Systems",
    avatar: "/assets/avatars/avatar1.png", // Or a placeholder URL
    quote: "The graphic design work for our rebrand was exceptional. MVP Visuals captured our vision and created a cohesive identity that resonates with...",
    stars: 5,
  },
  {
    name: "Sarah Johnson",
    role: "CEO, Innovate Solutions",
    avatar: "/assets/avatars/avatar2.png",
    quote: "Outstanding service and incredible results! MVP Visuals helped us launch our e-commerce platform with a beautiful, user-friendly design...",
    stars: 5,
  },
  {
    name: "James Wilson",
    role: "Product Manager, TechCorp",
    avatar: "/assets/avatars/avatar3.png",
    quote: "Working with MVP Visuals on our network infrastructure was seamless. They delivered a robust, scalable solution that has significantly...",
    stars: 5,
  },
  // Add more from the image or your own here
];

const avatarStack = [
    { name: "User 1", image: "/assets/avatars/avatar1.png" },
    { name: "User 2", image: "/assets/avatars/avatar2.png" },
    { name: "User 3", image: "/assets/avatars/avatar3.png" },
    { name: "User 4", image: "/assets/avatars/avatar4.png" },
];

export function TestimonialPage({ containerVariants, revealVariant }: TestimonialPageProps) {
  return (
    <motion.section
      id="testimonials"
      variants={containerVariants}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true, amount: 0.1 }}
      className="relative z-10 flex flex-col items-center justify-center min-h-screen w-full px-6 md:px-20 py-32 overflow-hidden bg-[#0a0a0a] text-white"
    >
      {/* Dynamic Background Noise/Glow */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-white rounded-full blur-[200px]" />
        <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-linear-to-b from-gray-200 to-black bg-clip-text text-transparent rounded-full blur-[180px]" />
      </div>

      <div className="max-w-7xl w-full relative z-10">
        {/* Header Section */}
        <div className="text-center mb-24 space-y-6">
          <motion.div variants={revealVariant} className="flex items-center gap-3 justify-center">
             <div className="h-[1px] w-12 bg-white/20" />
             <span className="text-xs font-mono tracking-[0.4em] uppercase text-yellow-500">Feedback Loops</span>
             <div className="h-[1px] w-12 bg-white/20" />
          </motion.div>
          
          <motion.h2
            variants={revealVariant}
            className="text-5xl md:text-7xl font-black tracking-tighter leading-tight"
          >
            Client <span className="bg-linear-to-b from-gray-200 to-black bg-clip-text text-transparent">Voices</span>
          </motion.h2>
          
          <motion.p
             variants={revealVariant}
             className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed"
          >
            Discover how we've helped forward-thinking companies achieve their digital potential through innovation and design.
          </motion.p>
        </div>

        {/* The Testimonial Grid (Infinite Scroll Look) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {testimonials.concat(testimonials).map((testimonial, idx) => ( // Duplicate for infinite scroll feel on small screens
            <motion.div
              key={idx}
              variants={revealVariant}
              whileHover={{ y: -5, borderColor: "rgba(255, 255, 255, 0.2)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl flex flex-col justify-between group overflow-hidden"
            >
              {/* Ghost Quote Icon */}
              <div className="absolute -top-6 -right-6 text-white/[0.03] scale-[4] rotate-12 group-hover:rotate-0 transition-transform duration-700">
                   <MessageSquareQuote size={40} />
              </div>

              <div className="mb-8">
                {/* Stars and ID Icon */}
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-1">
                        {[...Array(testimonial.stars)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                        ))}
                    </div>
                    <div className="p-2 rounded-lg bg-black/40 border border-white/10">
                        <MessageSquareQuote size={18} className="text-white/40" />
                    </div>
                </div>

                <p className="text-neutral-300 text-sm leading-relaxed mb-8">
                    {testimonial.quote}
                </p>
              </div>

              {/* Author Section */}
              <div className="flex items-center gap-4 pt-6 border-t border-white/5 mt-auto">
                <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full border border-white/10" />
                <div>
                    <div className="flex items-center gap-2">
                        <h4 className="text-base font-bold text-white">{testimonial.name}</h4>
                        <CheckCircle size={14} className="text-blue-500" />
                    </div>
                    <p className="text-neutral-500 text-xs">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* The Joined Avatar Stack Footer */}
        <motion.div variants={revealVariant} className="flex flex-col items-center gap-6 py-12 border-t border-white/5">
            <div className="flex -space-x-3 items-center">
                {avatarStack.map((user, i) => (
                    <img key={i} src={user.image} alt={user.name} className="w-10 h-10 rounded-full border-2 border-[#0a0a0a] ring-1 ring-white/10" />
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-[#0a0a0a] ring-1 ring-white/10 bg-white/10 flex items-center justify-center text-xs font-mono font-bold text-yellow-500">
                    50+
                </div>
            </div>
            <p className="text-neutral-500 text-[10px] font-mono uppercase tracking-widest">Joined by 50+ Industry Leaders</p>
        </motion.div>
      </div>
    </motion.section>
  );
}