import { NextResponse } from "next/server";
import { pusherServer } from "../../../../../lib/pusher";
import { getSelf } from "../../../../../lib/auth-service";
import { PrismaClient } from "@prisma/client";

interface IParams { 
    conversationId: string;
}

export async function DELETE(request: Request, {params} : {params: IParams}) {
    try {
        const { conversationId } = params;
        const currentUser = await getSelf();
        const prisma = new PrismaClient();

        if(!currentUser?.id) {
            return new NextResponse('Unauthorized', {status: 401})
        }

        const existingConversation = await prisma.conversation.findUnique({
            where: {
                id: conversationId
            },
            include: {
                students: true
            }
        })

        if(!existingConversation) {
            return new NextResponse('Invalid ID', { status: 400 })
        }

        const deletedConversation = await prisma.conversation.deleteMany({
            where: {
                id: conversationId,
                userIds: {
                    hasSome: [currentUser.id]
                }
            }
        })

        existingConversation.students.forEach((user) => {
            if(user.email) {
                pusherServer.trigger(user.email, 'conversation:remove', existingConversation)
            }
        })

        return NextResponse.json(deletedConversation);


    } catch (error) {
        console.log("ERROR_CONVERSATION_DELETE")
        return new NextResponse('Internal Error', {status: 500})
    }
}