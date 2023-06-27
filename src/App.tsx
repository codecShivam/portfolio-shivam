import { ReactElement, useState } from 'react';
import Home from './components/Home';
import Sidebar from './components/Sidebar';
import Homepage from './pages/Homepage';

function App(): ReactElement {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div>
      <Home openSidebar={() => setIsSidebarOpen(true)} />
      <Sidebar closeSidebar={closeSidebar} isSidebarOpen={isSidebarOpen} />
      <Homepage />
    </div>
  );
}

export default App;
