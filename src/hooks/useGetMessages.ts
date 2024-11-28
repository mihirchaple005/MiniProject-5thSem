import { useEffect, useState } from "react";
import useConversation from "../zustand/useConversation";
import toast from "react-hot-toast";

// Define the Message type
interface Message {
  _id: string;
  text: string;
  senderId: string;
  conversationId: string;
  createdAt: string;
  [key: string]: any; // Add additional fields as needed
}

interface UseGetMessagesResult {
  messages: Message[];
  loading: boolean;
}

const useGetMessages = (): UseGetMessagesResult => {
  const [loading, setLoading] = useState<boolean>(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  useEffect(() => {
    const getMessages = async () => {
      try {
        setLoading(true);

        if (!selectedConversation?._id) {
          throw new Error("Conversation ID is missing");
        }

        const res = await fetch(`/api/messages/${selectedConversation._id}`);

        if (!res.ok) {
          throw new Error(`Failed to fetch messages: ${res.statusText}`);
        }

        const data: Message[] = await res.json();

        setMessages(data);
      } catch (error: any) {
        toast.error(error.message || "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    if (selectedConversation?._id) {
      getMessages();
    }
  }, [selectedConversation?._id, setMessages]);

  return { messages, loading };
};

export default useGetMessages;
