// import React, { useState } from "react";

// interface AppContextProps {
//   isSidebarOpen: boolean;
//   openSidebar: () => void;
//   closeSidebar: () => void;
// }

// const AppContext = React.createContext<AppContextProps>({
//   isSidebarOpen: false,
//   openSidebar: () => {},
//   closeSidebar: () => {},
// });

// const AppProvider: React.FC = ({ children }) => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const openSidebar = () => {
//     setIsSidebarOpen(true);
//   };

//   const closeSidebar = () => {
//     setIsSidebarOpen(false);
//   };

//   const contextValue: AppContextProps = {
//     isSidebarOpen,
//     openSidebar,
//     closeSidebar,
//   };

//   return (
//     <AppContext.Provider value={contextValue}>
//       {children}
//     </AppContext.Provider>
//   );
// };

// const useGlobalContext = (): AppContextProps => {
//   return React.useContext(AppContext);
// };

// export { AppProvider, useGlobalContext };
