import { createContext, useState } from "react";

export const UserMessagesContext = createContext();

export function UserMessagesProvider({ children }) {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm your AI assistant. How can I help you today?",
      isUser: false,
    },
  ]);

  return (
    <UserMessagesContext.Provider value={{ messages, setMessages }}>
      {children}
    </UserMessagesContext.Provider>
  );
}
