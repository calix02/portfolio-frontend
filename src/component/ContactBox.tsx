import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import { FaRegEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { LuSend } from "react-icons/lu";
import type { Variants } from "framer-motion";

interface ContactBoxProps {
  onClose?: () => void;
}

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.25, ease: "easeOut" as const } },
  exit: { opacity: 0, transition: { duration: 0.2, ease: "easeIn" as const } },
};

const modalVariants: Variants = {
  hidden: { opacity: 0, scale: 0.94, y: 16 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.96,
    y: 8,
    transition: {
      duration: 0.2,
      ease: "easeIn",
    },
  },
};

const staggerChildren = {
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};

const fieldVariant = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
};

type FormState = "idle" | "sending" | "sent" | "error";

export function ContactBox({ onClose }: ContactBoxProps) {
  const [formState, setFormState] = useState<FormState>("idle");
  const [focused, setFocused] = useState<string | null>(null);
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const formRef = useRef<HTMLDivElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    if (!values.name || !values.email || !values.message) return;
    setFormState("sending");

    // Simulate network request — replace with your actual handler
    await new Promise((res) => setTimeout(res, 1600));
    setFormState("sent");
  };

  const socials = [
    {
      icon: <FaGithub className="text-base" />,
      label: "GitHub",
      href: "https://github.com/calix02",
    },
    {
      icon: <FaLinkedin className="text-base" />,
      label: "LinkedIn",
      href: "https://linkedin.com/",
    },
    {
      icon: <FaFacebook className="text-base" />,
      label: "Facebook",
      href: "https://x.com/",
    },
  ];

  const inputBase =
    "w-full bg-neutral-50 dark:bg-neutral-800/60 border text-neutral-900 dark:text-neutral-100 text-sm rounded-xl px-4 py-3 outline-none transition-all duration-200 placeholder:text-neutral-400 dark:placeholder:text-neutral-500 resize-none";
  const inputIdle =
    "border-neutral-200 dark:border-neutral-700 hover:border-neutral-300 dark:hover:border-neutral-600";
  const inputActive =
    "border-neutral-400 dark:border-neutral-500 bg-white dark:bg-neutral-800 ring-2 ring-neutral-200 dark:ring-neutral-700";

  return (
    <AnimatePresence>
      <motion.div
        key="overlay"
        variants={overlayVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={onClose}
        className="fixed inset-0 z-80 flex items-center justify-center px-4"
        style={{ backdropFilter: "blur(6px)", background: "rgba(0,0,0,0.35)" }}
      >
        {/* Modal card */}
        <motion.div
          key="modal"
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={(e) => e.stopPropagation()}
          ref={formRef}
          className="relative w-full max-w-md bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl shadow-black/20 border border-neutral-100 dark:border-neutral-800 overflow-hidden"
        >
          {/* Top accent bar */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-600 to-transparent" />

          {/* Header */}
          <div className="flex items-start justify-between px-6 pt-6 pb-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-800 dark:bg-neutral-200 animate-pulse" />
                <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-neutral-400 dark:text-neutral-500">
                  Available for work
                </span>
              </div>
              <h2 className="text-xl font-black text-neutral-900 dark:text-neutral-50 tracking-tight">
                Let's Collaborate
              </h2>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-0.5 font-normal">
                Send me a message — I typically respond within 24 hrs.
              </p>
            </div>

            <motion.button
              onClick={onClose}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="mt-0.5 w-8 h-8 flex items-center justify-center rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700 hover:text-neutral-700 dark:hover:text-neutral-200 transition-all duration-150"
              aria-label="Close contact form"
            >
              <IoClose className="text-sm" />
            </motion.button>
          </div>

          {/* Divider */}
          <div className="mx-6 h-px bg-neutral-100 dark:bg-neutral-800" />

          {/* Form / Success state */}
          <div className="px-6 py-5">
            {formState === "sent" ? (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="flex flex-col items-center justify-center py-8 gap-3 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-neutral-900 dark:bg-white flex items-center justify-center">
                  <FaRegEnvelope className="text-white dark:text-neutral-900 text-base" />
                </div>
                <p className="text-base font-semibold text-neutral-900 dark:text-neutral-100">
                  Message sent!
                </p>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 max-w-xs">
                  Thanks for reaching out. I'll get back to you as soon as
                  possible.
                </p>
                <motion.button
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => {
                    setFormState("idle");
                    setValues({ name: "", email: "", message: "" });
                  }}
                  className="mt-2 text-xs font-medium text-neutral-500 dark:text-neutral-400 underline underline-offset-2 hover:text-neutral-800 dark:hover:text-neutral-100 transition-colors"
                >
                  Send another message
                </motion.button>
              </motion.div>
            ) : (
              <motion.div
                variants={staggerChildren}
                initial="hidden"
                animate="visible"
                className="flex flex-col gap-3"
              >
                {/* Name + Email row */}
                <div className="grid grid-cols-2 gap-3">
                  <motion.div variants={fieldVariant} className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Mark Alvarado"
                      value={values.name}
                      onChange={handleChange}
                      onFocus={() => setFocused("name")}
                      onBlur={() => setFocused(null)}
                      className={`${inputBase} ${focused === "name" ? inputActive : inputIdle}`}
                    />
                  </motion.div>

                  <motion.div variants={fieldVariant} className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="you@example.com"
                      value={values.email}
                      onChange={handleChange}
                      onFocus={() => setFocused("email")}
                      onBlur={() => setFocused(null)}
                      className={`${inputBase} ${focused === "email" ? inputActive : inputIdle}`}
                    />
                  </motion.div>
                </div>

                {/* Message */}
                <motion.div variants={fieldVariant} className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Tell me about your project, idea, or just say hi..."
                    value={values.message}
                    onChange={handleChange}
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused(null)}
                    className={`${inputBase} ${focused === "message" ? inputActive : inputIdle}`}
                  />
                </motion.div>

                {/* Submit */}
                <motion.div variants={fieldVariant}>
                  <motion.button
                    onClick={handleSubmit}
                    disabled={
                      formState === "sending" ||
                      !values.name ||
                      !values.email ||
                      !values.message
                    }
                    whileHover={
                      values.name && values.email && values.message
                        ? { y: -1 }
                        : {}
                    }
                    whileTap={
                      values.name && values.email && values.message
                        ? { scale: 0.97 }
                        : {}
                    }
                    className="w-full py-3 flex items-center justify-center gap-2 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-sm font-semibold transition-all duration-200 hover:bg-neutral-700 dark:hover:bg-neutral-100 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-neutral-900 dark:disabled:hover:bg-white shadow-sm"
                  >
                    {formState === "sending" ? (
                      <>
                        <svg
                          className="animate-spin h-4 w-4"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="3"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4l-3 3-3-3h4z"
                          />
                        </svg>
                        Sending…
                      </>
                    ) : (
                      <>
                        <LuSend className="text-sm" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </motion.div>
              </motion.div>
            )}
          </div>

          {/* Footer — socials */}
          <div className="px-6 pb-5">
            <div className="flex items-center gap-3 pt-4 border-t border-neutral-100 dark:border-neutral-800">
              <span className="text-[11px] font-medium text-neutral-400 dark:text-neutral-500 uppercase tracking-wider">
                Or find me on
              </span>
              <div className="flex items-center gap-2 ml-auto">
                {socials.map(({ icon, label, href }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-8 h-8 flex items-center justify-center rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700 hover:text-neutral-900 dark:hover:text-neutral-100 transition-all duration-150"
                  >
                    {icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}