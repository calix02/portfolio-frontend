import { motion } from "framer-motion";
import { CheckCircle, MessageSquareQuote, Star } from "lucide-react";

// ... (testimonials and avatarStack data remain the same)

const testimonials = [
  {
    name: "Michael Chin",
    role: "IT Director, Global Systems",
    avatar: "/assets/avatars/avatar1.png",
    quote:
      "The graphic design work for our rebrand was exceptional. MVP Visuals captured our vision and created a cohesive identity that resonates with...",
    stars: 5,
  },
  {
    name: "Sarah Johnson",
    role: "CEO, Innovate Solutions",
    avatar: "/assets/avatars/avatar2.png",
    quote:
      "Outstanding service and incredible results! MVP Visuals helped us launch our e-commerce platform with a beautiful, user-friendly design...",
    stars: 5,
  },
  {
    name: "James Wilson",
    role: "Product Manager, TechCorp",
    avatar: "/assets/avatars/avatar3.png",
    quote:
      "Working with MVP Visuals on our network infrastructure was seamless. They delivered a robust, scalable solution that has significantly...",
    stars: 5,
  },
  {
    name: "Elena Rodriguez",
    role: "Marketing Head, FlowState",
    avatar: "/assets/avatars/avatar4.png",
    quote:
      "The attention to detail and creative flair brought to our project was unmatched. Truly a partner in our digital growth.",
    stars: 4,
  },
];

const avatarStack = [
  { name: "User 1", image: "/assets/avatars/avatar1.png" },
  { name: "User 2", image: "/assets/avatars/avatar2.png" },
  { name: "User 3", image: "/assets/avatars/avatar3.png" },
  { name: "User 4", image: "/assets/avatars/avatar4.png" },
];

const MarqueeRow = ({
  items,
  direction = "left",
  speed = 40,
}: {
  items: typeof testimonials;
  direction?: "left" | "right";
  speed?: number;
}) => {
  const moveRight = direction === "right";

  return (
    <div
      className="flex overflow-hidden group relative py-4"
      /* This mask creates a smooth fade at the edges (15% in from each side).
         It makes the "container" invisible while the cards slide through it.
      */
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
      }}
    >
      <motion.div
        animate={{
          x: moveRight ? ["-50%", "0%"] : ["0%", "-50%"],
        }}
        transition={{
          duration: speed,
          ease: "linear",
          repeat: Infinity,
        }}
        className="flex gap-6 pr-6 min-w-max"
      >
        {[...items, ...items, ...items].map((testimonial, idx) => (
          <div
            key={idx}
            className="w-87.5 md:w-112.5 relative p-8 rounded-3xl border border-white/5 bg-white/2 backdrop-blur-2xl flex flex-col justify-between group/card transition-all duration-500 hover:bg-white/5 hover:border-white/10"
            style={{
              // Soft shadow to give depth to the cards themselves
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
            }}
          >
            <div className="absolute -top-6 -right-6 text-white/2 scale-[4] rotate-12 group-hover/card:rotate-0 transition-transform duration-700">
              <MessageSquareQuote size={40} />
            </div>

            <div className="mb-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-500/80 text-yellow-500/80"
                    />
                  ))}
                </div>
                <div className="p-2 rounded-lg bg-white/5 border border-white/5">
                  <MessageSquareQuote size={18} className="text-white/20" />
                </div>
              </div>
              <p className="text-neutral-400 text-sm leading-relaxed mb-8">
                "{testimonial.quote}"
              </p>
            </div>

            <div className="flex items-center gap-4 pt-6 border-t border-white/5 mt-auto">
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full border border-white/10 grayscale opacity-70 group-hover/card:grayscale-0 group-hover/card:opacity-100 transition-all duration-500"
              />
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-base font-bold text-white/90">
                    {testimonial.name}
                  </h4>
                  <CheckCircle size={14} className="text-blue-500/60" />
                </div>
                <p className="text-neutral-600 text-xs tracking-wide">
                  {testimonial.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export function TestimonialPage() {
  return (
    <motion.section
      id="testimonials"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="relative z-10 flex flex-col items-center justify-center min-h-screen w-full py-32 overflow-hidden bg-[#0a0a0a] text-white"
    >
      {/* Background Atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-125 h-125 bg-white/2 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-125 h-125 bg-zinc-900/50 rounded-full blur-[120px]" />
      </div>

      <div className="w-full relative z-10">
        <div className="text-center mb-24 px-6 space-y-6">
          <div className="flex items-center gap-3 justify-center">
            <div className="h-px w-12 bg-white/10" />
            <span className="text-[10px] font-mono tracking-[0.5em] uppercase text-yellow-600">
              Client Feedback
            </span>
            <div className="h-px w-12 bg-white/10" />
          </div>

          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">
            Kind{" "}
            <span className="text-neutral-600 italic font-serif">Words</span>
          </h2>
        </div>

        {/* Carousel Rows */}
        <div className="flex flex-col gap-4 w-full">
          <MarqueeRow items={testimonials} direction="right" speed={60} />
          <MarqueeRow items={testimonials} direction="left" speed={55} />
        </div>

        {/* Footer */}
        <div className="flex flex-col items-center gap-6 py-20 mt-12">
          <div className="flex -space-x-3 items-center opacity-50 hover:opacity-100 transition-opacity duration-500">
            {avatarStack.map((user, i) => (
              <img
                key={i}
                src={user.image}
                alt={user.name}
                className="w-10 h-10 rounded-full border-2 border-[#0a0a0a] ring-1 ring-white/5"
              />
            ))}
          </div>
          <p className="text-neutral-600 text-[10px] font-mono uppercase tracking-[0.3em]">
            Precision through collaboration
          </p>
        </div>
      </div>
    </motion.section>
  );
}
