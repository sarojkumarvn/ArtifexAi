import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import ChatWindow from './components/ChatWindow';
import SettingsModal from './components/SettingsModal';

function App() {
  const [theme, setTheme] = useState('dark');
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const openSettingsTab = () => {
    setIsSettingsOpen(true);
  };

  const closeSettingsTab = () => {
    setIsSettingsOpen(false);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`h-screen flex transition-colors duration-200 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      {/* Sidebar for larger screens */}
      <div className={`fixed lg:relative z-30 lg:z-0 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 transition-transform duration-200 ease-in-out`}>
        <Sidebar openSettingsTab={openSettingsTab} />
      </div>

      {/* Overlay for mobile sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 lg:hidden z-20"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Chat Window */}
      <div className="flex-1 flex flex-col relati">
        <header className="h-16 border-b flex items-center px-4 lg:px-6 justify-between transition-colors duration-200 border-gray-700">
          <button onClick={toggleSidebar} className="lg:hidden p-2 hover:bg-gray-700 rounded-full cursor-pointer">
            <i className="ri-menu-line w-6 h-6 flex items-center justify-center"></i>
          </button>
          <h1 className="text-xl font-semibold">Artifex AI</h1>
          <button onClick={toggleTheme} className="p-2 hover:bg-gray-700 rounded-full cursor-pointer">
            <i className={`ri-${theme === 'dark' ? 'sun' : 'moon'}-line w-6 h-6 flex items-center justify-center`}></i>
          </button>
        </header>
        <ChatWindow theme={theme} />
      </div>

      {/* Settings of the Settingmodal  */}
      {isSettingsOpen && <SettingsModal closeSettingsTab={closeSettingsTab} />}
    </div>
  );
}

export default App;