import React from "react";
import { HiX } from "react-icons/hi";
import { MdContactPage, MdWork } from "react-icons/md";
import { links } from "./Data";
import { useGlobalContext } from "./Context";
import Avatar from "../assets/ShivamYadav_.jpg";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  return (
    <div
      className={`transition-all z-20 duration-500 fixed top-0 ${
        isSidebarOpen ? "left-0" : "-left-64"
      }`}
    >
      <div
        className={`fixed inset-0 bg-black opacity-25 duration-500 transition-all ${
          isSidebarOpen ? "block" : "hidden"
        }`}
        onClick={closeSidebar}
      ></div>
      <div className="flex h-screen   overflow-y-auto flex-col bg-slate-100  w-64 px-4 py-8 rounded-r-lg min-h-screen relative">
        <button
          onClick={closeSidebar}
          className="absolute top-1 right-1  text-gray-600 w-8 h-8 rounded-full flex items-center justify-center active:bg-gray-300 focus:outline-none ml-6 hover:bg-gray-200 hover:text-gray-800"
        >
          <HiX className="w-5 h-5" />
        </button>
        <h2 className="text-2xl font-semibold text-gray-800">
          @Codec<span className="text-indigo-500">Shivam</span>
        </h2>
        <div className="flex flex-col   justify-between flex-1">
          <nav className="text">
            {links.map((link, index) => {
              const { id, url, text, icon } = link;
              return (
                <a
                  key={id}
                  href={url}
                  onClick={() => closeSidebar(true)}
                  className={`capitalize flex items-center px-4 py-2 ${
                    index === 1 ? "bg-slate-300 text-gray-700 mt-5" : null
                  } ${
                    index !== 1
                      ? "mt-5 text-gray-600 hover:bg-slate-300 hover:text-gray-700 transition-colors duration-200 transform"
                      : null
                  } rounded-md`}
                >
                  {icon}
                  <span className="mx-4 font-medium">{text}</span>
                </a>
              );
            })}
            <hr className="my-6" />
            <a
              onClick={() => closeSidebar(true)}
              href="#"
              className="flex items-center px-4 py-2 mt-5 rounded-md text-gray-600 hover:text-gray-700 hover:bg-slate-300 transition-colors transform"
            >
              <MdContactPage className="w-5 h-5" />
              <span className="mx-4 font-medium">Contact</span>
            </a>
            <a
              onClick={() => closeSidebar(true)}
              href="#"
              className="flex items-center px-4 py-2 mt-5 rounded-md text-gray-600 hover:text-gray-700 hover:bg-slate-300 transition-colors transform"
            >
              <MdWork className="w-5 h-5" />
              <span className="mx-4 font-medium">Others</span>
            </a>
          </nav>
          <div className="flex items-center px-4 -mx-2 mt-5">
            <img
              src={Avatar}
              alt="avatar"
              className="h-9 w-9 mx-2 object-center object-cover rounded-full"
            />
            <h4 className="mx-2 font-medium text-gray-800 hover:underline cursor-pointer">
              Shivam Yadav
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
