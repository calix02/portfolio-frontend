import Logo from "@/assets/logo.svg";
import {  motion } from "framer-motion";
type SideNavProps = {
  isDark: boolean;
};
export function SideNav({ isDark }: SideNavProps) {
  const navItems = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Graphics",
    "Testimonials",
    "Contact",
  ];

  const fadeIn = {
    hidden: {
        opacity: 0,
        x:-50,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition : {
            duration: 0.5,
            ease: [0.12, 1, 0.3, 1] as const,
        }
    }
  }

  return (
    <motion.div
    variants={fadeIn}
    initial="hidden"
    whileInView="visible"
    exit="hidden"

      className={`w-50 h-screen ${isDark ? "background-dark2 text-white" : "background-light text-[#050505]"}`}
    >
      <div className="w-full flex flex-col gap-2 py-10 items-center justify-center">
        <img src={Logo} className="w-10" alt="" />
        <h1 className="font-semibold text-lg">Mark Alvarado</h1>
      </div>
      <nav  className=" flex flex-col items-start px-10  justify-center mt-10 gap-6">
        {navItems.map((item) =>(

            <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-sm font-medium hover:text-gray-500 transition-colors"
          >
            {item}
          </a>
        ))}

      </nav>
    </motion.div>
  );
}
