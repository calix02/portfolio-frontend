import { useState } from "react";
import { FaPlus, FaTrash, FaUserAlt } from "react-icons/fa";
import { FaBookOpen, FaDownload, FaUserTie } from "react-icons/fa6";
import { IoHome } from "react-icons/io5";
import { MdOutlineDescription } from "react-icons/md";

export function HomeContent() {
  // Fix: Use a function to initialize state so Date.now() isn't called directly during render logic
  const [skills, setSkills] = useState(() => [{ id: Date.now() }]);

  const addSkillField = () => {
    setSkills([...skills, { id: Date.now() }]);
  };

  const removeSkillField = (id: number) => {
    if (skills.length > 1) {
      setSkills(skills.filter((skill) => skill.id !== id));
    }
  };

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
            name="quotes"
            className="peer border-b border-gray-200 px-8 py-3 focus:outline-none focus:ring-0 focus:border-emerald-500 w-full"
            placeholder=""
            required
          />
          <label className="absolute left-8 top-1/2 -translate-y-1/2 text-gray-500 transition-all duration-200 font-medium peer-focus:top-1 peer-valid:top-1 peer-valid:text-sm peer-focus:text-sm peer-focus:text-gray-600">
            Quotes
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
          />
          <label className="absolute left-8 top-1/2 -translate-y-1/2 text-gray-500 transition-all duration-200 font-medium peer-focus:top-1 peer-valid:top-1 peer-valid:text-sm peer-focus:text-sm peer-focus:text-gray-600">
            Description
          </label>
        </div>
        {/* Image Upload */}
        <div className="flex items-center gap-2 mt-5">
          <IoHome />
          <h1 className="font-medium tracking-widest">Upload Profile</h1>
        </div>
        <div className="relative mt-5 border border-gray-100 p-5 h-40 rounded-2xl flex flex-col gap-2 items-center justify-center">
          <FaDownload className="text-7xl" />
          <p>Upload your image</p>
          <div className="relative">
            <input
              type="file"
              className="bg-gray-300 w-40 rounded-2xl h-10 cursor-pointer"
            />
            <p className=" text-black absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 tracking-widest font-medium text-sm pointer-events-none">
              Upload
            </p>
          </div>
        </div>
        {/* --- Skill Content Section Header --- */}
        <div className="flex items-center justify-between mt-10">
          <div className="flex items-center gap-2">
            <IoHome />
            <h1 className="font-medium tracking-widest">Skill Content</h1>
          </div>
          <button
            type="button"
            onClick={addSkillField}
            className="text-emerald-500 hover:text-emerald-400 transition-colors"
          >
            <FaPlus />
          </button>
        </div>
        {/* Quotes */}
        <div className="relative mt-5">
          <FaBookOpen className="absolute top-1/2 -translate-y-1/2 left-2" />
          <input
            type="text"
            name="quotes"
            className="peer border-b border-gray-200 px-8 py-3 focus:outline-none focus:ring-0 focus:border-emerald-500 w-full"
            placeholder=""
            required
          />
          <label className="absolute left-8 top-1/2 -translate-y-1/2 text-gray-500 transition-all duration-200 font-medium peer-focus:top-1 peer-valid:top-1 peer-valid:text-sm peer-focus:text-sm peer-focus:text-gray-600">
            Skill Title
          </label>
        </div>
        {/* Quotes */}
        <div className="relative mt-5">
          <FaBookOpen className="absolute top-1/2 -translate-y-1/2 left-2" />
          <input
            type="text"
            name="quotes"
            className="peer border-b border-gray-200 px-8 py-3 focus:outline-none focus:ring-0 focus:border-emerald-500 w-full"
            placeholder=""
            required
          />
          <label className="absolute left-8 top-1/2 -translate-y-1/2 text-gray-500 transition-all duration-200 font-medium peer-focus:top-1 peer-valid:top-1 peer-valid:text-sm peer-focus:text-sm peer-focus:text-gray-600">
            Skill Description
          </label>
        </div>{" "}
        {/* Quotes */}
        <div className="relative mt-5">
          <FaBookOpen className="absolute top-1/2 -translate-y-1/2 left-2" />
          <input
            type="text"
            name="quotes"
            className="peer border-b border-gray-200 px-8 py-3 focus:outline-none focus:ring-0 focus:border-emerald-500 w-full"
            placeholder=""
            required
          />
          <label className="absolute left-8 top-1/2 -translate-y-1/2 text-gray-500 transition-all duration-200 font-medium peer-focus:top-1 peer-valid:top-1 peer-valid:text-sm peer-focus:text-sm peer-focus:text-gray-600">
            Skill Efficiency
          </label>
        </div>
        {/* --- Dynamic Skill Fields --- */}
        <div className="flex flex-col gap-4">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="relative mt-5 flex items-center gap-4"
            >
              <div className="relative flex-1">
                <FaUserAlt className="absolute top-1/2 -translate-y-1/2 left-2" />
                <input
                  type="text"
                  name="skills[]"
                  className="peer border-b border-gray-200 px-8 py-3 focus:outline-none focus:ring-0 focus:border-emerald-500 w-full"
                  placeholder=""
                  required
                />
                <label className="absolute left-8 top-1/2 -translate-y-1/2 text-gray-500 transition-all duration-200 font-medium peer-focus:top-1 peer-valid:top-1 peer-valid:text-sm peer-focus:text-sm peer-focus:text-gray-600">
                  Skill Title
                </label>
              </div>
              {skills.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeSkillField(skill.id)}
                  className="text-red-500 hover:text-red-400"
                >
                  <FaTrash size={14} />
                </button>
              )}
            </div>
          ))}
        </div>
      </form>
    </div>
  );
}
