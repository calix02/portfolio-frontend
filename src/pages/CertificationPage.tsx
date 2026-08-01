import CircularGallery from "@/component/CircularGallery";
import Gallery from "@/component/Gallery";
import { GrAchievement } from "react-icons/gr";

export default function CertificationPage() {
  return (
    <section 
      id="certifications" 
      className="relative w-full min-h-screen bg-slate-50 flex flex-col items-center justify-center py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Decorative Background Glows */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primaryColor/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-slate-200/50 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Subtitle / Category Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-200/60 border border-slate-300/50 text-xs font-semibold text-slate-700 uppercase tracking-wider mb-4 shadow-xs">
          <GrAchievement className="text-primaryColor text-sm" />
          <span>Milestones & Recognition</span>
        </div>

        {/* Main Section Header */}
        <h2 className="poppins-bold text-3xl sm:text-4xl md:text-5xl text-center mb-4 tracking-tight">
          <span className="bg-linear-to-r from-primaryColor to-slate-900 bg-clip-text text-transparent">
            Achievements & Certifications
          </span>
        </h2>

        {/* Descriptive Subtext */}
        <p className="text-slate-600 text-center text-sm sm:text-base max-w-xl mb-12 poppins-regular">
          A showcase of my professional credentials, completed courses, and notable milestones.
        </p>

        {/* Gallery Container */}
        <div className="w-full lg:block md:block hidden">
          <Gallery />
        </div>
        <div className="w-full lg:hidden md:hidden block">
          <CircularGallery />
        </div>

      </div>
    </section>
  );
}