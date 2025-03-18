import React, { useContext } from "react";
import { UserMessagesContext } from "../context/UserMessagesContext";
import { Logo } from "../assets/Logo";

function Sidebar({ openSettings }) {
  const { setMessages } = useContext(UserMessagesContext);

  const handleNewChat = () => {
    setMessages([
      {
        id: 1,
        text: "Hello! I'm your AI assistant. How can I help you today?",
        isUser: false,
      },
    ]);
  };

  return (
    <aside className="w-72 h-screen flex flex-col border-r transition-colors duration-200 bg-gray-800 border-gray-700">
      <div className="p-4 border-b border-gray-700">
        <div className="font-pacifico text-2xl text-center">
          logo
        </div>
      </div>
      <button
        onClick={handleNewChat}
        className="mx-4 mt-4 bg-primary hover:bg-secondary rounded-2xl bg-emerald-300 text-black py-2 px-4 rounded-button flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
      >
        <i className="ri-add-line w-5 h-5 flex items-center justify-center"></i>
        New Chat
      </button>
      <div className="flex-grow">{/* <h3>Chat History</h3> */}</div>
      <div className="p-4 border-t border-gray-700">
        <button
          onClick={openSettings}
          className="w-full text-left px-3 py-2 rounded hover:bg-gray-700 flex items-center gap-2 cursor-pointer"
        >
          <i className="ri-settings-3-line w-5 h-5 flex items-center justify-center"></i>
          Settings
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
