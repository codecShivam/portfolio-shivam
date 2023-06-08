import React, { useContext } from 'react';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from './Context';
const Home = () => {
	const { openSidebar, isSidebarOpen } = useGlobalContext();

	return (
		<main>
			<button
				onClick={openSidebar}
				className={`${
					isSidebarOpen ? '-translate-x-8 ' : 'translate-x-0'
				} fixed top-2 -left-4 transition transform ease-linear duration-500 text-gray-600 w-10 h-10 rounded-full flex items-center justify-center active:bg-gray-300 focus:outline-none ml-6 hover:bg-gray-200 hover:text-gray-800`}
			>
				<FaBars className="w-7 h-7" />
			</button>
		</main>
	);
};

export default Home;