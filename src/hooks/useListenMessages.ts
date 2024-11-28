import { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext";
import useConversation from "../zustand/useConversation";


// Define the type for a single message
interface Message {
  _id: string;
  text: string;
  senderId: string;
  conversationId: string;
  createdAt: string;
  [key: string]: any; // Add additional fields as needed
}

const useListenMessages = (): void => {
  const { socket } = useSocketContext();
  const { messages, setMessages } = useConversation();

  useEffect(() => {
    const handleNewMessage = (newMessage: Message): void => {
      console.log("Received new message:", newMessage);

      setMessages([...messages, newMessage]);
    };

    socket?.on("newMessage", handleNewMessage);

    // Cleanup the event listener on unmount or dependency changes
    return () => {
      socket?.off("newMessage", handleNewMessage);
    };
  }, [socket, setMessages, messages]);
};

export default useListenMessages;
