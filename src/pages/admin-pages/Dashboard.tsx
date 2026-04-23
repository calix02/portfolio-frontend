import BorderGlow from "@/component/BorderGlow";
import DashboardHeader from "@/component/DashboardHeader";
import Sidebar from "@/component/Sidebar";
import { useState } from "react";
import { IoCloudUploadOutline, IoHome } from "react-icons/io5";

export function Dashboard() {
    const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };
  return (
    <div className="w-screen bg-[#09090b] flex overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-y-auto ">
        <DashboardHeader />

        <main className="grid grid-cols-3 gap-5 px-10 mt-10">
         <BorderGlow
      className="w-full h-auto min-h-[600px] pb-10"
      edgeSensitivity={30}
      glowColor={"16 185 129"}
      backgroundColor="#120F17"
      borderRadius={28}
      glowRadius={50}
      glowIntensity={0.8}
      animated={true}
      colors={["#10b981", "#3b82f6", "#06b6d4"]}
    >
      {/* --- Header --- */}
      <div className="flex items-center gap-3 text-gray-200 p-8">
        <div className="p-3 bg-emerald-500/10 rounded-2xl">
          <IoHome className="text-emerald-500 text-3xl" />
        </div>
        <h1 className="font-black text-xl tracking-tight">Home Content Editor</h1>
      </div>

      {/* --- Form --- */}
      <form action="" className="px-10 space-y-6">
        
        {/* Floating Label Input Group */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FloatingInput label="Role" name="role" type="text" />
          <div className="relative group">
            <input
              type="text"
              name="nickname"
              id="nickname"
              placeholder=" "
              className="peer h-14 w-full rounded-2xl border border-white/10 bg-white/5 px-5 pt-4 text-white outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20 transition-all"
            />
            <label
              htmlFor="nickname"
              className="absolute left-5 top-4 origin-[0] -translate-y-4 scale-75 transform text-sm text-emerald-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-400 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-emerald-500"
            >
              Nickname
            </label>
          </div>
        </div>

        <FloatingInput label="Quote" name="quote" type="text" />

        <div className="relative group">
          <textarea
            name="description"
            id="description"
            placeholder=" "
            rows={4}
            className="peer w-full rounded-2xl border border-white/10 bg-white/5 px-5 pt-6 text-white outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20 transition-all resize-none"
          />
          <label
            htmlFor="description"
            className="absolute left-5 top-4 origin-[0] -translate-y-4 scale-75 transform text-sm text-emerald-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-400 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-emerald-500"
          >
            Description
          </label>
        </div>

        {/* --- Picture Uploader --- */}
        <div className="space-y-3">
          <label className="text-[10px] uppercase tracking-[0.2em] font-black text-zinc-500 ml-2">Profile Banner / Picture</label>
          <div className="flex gap-5 items-center">
            <label className="flex flex-1 flex-col items-center justify-center h-32 rounded-2xl border-2 border-dashed border-white/10 bg-white/5 hover:bg-white/[0.07] hover:border-emerald-500/50 cursor-pointer transition-all group">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <IoCloudUploadOutline className="text-3xl text-zinc-500 group-hover:text-emerald-500 transition-colors mb-2" />
                <p className="text-xs text-zinc-400 group-hover:text-zinc-200 transition-colors">Click to upload image</p>
              </div>
              <input type="file" className="hidden" onChange={handleImageChange} accept="image/*" />
            </label>

            {imagePreview && (
              <div className="w-32 h-32 rounded-2xl border border-white/10 overflow-hidden relative group">
                <img src={imagePreview} className="w-full h-full object-cover" alt="Preview" />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-[10px] font-bold">PREVIEW</div>
              </div>
            )}
          </div>
        </div>

        {/* --- Action --- */}
        <div className="pt-4 pb-4">
          <button className="w-full h-14 bg-emerald-600 hover:bg-emerald-500 text-black font-black uppercase tracking-widest text-xs rounded-2xl transition-all shadow-[0_0_20px_rgba(16,185,129,0.2)]">
            Save Home Content
          </button>
        </div>
      </form>
    </BorderGlow>
          <BorderGlow
            className="h-44 w-full"
            edgeSensitivity={30}
            glowColor={"16 185 129"}
            backgroundColor="#120F17"
            borderRadius={28}
            glowRadius={50}
            glowIntensity={0.8}
            animated={true}
            colors={["#10b981", "#3b82f6", "#06b6d4"]}
          >
            
          </BorderGlow>
          <BorderGlow
            className="h-44 w-full"
            edgeSensitivity={30}
            glowColor={"16 185 129"}
            backgroundColor="#120F17"
            borderRadius={28}
            glowRadius={50}
            glowIntensity={0.8}
            animated={true}
            colors={["#10b981", "#3b82f6", "#06b6d4"]}
          ></BorderGlow>
        </main>
      </div>
    </div>
  );
}
// Reusable Floating Component for better code quality
function FloatingInput({ label, name, type }: { label: string; name: string; type: string }) {
  return (
    <div className="relative group">
      <input
        type={type}
        name={name}
        id={name}
        placeholder=" " // CRITICAL: Space is required for peer-placeholder-shown to work
        className="peer h-14 w-full rounded-2xl border border-white/10 bg-white/5 px-5 pt-4 text-white outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20 transition-all"
      />
      <label
        htmlFor={name}
        className="absolute left-5 top-4 origin-[0] -translate-y-4 scale-75 transform text-sm text-emerald-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-400 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-emerald-500"
      >
        {label}
      </label>
    </div>
  );
}
