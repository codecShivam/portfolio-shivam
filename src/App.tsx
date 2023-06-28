import { ReactElement, useState } from 'react';
import Home from './components/Home';
import Sidebar from './components/Sidebar';
import About from './pages/about/About';
import ContactUs from './pages/contact/Contact';
// import Homepage from './pages/Homepage';

function App(): ReactElement {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div>
      <Home openSidebar={() => setIsSidebarOpen(true)} />
      <Sidebar closeSidebar={closeSidebar} isSidebarOpen={isSidebarOpen} />
      <About openSidebar={() => setIsSidebarOpen(true)} closeSidebar={closeSidebar} isSidebarOpen={isSidebarOpen} />
      <ContactUs openSidebar={() => setIsSidebarOpen(true)} closeSidebar={closeSidebar} isSidebarOpen={isSidebarOpen} />

    </div>
  );
}

export default App;
