import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import MessageContainer from "../../components/message/MessageContainer";

const CommunityPage: React.FC = () => {
  return (
    <div className="flex  h-[45rem] rounded-lg overflow-hidden 
    bg-gray-200 flex-1 flexDirection-row m-10">
      {/* Sidebar for community navigation */}
      <Sidebar />

      {/* Message container for chats and community interactions */}
      <MessageContainer />
    </div>
  );
};

export default CommunityPage;
