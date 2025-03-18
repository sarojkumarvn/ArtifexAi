import React, { useState, useRef, useContext } from "react";
import { UserMessagesContext } from "../context/UserMessagesContext";

function ChatWindow({ theme }) {
  const { messages, setMessages } = useContext(UserMessagesContext);
  const [inputValue, setInputValue] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageCaption, setImageCaption] = useState("");
  const [showImagePopup, setShowImagePopup] = useState(false);
  const fileInputRef = useRef(null);

  const generateBotResponse = () => {
    setTimeout(() => {
      const botReply = {
        id: messages.length + 2,
        text: `Thinking...`,
        isUser: false,
      };
      setMessages((prevMessages) => [...prevMessages, botReply]);
    }, 2000);
  };

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      const userMessage = {
        id: messages.length + 1,
        text: inputValue,
        isUser: true,
      };
      setMessages([...messages, userMessage]);
      setInputValue("");

      generateBotResponse(inputValue);
    }
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
        setShowImagePopup(true);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSendImage = () => {
    if (selectedImage) {
      setMessages([
        ...messages,
        {
          id: messages.length + 1,
          image: selectedImage,
          caption: imageCaption,
          isUser: true,
        },
      ]);
      setSelectedImage(null);
      setImageCaption("");
      setShowImagePopup(false);
    }
  };

  return (
    <div className={`flex-1 flex flex-col ${showImagePopup ? "blur-background" : ""}`}>
      <div className="flex-1 overflow-y-auto p-4 lg:p-6 space-y-4">
        {messages.map((message) => (
          <div key={message.id} className={`flex gap-4 ${message.isUser ? "flex-row-reverse" : ""}`}>
            <div className={`w-8 h-8 rounded-full ${message.isUser ? "bg-gray-600" : "bg-primary"} flex items-center justify-center flex-shrink-0`}>
              <i className={`ri-${message.isUser ? "user" : "robot"}-line`}></i>
            </div>
            <div className={`flex-1 transition-colors duration-200 ${theme === "dark" ? "bg-gray-800" : "bg-gray-100"} rounded-lg p-4 max-w-3xl`}>
              {message.text && <p>{message.text}</p>}
              {message.image && (
                <div>
                  <img src={message.image} alt="Uploaded" className="mt-2 rounded-lg w-48 h-30 object-cover md:w-64 md:h-48 lg:w-80 lg:h-60" />
                  {message.caption && <p className="mt-2 text-sm text-gray-100">{message.caption}</p>}
                </div>
              )}
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
            <input type="file" ref={fileInputRef} style={{ display: "none" }} onChange={handleImageUpload} accept="image/*" />
            <button onClick={() => fileInputRef.current.click(handleSendImage)} className="p-2 hover:bg-gray-700 rounded-full cursor-pointer">
              <i className="ri-image-line w-6 h-6 flex items-center justify-center"></i>
            </button>
            <button onClick={handleSendMessage} className="bg-primary hover:bg-secondary text-white px-4 py-2 rounded-button flex items-center gap-2 cursor-pointer">
              <i className="ri-send-plane-line w-5 h-5 flex items-center justify-center"></i>
              Send
            </button>
          </div>
        </div>
      </div>
      {/* POP-UP */}
      {showImagePopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-gray-800 p-6 rounded-lg w-96">
            <img src={selectedImage} alt="Preview" className="mb-4 rounded-lg w-full h-48 object-cover" />
            <textarea
              value={imageCaption}
              onChange={(e) => setImageCaption(e.target.value)}
              className="w-full bg-gray-700 rounded-lg p-2 mb-4 focus:outline-none"
              rows="2"
              placeholder="Add a caption..."
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowImagePopup(false)}
                className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={handleSendImage}
                className="bg-primary hover:bg-secondary text-white px-4 py-2 rounded-lg"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ChatWindow;