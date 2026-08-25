import { Link } from "react-router-dom";
import { ArrowLeft, Home, Search, ShieldAlert } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative min-h-screen w-full background-dark flex flex-col items-center justify-center p-6 text-slate-100 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-primaryColor/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative z-10 max-w-xl w-full text-center flex flex-col items-center">
        {/* Status Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-xs font-semibold text-slate-400 uppercase tracking-widest mb-8 shadow-inner">
          <ShieldAlert className="w-4 h-4 text-amber-500" />
          <span>Error 404 — Page Not Found</span>
        </div>

        {/* Big Glitch 404 Header */}
        <h1 className="poppins-bold text-7xl sm:text-9xl font-extrabold tracking-tighter bg-linear-to-b from-white via-slate-200 to-slate-600 bg-clip-text text-transparent mb-4 drop-shadow-sm">
          404
        </h1>

        {/* Message */}
        <h2 className="text-xl sm:text-2xl font-bold text-slate-200 mb-3">
          Looks like you've ventured into uncharted space.
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-md mb-8 leading-relaxed">
          The page or credential you're searching for doesn't exist, has been
          moved, or is temporarily unavailable.
        </p>

        {/* Optional Search Bar */}
        <div className="relative w-full max-w-sm mb-8">
          <input
            type="text"
            placeholder="Search site content..."
            className="w-full bg-slate-900/90 border border-slate-800 focus:border-primaryColor/80 rounded-xl py-3 pl-11 pr-4 text-sm text-slate-200 placeholder-slate-500 outline-hidden transition-all duration-200 shadow-lg focus:ring-2 focus:ring-primaryColor/20"
          />
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-100 hover:bg-white text-slate-950 font-semibold text-sm transition-all duration-200 shadow-md hover:shadow-slate-100/10 active:scale-[0.98]"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Link>

          <Link
            to="/certifications"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white font-semibold text-sm transition-all duration-200 active:scale-[0.98]"
          >
            <ArrowLeft className="w-4 h-4" />
            View Certifications
          </Link>
        </div>
      </div>

      {/* Footer Info */}
      <p className="absolute bottom-6 text-xs text-slate-600 tracking-wide">
        System Status: <span className="text-emerald-500">All Operational</span>
      </p>
    </main>
  );
}
