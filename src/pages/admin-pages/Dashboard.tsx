import BorderGlow from "@/component/BorderGlow";
import DashboardHeader from "@/component/DashboardHeader";
import Sidebar from "@/component/Sidebar";

export function Dashboard(){
    return(
        <div className="w-screen h-screen background-dark2 flex">
        <Sidebar/>
            <div className="w-full">
            <DashboardHeader/>
            <div className="mt-10 grid-cols-4 gap-3">
                <BorderGlow/>
                <BorderGlow/>
                <BorderGlow/>
                <BorderGlow/>
            </div>


            </div>


        </div>
    );

}