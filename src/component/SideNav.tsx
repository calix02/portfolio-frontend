import Logo from "@/assets/logo.svg";
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

  return (
    <div
    
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
    </div>
  );
}
