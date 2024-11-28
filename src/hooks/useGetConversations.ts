import { useEffect, useState } from "react";
import toast from "react-hot-toast";

interface Conversation {
  _id: string;
  username: string;
  profilePic: string;
  [key: string]: any; // Extendable for other properties
}

const useGetConversations = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [conversations, setConversations] = useState<Conversation[]>([]);

  useEffect(() => {
    const getConversations = async () => {
      try {
        setLoading(true);

        const res = await fetch("/api/users");

        if (!res.ok) {
          throw new Error(`Error: ${res}`);
        }

        const data: Conversation[] | { error?: string } = await res.json();

        if ("error" in data && data.error) {
          throw new Error(data.error);
        }

        setConversations(data as Conversation[]);
      } catch (error: any) {
        toast.error(error.message || "An error occurred while fetching conversations.");
      } finally {
        setLoading(false);
      }
    };

    getConversations();
  }, []);

  return { loading, conversations };
};

export default useGetConversations;
