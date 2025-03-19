import React, { useState, useRef, useContext, useEffect } from "react";
import { UserMessagesContext } from "../context/UserMessagesContext";
import { generateImageContent, generateTextContent } from "../util/GeminiApi";

function ChatWindow({ theme }) {
  const { messages, setMessages } = useContext(UserMessagesContext);
  const [inputValue, setInputValue] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [imageCaption, setImageCaption] = useState("");
  const [showImagePopup, setShowImagePopup] = useState(false);
  const fileInputRef = useRef(null);
  
  // Fixed: Ensure this ref points to the main messages container
  const messageContainerRef = useRef(null);

  // Function to generate bot response
  const generateBotResponse = async (userMessage) => {
    try {
      const thinkingMessage = {
        id: messages.length + 1,
        text: "Thinking...",
        isUser: false,
      };
      setMessages((prevMessages) => [...prevMessages, thinkingMessage]);

      const result = await generateTextContent(userMessage);
      const botResponse = result;

      setTimeout(() => {
        setMessages((prevMessages) => {
          const updatedMessages = prevMessages.filter(
            (msg) => msg.text !== "Thinking..."
          );
          return [
            ...updatedMessages,
            {
              id: updatedMessages.length + 1,
              text: botResponse,
              isUser: false,
            },
          ];
        });
      }, 2000);
    } catch (error) {
      console.error("Error generating bot response:", error);
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages.filter((msg) => msg.text !== "Thinking..."),
          {
            id: messages.length + 1,
            text: "Sorry, I couldn't process your request. Please try again.",
            isUser: false,
          },
        ]);
      }, 2000);
    }
  };

  // Function to send text message
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

  // Function to handle image upload
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file); // Store the file object
      setShowImagePopup(true);

      // Show preview
      const reader = new FileReader();
      reader.onload = (e) => setImagePreview(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  //  Scrollibg effect 
  useEffect(() => {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTo({
        top: messageContainerRef.current.scrollHeight,
        behavior: "smooth", // Smooth scrolling effect
      });
    }
  }, [messages]);

  // Function to send image
  const handleSendImage = async () => {
    if (!selectedFile) return;

    const userMessage = {
      id: messages.length + 1,
      image: imagePreview,
      caption: imageCaption,
      isUser: true,
    };
    setMessages([...messages, userMessage]);

    // Reset states
    setSelectedFile(null);
    setImageCaption("");
    setShowImagePopup(false);

    // Send image to API
    try {
      const botResponse = await generateImageContent(selectedFile);
      setMessages((prevMessages) => [
        ...prevMessages,
        { id: prevMessages.length + 1, text: botResponse, isUser: false },
      ]);
    } catch (error) {
      console.error("Error generating bot response:", error);
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          id: prevMessages.length + 1,
          text: "Sorry, I couldn't process your image. Please try again.",
          isUser: false,
        },
      ]);
    }
  };

  return (
    <div
      className={`flex-1 flex flex-col ${
        showImagePopup ? "blur-background" : ""
      }`}
    >
      <div
        className="flex-1 overflow-y-auto p-6 space-y-4"
        ref={messageContainerRef}
      >
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex gap-4 ${message.isUser ? "flex-row-reverse" : ""}`}
          >
            <div
              className={`w-8 h-8 rounded-full ${
                message.isUser ? "bg-gray-600" : "bg-primary"
              } flex items-center justify-center flex-shrink-0`}
            >
              <i className={`ri-${message.isUser ? "user" : "robot"}-line`}></i>
            </div>
            <div
              className={`flex-1 transition-colors duration-200 ${
                theme === "dark" ? "bg-gray-800" : "bg-gray-100"
              } rounded-lg p-4 max-w-3xl`}
            >
              {message.text && <p>{message.text}</p>}
              {message.image && (
                <div>
                  <img
                    src={message.image}
                    alt="Uploaded"
                    className="mt-2 rounded-lg w-48 h-30 object-cover md:w-64 md:h-48 lg:w-80 lg:h-60"
                  />
                  {message.caption && (
                    <p
                      className={`mt-2 text-sm ${
                        theme === "dark" ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {message.caption}
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="border-t border-gray-700 p-4 sticky bottom-0 bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <textarea
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="w-full bg-gray-800 rounded-lg pl-4 pr-24 py-3 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            rows="3"
            placeholder="Type your message here..."
          />
          <div className="absolute right-2 bottom-2 flex gap-2">
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleImageUpload}
              accept="image/*"
            />
            <button
              onClick={() => fileInputRef.current.click()}
              className="p-2 hover:bg-gray-700 rounded-full cursor-pointer"
            >
              <i className="ri-image-line w-6 h-6 flex items-center justify-center"></i>
            </button>
            <button
              onClick={handleSendMessage}
              className="bg-primary hover:bg-secondary text-white px-4 py-2 rounded-button flex items-center gap-2 cursor-pointer"
            >
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
