"use client";

import { FullConversationType } from "../../../../../types";
import { useCallback, useMemo } from "react";
import { useRouter } from "next/navigation";
import { Conversation, Message, Student } from "@prisma/client";
import { format } from "date-fns";
import clsx from "clsx";
import useOtherUser from "../../../../../hooks/useOtherUser";
import Avatar from "../../_components/Avatar";
import AvatarGroup from "../../_components/AvatarGroup";
import { useUser } from "@clerk/nextjs";

interface ConversationBoxProps {
  data: FullConversationType;
  selected?: boolean;
}

const ConversationBox: React.FC<ConversationBoxProps> = ({
  data,
  selected,
}) => {
  const otherUser = useOtherUser(data);
  const { user } = useUser();
  const router = useRouter();

  const handleClick = useCallback(() => {
    router.push(`/community/conversations/${data.id}`);
  }, [data.id, router]);

  const lastMessage = useMemo(() => {
    const messages = data.messages || [];
    return messages[messages.length - 1];
  }, [data.messages]);

  const userEmail = useMemo(() => {
    return user?.emailAddresses[0].emailAddress;
  }, [user?.emailAddresses[0].emailAddress]);

  const hasSeen = useMemo(() => {
    if (!lastMessage) {
      return false;
    }

    const seenArray = lastMessage.seen || [];

    if (!userEmail) {
      return false;
    }

    return seenArray.filter((user) => user.email === userEmail).length !== 0;
  }, [userEmail, lastMessage]);

  const lastMessageText = useMemo(() => {
    if (lastMessage?.image) {
      return "Sent an image";
    }

    if (lastMessage?.body) {
      return lastMessage?.body;
    }

    return "Started a conversation";
  }, [lastMessage]);

  return (
    <div
      className={clsx(
        "w-full relative flex items-center space-x-3 hover:bg-gray-700 rounded-lg transition cursor-pointer p-3",
        selected ? "bg-gray-700" : "bg-gray-800"
      )}
      onClick={handleClick}
    >
      {data.isGroup ? (
        <AvatarGroup users={data.students} />
      ) : (
        <Avatar user={otherUser} />
      )}
      <div className="min-w-0 flex-1">
        <div className="focus:outline-none">
          <div className="flex justify-between items-center mb-1">
            <p className="text-md font-medium text-gray-200">
              {data.name || otherUser?.studentName || ""}
            </p>
            {lastMessage?.created_at && (
              <p className="text-xs text-gray-400 font-light">
                {format(new Date(lastMessage.created_at), "p")}
              </p>
            )}
          </div>
          <p
            className={clsx(
              "truncate text-sm",
              hasSeen ? "text-gray-400" : "text-gray-100 font-medium"
            )}
          >
            {lastMessageText}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConversationBox;
