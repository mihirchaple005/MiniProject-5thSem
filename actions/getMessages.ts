import { PrismaClient } from "@prisma/client";



const getMessages = async (conversationId: string) => {
    const prisma = new PrismaClient();
    try {
        const messages = prisma.message.findMany({
            where: {
                conversationId: conversationId 
            },
            include: {
                sender: true,
                seen: true 
            },
            orderBy: {
                created_at: 'asc'
            }
        })

        return messages;

    } catch (error) {
        return [];
    }    
}

export default getMessages;