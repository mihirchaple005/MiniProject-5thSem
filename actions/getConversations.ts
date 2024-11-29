import { getSelf } from '../lib/auth-service';
import { PrismaClient } from '@prisma/client';


const getConversations = async () => {
    const prisma = new PrismaClient();
    const currentUser = await getSelf();

    if(!currentUser?.id) {
        return [];
    }

    try {
       const conversations = await prisma.conversation.findMany({
        orderBy: {
            lastMessageAt: 'desc'
        },
        
        where: {
            userIds: {
                has: currentUser.id 
            }
        },

        include: {
            students: true,
            messages: {
                include: {
                    sender: true,
                    seen: true 
                }
            }
        }
    }) 

    return conversations;

    } catch (error) {
        return [];
    }

}

export default getConversations;