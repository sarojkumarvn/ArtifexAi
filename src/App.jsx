import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import ChatWindow from './components/ChatWindow';
import SettingsModal from './components/SettingsModal';

function App() {
  const [theme, setTheme] = useState('dark');
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const openSettingsTab = () => {
    setIsSettingsOpen(true);
  };

  const closeSettingsTab = () => {
    setIsSettingsOpen(false);
  };

  return (
    <div className={`h-screen flex transition-colors duration-200 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      {/* Sidebar - Fixed and Non-scrollable */}
      <div className="fixed inset-y-0 left-0 w-64 z-30">
        <Sidebar openSettingsTab={openSettingsTab} />
      </div>

      {/* Chat Window - Adjusted for Fixed Sidebar */}
      <div className="flex-1 flex flex-col ml-64">
        <header className="h-16 border-b sticky top-0 bg-black flex items-center px-4 lg:px-6 justify-between transition-colors duration-200 border-gray-700">
          <h1 className="text-xl ml-10 font-semibold">Artifex AI</h1>
          <button onClick={toggleTheme} className="p-2 hover:bg-gray-700 rounded-full cursor-pointer">
            <i className={`ri-${theme === 'dark' ? 'sun' : 'moon'}-line w-6 h-6 flex items-center justify-center`}></i>
          </button>
        </header>
        <ChatWindow theme={theme} />
      </div>

      {/* Settings Modal */}
      {isSettingsOpen && <SettingsModal closeSettingsTab={closeSettingsTab} />}
    </div>
  );
}

export default App;