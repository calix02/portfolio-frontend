import { FaUserAlt } from "react-icons/fa";
import { FaBookOpen, FaUserTie } from "react-icons/fa6";
import { IoHome } from "react-icons/io5";
import { MdOutlineDescription } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import Me from "@/assets/cartoon_me.svg";
import { useState, type FormEvent } from "react";
import axios from "axios";

export function HomeContent() {

  const [profile, setProfile] = useState<File | null>(null);
  const [role, setRole] = useState<string>("");
  const [nickname, setNickName] = useState<string>("");
  const [quotes1, setQuotes1] = useState<string>("");
  const [quotes2, setQuotes2] = useState<string>("");
  const [description, setDescription] = useState<string>("");




 

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
  const formData = new FormData();

  formData.append("role", role);
  formData.append("nickname", nickname);
  formData.append("quotes1", quotes1);
  formData.append("quotes2", quotes2);
  formData.append("description", description);
  if (profile) formData.append("profile", profile);

  await axios.post("http://localhost:5000/api/home/projects", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  })
};

  return (
    <div className="w-full pb-10 border border-gray-200 rounded-2xl px-10 pt-5">
      <div className="flex items-center gap-2">
        <IoHome />
        <h1 className="font-medium tracking-widest">Home Content</h1>
      </div>
      <form onSubmit={handleSubmit} className="flex gap-4 mt-6">
        <div className="w-full flex flex-col gap-5">
          <div className="w-30 h-30  relative rounded-full flex items-center justify-center  border border-white">
            <img src={Me} className=" h-30"  alt="image"/>
            <FaEdit className="absolute bottom-0 right-0 text-2xl" />
          </div>
          {/* Role */}
          <div className="relative mt-5">
            <FaUserTie className="absolute top-1/2 -translate-y-1/2 left-2" />
            <input
              type="text"
              name="role"
              className="peer border-b border-gray-200 px-8 py-3 focus:outline-none focus:ring-0 focus:border-emerald-500 w-full"
              placeholder=""
              required
              onChange={(e) => setRole(e.target.value)}
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
               onChange={(e) => setNickName(e.target.value)}
            />
            <label className="absolute left-8 top-1/2 -translate-y-1/2 text-gray-500 transition-all duration-200 font-medium peer-focus:top-1 peer-valid:top-1 peer-valid:text-sm peer-focus:text-sm peer-focus:text-gray-600">
              Nickname
            </label>
          </div>
        </div>
        <div className="w-full flex flex-col gap-5">
          {/* Quotes */}
          <div className="relative mt-5">
            <FaBookOpen className="absolute top-1/2 -translate-y-1/2 left-2" />
            <input
              type="text"
              name="quotes1"
              className="peer border-b border-gray-200 px-8 py-3 focus:outline-none focus:ring-0 focus:border-emerald-500 w-full"
              placeholder=""
              required
               onChange={(e) => setQuotes1(e.target.value)}
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
               onChange={(e) => setQuotes2(e.target.value)}
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
              onChange={(e) => setDescription(e.target.value)}
            />
            <label className="absolute left-8 top-1/2 -translate-y-1/2 text-gray-500 transition-all duration-200 font-medium peer-focus:top-1 peer-valid:top-1 peer-valid:text-sm peer-focus:text-sm peer-focus:text-gray-600">
              Description
            </label>
          </div>
          <div className="relative mt-5">
            <MdOutlineDescription className="absolute top-1/2 -translate-y-1/2 left-2" />
            <input
              type="file"
              name="description"
              className="peer border-b border-gray-200 px-8 py-3 focus:outline-none focus:ring-0 focus:border-emerald-500 w-full"
              placeholder=""
              required
              onChange={(e) => setProfile(e.target.files?.[0] || null)}
            />
            <label className="absolute left-8 top-1/2 -translate-y-1/2 text-gray-500 transition-all duration-200 font-medium peer-focus:top-1 peer-valid:top-1 peer-valid:text-sm peer-focus:text-sm peer-focus:text-gray-600">
              Profile
            </label>
          </div>
          <div className="flex items-center gap-2  w-full ">
            <button
              type="submit"
              className="w-full h-12 rounded-2xl bg-white font-bold cursor-pointer textsm text-black"
            >
              Save Changes
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
