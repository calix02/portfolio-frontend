import { useHomeData } from "@/hooks/useHomeData";
import { FaUserAlt } from "react-icons/fa";
import { FaBookOpen, FaDownload, FaUserTie } from "react-icons/fa6";
import { IoHome } from "react-icons/io5";
import { MdOutlineDescription } from "react-icons/md";

export function HomeContent() {
  const { homeData } = useHomeData();

  return (
    <div className="w-150 pb-10 border border-gray-200 rounded-2xl px-10 pt-5">
      <div className="flex items-center gap-2">
        <IoHome />
        <h1 className="font-medium tracking-widest">Home Content</h1>
      </div>
      <form className="flex flex-col gap-4 mt-6">
        {/* Role */}
        <div className="relative mt-5">
          <FaUserTie className="absolute top-1/2 -translate-y-1/2 left-2" />
          <input
            type="text"
            name="role"
            className="peer border-b border-gray-200 px-8 py-3 focus:outline-none focus:ring-0 focus:border-emerald-500 w-full"
            placeholder=""
            required
            value={homeData?.role || ""}
          />
          <label className="absolute left-8 top-1/2 -translate-y-1/2 text-gray-500 transition-all duration-200 font-medium peer-focus:top-1 peer-valid:top-1 peer-valid:text-sm peer-focus:text-sm peer-focus:text-gray-600">
            Role
          </label>
        </div>
        {/* Nickname */}
        <div className="relative mt-5">
          <FaUserAlt className="absolute top-1/2 -translate-y-1/2 left-2" />
          <input
            type="text"
            name="nickname"
            className="peer border-b border-gray-200 px-8 py-3 focus:outline-none focus:ring-0 focus:border-emerald-500 w-full"
            placeholder=""
            required
            value={homeData?.nickname || ""}
          />
          <label className="absolute left-8 top-1/2 -translate-y-1/2 text-gray-500 transition-all duration-200 font-medium peer-focus:top-1 peer-valid:top-1 peer-valid:text-sm peer-focus:text-sm peer-focus:text-gray-600">
            Nickname
          </label>
        </div>
        {/* Quotes */}
        <div className="relative mt-5">
          <FaBookOpen className="absolute top-1/2 -translate-y-1/2 left-2" />
          <input
            type="text"
            name="quotes1"
            className="peer border-b border-gray-200 px-8 py-3 focus:outline-none focus:ring-0 focus:border-emerald-500 w-full"
            placeholder=""
            required
            value={homeData?.quotes1 || ""}
          />
          <label className="absolute left-8 top-1/2 -translate-y-1/2 text-gray-500 transition-all duration-200 font-medium peer-focus:top-1 peer-valid:top-1 peer-valid:text-sm peer-focus:text-sm peer-focus:text-gray-600">
            Quotes1
          </label>
        </div>
        <div className="relative mt-5">
          <FaBookOpen className="absolute top-1/2 -translate-y-1/2 left-2" />
          <input
            type="text"
            name="quotes2"
            className="peer border-b border-gray-200 px-8 py-3 focus:outline-none focus:ring-0 focus:border-emerald-500 w-full"
            placeholder=""
            required
            value={homeData?.quotes2 || ""}
          />
          <label className="absolute left-8 top-1/2 -translate-y-1/2 text-gray-500 transition-all duration-200 font-medium peer-focus:top-1 peer-valid:top-1 peer-valid:text-sm peer-focus:text-sm peer-focus:text-gray-600">
            Quotes2
          </label>
        </div>
        {/* Description */}
        <div className="relative mt-5">
          <MdOutlineDescription className="absolute top-1/2 -translate-y-1/2 left-2" />
          <input
            type="text"
            name="description"
            className="peer border-b border-gray-200 px-8 py-3 focus:outline-none focus:ring-0 focus:border-emerald-500 w-full"
            placeholder=""
            required
            value={homeData?.description || ""}
          />
          <label className="absolute left-8 top-1/2 -translate-y-1/2 text-gray-500 transition-all duration-200 font-medium peer-focus:top-1 peer-valid:top-1 peer-valid:text-sm peer-focus:text-sm peer-focus:text-gray-600">
            Description
          </label>
        </div>
        {/* Image Upload */}
        <div className="flex items-center gap-2 mt-">
          <IoHome />
          <h1 className="font-medium tracking-widest">Upload Profile</h1>
        </div>
        <div className="relative mt-5 border border-gray-100 p-5 h-40 rounded-2xl flex flex-col gap-2 items-center justify-center">
          <FaDownload className="text-7xl" />
          <p>Upload your image</p>
          <div className="relative">
            <input
              name="profile"
              type="file"
              className="bg-gray-300 w-40 rounded-2xl h-10 cursor-pointer"
            />
            <p className=" text-black absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 tracking-widest font-medium text-sm pointer-events-none">
              Upload
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2  w-full ">
          <button
            type="submit"
            className="w-full h-12 rounded-2xl bg-white font-bold cursor-pointer textsm text-black"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}
