import { useMemo } from "react";
import { FullConversationType } from "../types";
import { Student } from "@prisma/client";
import { getSelf } from "../lib/auth-service";
import { useUser } from "@clerk/nextjs";

const useOtherUser = (conversation: FullConversationType | { students: Student[] }) => {
    const {user} = useUser();
    const otherUser = useMemo(()=> {
        const currentUserEmail = user?.emailAddresses[0].emailAddress;

        const otherUser = conversation.students.filter((user) => user.email !== currentUserEmail)

        return otherUser[0];
    }, [user?.emailAddresses[0].emailAddress, conversation.students])

    return otherUser;
} 

export default useOtherUser;