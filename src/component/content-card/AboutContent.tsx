import { FaBookOpen, FaDownload } from "react-icons/fa6";
import { IoHome } from "react-icons/io5";
import { MdOutlineDescription } from "react-icons/md";
import BorderGlow from "../BorderGlow";

export function AboutContent() {
  return (
    <BorderGlow
      className="w-full  pb-10 px-10 pt-5"
      edgeSensitivity={30}
      glowColor={"16 185 129"}
      backgroundColor="#120F17"
      borderRadius={28}
      glowRadius={50}
      glowIntensity={0.8}
      animated={true}
      colors={["#10b981", "#3b82f6", "#06b6d4"]}
    >
      <div className="flex items-center gap-2">
        <IoHome />
        <h1 className="font-medium tracking-widest">About Content</h1>
      </div>
      <form action="flex flex-col gap-4 mt-6">
        <div className="relative mt-5 w-full  flex gap-5">
          <div className="relative w-full mt-5">
            <FaBookOpen className="absolute top-1/2 -translate-y-1/2 left-2" />
            <input
              type="text"
              name="email"
              className="peer border-b border-gray-200 px-8 py-3 focus:outline-none focus:ring-0 focus:border-emerald-500 w-full"
              placeholder=""
              required
            />
            <label
              className="absolute left-8 top-1/2 -translate-y-1/2 text-gray-500
               transition-all duration-200 font-medium
               peer-focus:top-1 peer-valid:top-1 peer-valid:text-sm peer-focus:text-sm peer-focus:text-gray-600
                "
            >
              Position
            </label>
          </div>
          <div className="relative w-full mt-5">
            <FaBookOpen className="absolute top-1/2 -translate-y-1/2 left-2" />
            <input
              type="text"
              name="email"
              className="peer border-b border-gray-200 px-8 py-3 focus:outline-none focus:ring-0 focus:border-emerald-500 w-full"
              placeholder=""
              required
            />
            <label
              className="absolute left-8 top-1/2 -translate-y-1/2 text-gray-500
               transition-all duration-200 font-medium
               peer-focus:top-1 peer-valid:top-1 peer-valid:text-sm peer-focus:text-sm peer-focus:text-gray-600
                "
            >
              Full Name
            </label>
          </div>
        </div>
        <div className="flex items-center gap-2 mt-8">
          <IoHome />
          <h1 className="font-medium tracking-widest ">Experience</h1>
        </div>
        <div className="relative mt-5 w-full  flex gap-5">
          <div className="relative w-full mt-5">
            <FaBookOpen className="absolute top-1/2 -translate-y-1/2 left-2" />
            <input
              type="text"
              name="email"
              className="peer border-b border-gray-200 px-8 py-3 focus:outline-none focus:ring-0 focus:border-emerald-500 w-full"
              placeholder=""
              required
            />
            <label
              className="absolute left-8 top-1/2 -translate-y-1/2 text-gray-500
               transition-all duration-200 font-medium
               peer-focus:top-1 peer-valid:top-1 peer-valid:text-sm peer-focus:text-sm peer-focus:text-gray-600
                "
            >
              Position
            </label>
          </div>
          <div className="relative w-full mt-5">
            <FaBookOpen className="absolute top-1/2 -translate-y-1/2 left-2" />
            <input
              type="text"
              name="email"
              className="peer border-b border-gray-200 px-8 py-3 focus:outline-none focus:ring-0 focus:border-emerald-500 w-full"
              placeholder=""
              required
            />
            <label
              className="absolute left-8 top-1/2 -translate-y-1/2 text-gray-500
               transition-all duration-200 font-medium
               peer-focus:top-1 peer-valid:top-1 peer-valid:text-sm peer-focus:text-sm peer-focus:text-gray-600
                "
            >
              Company
            </label>
          </div>
        </div>
        <div className="relative mt-5">
          <MdOutlineDescription className="absolute top-1/2 -translate-y-1/2 left-2" />
          <input
            type="text"
            name="email"
            className="peer border-b border-gray-200 px-8 py-3 focus:outline-none focus:ring-0 focus:border-emerald-500 w-full"
            placeholder=""
            required
          />
          <label
            className="absolute left-8 top-1/2 -translate-y-1/2 text-gray-500
               transition-all duration-200 font-medium
               peer-focus:top-1 peer-valid:top-1 peer-valid:text-sm peer-focus:text-sm peer-focus:text-gray-600
                "
          >
            Accomplishment
          </label>
        </div>
        <div className="relative mt-5 w-full  flex gap-5">
          <div className="relative w-full mt-5">
            <FaBookOpen className="absolute top-1/2 -translate-y-1/2 left-2" />
            <input
              type="text"
              name="email"
              className="peer border-b border-gray-200 px-8 py-3 focus:outline-none focus:ring-0 focus:border-emerald-500 w-full"
              placeholder=""
              required
            />
            <label
              className="absolute left-8 top-1/2 -translate-y-1/2 text-gray-500
               transition-all duration-200 font-medium
               peer-focus:top-1 peer-valid:top-1 peer-valid:text-sm peer-focus:text-sm peer-focus:text-gray-600
                "
            >
              From
            </label>
          </div>
          <div className="relative w-full mt-5">
            <FaBookOpen className="absolute top-1/2 -translate-y-1/2 left-2" />
            <input
              type="text"
              name="email"
              className="peer border-b border-gray-200 px-8 py-3 focus:outline-none focus:ring-0 focus:border-emerald-500 w-full"
              placeholder=""
              required
            />
            <label
              className="absolute left-8 top-1/2 -translate-y-1/2 text-gray-500
               transition-all duration-200 font-medium
               peer-focus:top-1 peer-valid:top-1 peer-valid:text-sm peer-focus:text-sm peer-focus:text-gray-600
                "
            >
              To
            </label>
          </div>
        </div>
        <div className="relative mt-5">
          <MdOutlineDescription className="absolute top-1/2 -translate-y-1/2 left-2" />
          <input
            type="text"
            name="email"
            className="peer border-b border-gray-200 px-8 py-3 focus:outline-none focus:ring-0 focus:border-emerald-500 w-full"
            placeholder=""
            required
          />
          <label
            className="absolute left-8 top-1/2 -translate-y-1/2 text-gray-500
               transition-all duration-200 font-medium
               peer-focus:top-1 peer-valid:top-1 peer-valid:text-sm peer-focus:text-sm peer-focus:text-gray-600
                "
          >
            Story
          </label>
        </div>
        <div className="flex items-center gap-2 mt-8">
          <IoHome />
          <h1 className="font-medium tracking-widest ">Add Certificates</h1>
        </div>
        <div className="relative mt-5 border border-gray-100 p-5 h-40 rounded-2xl flex flex-col gap-2 items-center justify-center">
          <FaDownload className="text-7xl" />
          <p>Upload your image</p>
          <div className="relative">
            <input
              type="file"
              className="bg-gray-300 w-40 rounded-2xl h-10 cursor-pointer"
            />
            <p className=" text-black absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 tracking-widest font-medium text-sm">
              Upload
            </p>
          </div>
        </div>
      </form>
    </BorderGlow>
  );
}
