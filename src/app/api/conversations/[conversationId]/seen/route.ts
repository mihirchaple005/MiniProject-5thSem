import { NextResponse } from "next/server";
import { pusherServer } from "../../../../../../lib/pusher";
import { PrismaClient } from "@prisma/client";
import { getSelf } from "../../../../../../lib/auth-service";

interface IParams {
    conversationId: string;
}

export async function POST(request: Request, {params}: {params:IParams}) {
    try {
        const prisma = new PrismaClient();
        const currentUser = await getSelf();
        
        const { conversationId } = params;
        
        if(!currentUser?.id || !currentUser?.email) { 
            return new NextResponse('Unautorized', { status: 401 })
        }
        
        const conversation = await prisma.conversation.findUnique({
            where: {
                id: conversationId
            },
            include: {
                students: true,
                messages: {
                    include: {
                        seen: true,
                    }
                }
            }
        });
        
        if(!conversation) {
            return new NextResponse('Invalid ID', { status: 400 })
        }
        
        const lastMessage = conversation.messages[conversation.messages.length-1];
        
        if(!lastMessage) {
            return NextResponse.json(conversation)
        }
        

        const updatedMessage = await prisma.message.update({
            where: {
                id: lastMessage.id 
            },
            include: {
                sender: true,
                seen: true 
            },
            data: {
                seen: {
                    connect: {
                        id: currentUser.id 
                    }
                }
            }
        })

        await pusherServer.trigger(currentUser.email, 'conversation:update', {
            id: conversationId,
            messages: updatedMessage 
        })

        if(lastMessage.seenIds.indexOf(currentUser.id) !== -1) {
            return NextResponse.json(conversation)
        }

        await pusherServer.trigger(conversationId!, 'message:update', updatedMessage)
        
        return new NextResponse('Success', { status: 200 })

    } catch (error) {
        console.log("Error Occured HELLO")
        console.log(error, 'ERROR_MESSAGES_SEEN')
        return new NextResponse('Internal Error', { status: 500 })
    }
}