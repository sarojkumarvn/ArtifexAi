import React, { useState } from 'react';

function ChatWindow({ theme }) {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! I'm your AI assistant. How can I help you today?", isUser: false },
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      setMessages([...messages, { id: messages.length + 1, text: inputValue, isUser: true }]);
      setInputValue('');
    }
  };

  return (
    <div className="flex-1 flex flex-col">
      <div className="flex-1 overflow-y-auto p-4 lg:p-6 space-y-4">
        {messages.map((message) => (
          <div key={message.id} className={`flex gap-4 ${message.isUser ? 'flex-row-reverse' : ''}`}>
            <div className={`w-8 h-8 rounded-full ${message.isUser ? 'bg-gray-600' : 'bg-primary'} flex items-center justify-center flex-shrink-0`}>
              <i className={`ri-${message.isUser ? 'user' : 'robot'}-line`}></i>
            </div>
            <div className={`flex-1 transition-colors duration-200 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'} rounded-lg p-4 max-w-3xl`}>
              <p>{message.text}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t border-gray-700 p-4">
        <div className="max-w-4xl mx-auto relative">
          <textarea
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="w-full bg-gray-800 rounded-lg pl-4 pr-24 py-3 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            rows="3"
            placeholder="Type your message here..."
          />
          <div className="absolute right-2 bottom-2 flex gap-2">
            <button className="p-2 hover:bg-gray-700 rounded-full cursor-pointer">
              <i className="ri-image-line w-6 h-6 flex items-center justify-center"></i>
            </button>
            <button onClick={handleSendMessage} className="bg-primary hover:bg-secondary text-white px-4 py-2 rounded-button flex items-center gap-2 cursor-pointer whitespace-nowrap">
              <i className="ri-send-plane-line w-5 h-5 flex items-center justify-center"></i>
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatWindow;