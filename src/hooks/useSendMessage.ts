import { useState } from "react";
import useConversation from "../zustand/useConversation";
import toast from "react-hot-toast";

// Define the type for a single message
interface Message {
  _id: string;
  text: string;
  senderId: string;
  conversationId: string;
  createdAt: string;
  [key: string]: any; // Include additional fields if necessary
}

// Define the return type of the hook
interface UseSendMessageReturn {
  sendMessage: (message: string) => Promise<void>;
  loading: boolean;
}

const useSendMessage = (): UseSendMessageReturn => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  const sendMessage = async (message: string): Promise<void> => {
    try {
      setLoading(true);

      if (!selectedConversation) {
        throw new Error("No conversation selected");
      }

      const res = await fetch(`/api/messages/send/${selectedConversation._id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });

      const data: Message | { error: string } = await res.json();

      if ("error" in data) {
        throw new Error(data.error);
      }

      setMessages([...messages, data as Message]);
    } catch (error: any) {
      toast.error(error.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return { sendMessage, loading };
};

export default useSendMessage;
