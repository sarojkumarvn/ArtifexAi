import React from 'react';
import { Logo } from '../assets/Logo';

function Sidebar({ openSettings }) {
  return (
    <aside className="w-72 h-screen flex flex-col border-r transition-colors duration-200 bg-gray-800 border-gray-700">
      <div className="p-4 border-b border-gray-700">
        <div className="font-pacifico text-2xl text-center">
            <Logo />
        </div>
      </div>
      <button className="mx-4 mt-4 bg-primary hover:bg-secondary text-white py-2 px-4 rounded-button flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap">
        <i className="ri-add-line w-5 h-5 flex items-center justify-center"></i>
        New Chat
      </button>
      <nav className="flex-1 overflow-y-auto p-2">
        <div className="space-y-2">
          <button className="w-full text-left px-3 py-2 rounded hover:bg-gray-700 flex items-center gap-2 cursor-pointer">
            <i className="ri-message-3-line w-5 h-5 flex items-center justify-center"></i>
            Project Planning Assistant
          </button>
          <button className="w-full text-left px-3 py-2 rounded hover:bg-gray-700 flex items-center gap-2 cursor-pointer">
            <i className="ri-message-3-line w-5 h-5 flex items-center justify-center"></i>
            Code Review Helper
          </button>
          <button className="w-full text-left px-3 py-2 rounded hover:bg-gray-700 flex items-center gap-2 cursor-pointer">
            <i className="ri-message-3-line w-5 h-5 flex items-center justify-center"></i>
            Creative Writing Partner
          </button>
        </div>
      </nav>
      <div className="p-4 border-t border-gray-700">
        <button onClick={openSettings} className="w-full text-left px-3 py-2 rounded hover:bg-gray-700 flex items-center gap-2 cursor-pointer">
          <i className="ri-settings-3-line w-5 h-5 flex items-center justify-center"></i>
          Settings
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;