import { HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import { links, LinkData } from "./Data";
import Avatar from "../assets/ShivamYadav_.jpg";

interface SidebarProps {
  closeSidebar: () => void;
  isSidebarOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({
  closeSidebar,
  isSidebarOpen,
}) => {
  const handleLinkClick = (url: string) => {
    closeSidebar();
  };

  return (
    <div
      className={`transition-all z-20 duration-1000 fixed top-0 ${isSidebarOpen ? "left-0" : "-left-64"
        }`}
    >
      <div
        className={`fixed inset-0 bg-black opacity-10 duration-500 transition-all ${isSidebarOpen ? "block" : "hidden"
          }`}
        onClick={closeSidebar}
      ></div>
      <div className="flex h-screen overflow-y-auto flex-col bg-slate-100 w-64 px-4 py-8 rounded-r-lg min-h-screen relative">
        <button
          onClick={closeSidebar}
          className="absolute top-1 right-1 text-gray-600 w-8 h-8 rounded-full flex items-center justify-center active:bg-gray-300 focus:outline-none ml-6 hover:bg-gray-200 hover:text-gray-800"
        >
          <HiX className="w-5 h-5" />
        </button>
        <h2 className="text-2xl font-semibold text-gray-800">
          @Codec<span className="text-cyan-500">Shivam</span>
        </h2>
        <div className="flex flex-col justify-between flex-1">
          <nav className="text">
            {links.map((link: LinkData, index: number) => {
              const { id, url, text, icon: Icon } = link;
              return (
                <Link
                  key={id}
                  to={url}
                  onClick={() => handleLinkClick(url)}
                  className={`capitalize ${index === 5 ? "border-t" : ""
                    } flex items-center px-4 py-2 ${index === 1 ? "bg-slate-300 text-gray-700 mt-5" : ""
                    } ${index !== 1
                      ? "mt-5 text-gray-600 hover:bg-slate-300 hover:text-gray-700 transition-colors duration-200 transform"
                      : ""
                    } rounded-md`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="mx-4 font-medium">{text}</span>
                </Link>
              );
            })}
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
