import { FaBars } from "react-icons/fa";
import { useState } from "react";
import Sidebar from "./Sidebar";

const Home: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <main>
        <button
        onClick={openSidebar}
        className={`${
          isSidebarOpen ? "-translate-x-8 " : "translate-x-0"
        } fixed top-2 z-20 -left-4 bg-gray-100 transition transform ease-linear duration-500 text-gray-600 w-10 h-10 rounded-full flex items-center justify-center active:bg-gray-300 focus:outline-none ml-6 hover:bg-gray-300 hover:text-gray-800`}
      >
        <FaBars className="w-7 h-7" />
      </button>
      {isSidebarOpen && <Sidebar closeSidebar={closeSidebar} isSidebarOpen={isSidebarOpen} />}
    </main>
  );
};

export default Home;
