import { AboutContent } from "@/component/content-card/AboutContent";
import { HomeContent } from "@/component/content-card/HomeContent";
import DashboardHeader from "@/component/DashboardHeader";
import Sidebar from "@/component/Sidebar";

export function EditorPage() {
  return (
    <div className="w-screen bg-[#09090b] flex overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-y-auto ">
        <DashboardHeader />

        <main className=" px-10 mt-10 text-gray-300">
          <div className="flex gap-5 w-full">
            <HomeContent />
            <AboutContent />
          </div>
        </main>
      </div>
    </div>
  );
}
