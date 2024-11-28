// import { create } from "zustand"

// const useConversation = create((set : any) => ({
//   selectedConversation: null,
//   setSelectedConversation: (selectedConversation : any) =>
//     set({ selectedConversation }),

//   messages: [],
//   setMessages: (messages : any) => set({ messages }),
// }))

// export default useConversation



import { create } from "zustand";

// Define the Message type
interface Message {
  _id: string;
  text: string;
  senderId: string;
  conversationId: string;
  createdAt: string;
  [key: string]: any; // Additional fields if necessary
}

interface ConversationState {
  selectedConversation: { _id: string } | null;
  setSelectedConversation: (selectedConversation: { _id: string } | null) => void;
  messages: Message[];
  setMessages: (messages: Message[]) => void;
}

const useConversation = create<ConversationState>((set) => ({
  selectedConversation: null,
  setSelectedConversation: (selectedConversation) => set({ selectedConversation }),
  messages: [],
  setMessages: (messages) => set({ messages }),
}));

export default useConversation;
