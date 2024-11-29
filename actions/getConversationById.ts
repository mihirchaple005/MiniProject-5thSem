import { PrismaClient } from "@prisma/client";
import { getSelf } from "../lib/auth-service";


const getConversationById =async (conversationId:string) => {
    try {
        const currentUser = await getSelf();
        const prisma = new PrismaClient();

        if(!currentUser?.email) {
            return null;
        }
        const conversation = await prisma.conversation.findUnique({
            where: {
                id: conversationId
            },
            include: {
                students: true 
            }
        })

        return conversation;


    } catch (error) {
        return null;
    }
}

export default getConversationById;